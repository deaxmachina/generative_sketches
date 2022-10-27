<script>
  import { onMount, afterUpdate } from 'svelte'
  import * as THREE from 'three'
  import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'
  import { base } from '$app/paths';
  import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
  import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
  import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass.js'
  import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js'
  import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
  import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js'
  import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader.js'
  import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
  import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js'

  let colour = '#f72585'//'rgb(100, 70, 200)'
  let backgroundColour = '#5ca4a9'
  let geometryType = 'BoxGeometry'
  let canvas

  // Sizes 
  let widthContainer
  let heightContainer
  let windowWidth
  
  $: width = widthContainer
  $: height = windowWidth > 1000 ? widthContainer * 0.9 : widthContainer * 1.1
  $: aspect = width / height

  // Instantiations 
  let scene = undefined
  let material = undefined
  let geometry = undefined
  let mesh = undefined
  let meshes = []
  let camera = undefined 
  let controls = undefined
  let renderer = undefined
  let clock = undefined
  let ambientLight = undefined
  let directionalLight = undefined
  let geometryTypes = {}
  const cameraZoom = 3
  // Texture 
  const textureUrl = `${base}/images/mj3.png`
  let textureLoader
  let texture
  let materialWall = undefined 
  let geometryWall = undefined
  let meshWall = undefined
  // Effects 
  let effectComposer
  let renderPass
  let dotScreenPass
  let glitchPass
  let shaderPass 
  let rgbShiftShader
  let gammaCorrectionShader
  let unrealBloomPass
  let smaaPass


  onMount(() => {
    geometryTypes = {
      'IcosahedronGeometry': new THREE.IcosahedronGeometry(0.2, 10),
      'ConeGeometry': new THREE.ConeGeometry( 0.2, 0.8, 40, 30 ),
      'BoxGeometry': new THREE.BoxGeometry( 0.5, 0.5, 0.5, 30, 30, 30 ),
      'CircleGeometry': new THREE.CircleGeometry( 0.2, 32 ),
    }
    // Manually set sizes on mount as the width and height vars are not available yet
    const wrapper = document.getElementById('simple-cube-wrapper')
    const { width:widthContainer } = wrapper.getBoundingClientRect()
    const width = widthContainer
    const height = windowWidth > 1000 ? widthContainer * 0.9 : widthContainer * 1.1
    const aspect = width / height
      
    // Scene 
    scene = new THREE.Scene()

    /************************************
    ************** Objects **************
    ************************************/
    // Material - try Basic or Points
    material = new THREE.PointsMaterial({
        color: new THREE.Color(colour),
        size: 0.02,
        sizeAttenuation: true,
        transparent: true,
        depthWrite: false,
    })

    // Geometry
    geometry = geometryTypes[geometryType] //THREE.ConeGeometry( 0.5, 2, 4 )

    // Meshes - either Mesh for MeshBasicMaterial or Points for PointMaterial
    const numMeshes = 100 
    for (let i = 0; i < numMeshes; i++) {
      const mesh = new THREE.Points(geometry, material) // THREE.Mesh(geometry, material) 
      const scale = Math.random()
      mesh.scale.set(scale, scale, scale)
      mesh.position.set(
        (0.5 - Math.random()) * 5, 
        (0.5 - Math.random()) * 2 + 1, 
        (0.5 - Math.random()) * 1, 
        )
      meshes.push(mesh)
      scene.add(mesh)
    }

    // Wall 
    textureLoader = new THREE.TextureLoader()
    texture = textureLoader.load(textureUrl)
    materialWall = new THREE.MeshStandardMaterial({
      //color: new THREE.Color('red'),
      map: texture,
      side: THREE.DoubleSide
    })
    geometryWall = new THREE.PlaneGeometry(7, 5.5)
    meshWall = new THREE.Mesh(geometryWall, materialWall)
    meshWall.position.z = -1.25
    meshWall.position.y = -1
    scene.add(meshWall)

    /************************************
    ************** Lights ***************
    ************************************/
    // Ambient light 
    ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)
    // Directional light 
    directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(0, 0, 1)
    scene.add(directionalLight)


    /************************************
    ************** Camera ***************
    ************************************/
    // Orthographic camera
    camera = new THREE.OrthographicCamera()
    camera.left = -cameraZoom * aspect 
    camera.right = cameraZoom * aspect 
    camera.top = cameraZoom
    camera.bottom = -cameraZoom 
    camera.near = -100
    camera.far = 100
    // Set position and look at world center 
    camera.position.set(cameraZoom, cameraZoom, cameraZoom)
    camera.position.x = 0
    camera.position.y = 3

    // Controls 
    controls = new TrackballControls(camera, canvas)
    controls.enableDamping = true
    controls.enabled = false

    // Renderer 
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    //renderer.setClearColor(backgroundColour)
    //renderer.render(scene, camera)

    /************************************
    *********** Post-processing *********
    ************************************/
    const renderTargetClass = THREE.WebGLRenderTarget
    const renderTarget = new renderTargetClass(
      600, 
      800, 
      {
          minFilter: THREE.LinearFilter,
          magFilter: THREE.LinearFilter,
          format: THREE.RGBAFormat
      }
    )

    // Instantiate the effect composer
    effectComposer = new EffectComposer(renderer, renderTarget)
    effectComposer.setSize(width, height)
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    // Add render pass
    renderPass = new RenderPass(scene, camera)
    effectComposer.addPass(renderPass)
    // Dot Screen Pass 
    dotScreenPass = new DotScreenPass()
    dotScreenPass.enabled = false
    effectComposer.addPass(dotScreenPass)
    // Glitch Pass 
    glitchPass = new GlitchPass(scene, camera)
    glitchPass.enabled = false
    glitchPass.uniforms[ 'byp' ].value = 10
    glitchPass.uniforms[ 'amount' ].value = 0.001;
    effectComposer.addPass(glitchPass)
    // RGB Shift Pass 
    rgbShiftShader = new ShaderPass(RGBShiftShader)
    rgbShiftShader.enabled = true
    effectComposer.addPass(rgbShiftShader)
    // Unreal Bloom Pass
    unrealBloomPass = new UnrealBloomPass()
    unrealBloomPass.strength = 0.7
    unrealBloomPass.radius = 1
    unrealBloomPass.threshold = 0.7
    unrealBloomPass.enabled = true
    effectComposer.addPass(unrealBloomPass)
    // Gamma Correction for the colour
    gammaCorrectionShader = new ShaderPass(GammaCorrectionShader)
    gammaCorrectionShader.enabled = false
    effectComposer.addPass(gammaCorrectionShader)

    if (renderer.getPixelRatio() === 1 && !renderer.capabilities.isWebGL2) {
      smaaPass = new SMAAPass()
      effectComposer.addPass(smaaPass)
    }


    /************************************
    ********** Functionality ************
    ************************************/
    // Animate 
    let id
    clock = new THREE.Clock()
    const tick = () => {
      const elapsedTime = clock.getElapsedTime()
      // Update the material, e.g. the uniforms 
      meshes.forEach((mesh, i) => mesh.rotation.y = i%2 === 0 ? Math.sin(elapsedTime) : -Math.sin(elapsedTime))
      
      // Update the controls 
      controls.update()

      // Render 
      //renderer.render(scene, camera)
      effectComposer.render()

      // Call tick function again on the next frame 
      id = window.requestAnimationFrame(tick)
   }
   tick()

   return () => {
      window.cancelAnimationFrame(id);// Stop the animation
      scene = null;
      camera = null;
      controls = null;
      //empty(this.modelContainer);
    }
  })

  // Update for resize 
  // Option 1 - from reactive statements
  $: if (aspect && camera) {
    camera.aspect = aspect
    camera.left = -cameraZoom * aspect 
    camera.right = cameraZoom * aspect 
    camera.updateProjectionMatrix() 
  }
  $: if (renderer && scene && camera && width && height) {
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
    //renderer.render(scene, camera)
    effectComposer.setSize(width, height)
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    effectComposer.render()
  }
  // Update the colour 
  $: if (material) {
    material.color = new THREE.Color(colour)
  }
  // Update the geometry type 
  $: if (geometry && meshes) {
    geometry = geometryTypes[geometryType] 
    meshes.forEach(mesh => mesh.geometry = geometry)
  }
  // Update the background colour
  $: if (renderer) {
    renderer.render(scene, camera)
  }

</script>

<svelte:window bind:innerWidth={windowWidth}/>

<div class='wrapper'>
  <div id='simple-cube-wrapper' bind:clientWidth="{widthContainer}" bind:clientHeight="{heightContainer}">
    <canvas bind:this={canvas}></canvas>
  </div>
</div>


<style lang='scss'>
  .wrapper {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
      min-height: 70vh;
    }
  }
  #simple-cube-wrapper {
    width: 100%;
    max-width: 900px;
    margin: auto;
  }
  // #simple-cube-wrapper::before {
  //   content: "";
  //   position: absolute;
  //   top: 5%; left: 5%;
  //   width: 90%; height: 90%;
  //   filter: brightness(0.8) hue-rotate(350deg) saturate(2) blur(0px) contrast(0.6);
  //   background-image: url('https://mj-gallery.com/ec057a68-17d0-4b58-8cc6-f56fb0e188e7/grid_0.png');
  //   background-size: cover;  
  //   background-repeat: no-repeat; 
  //   background-size: 100%;
  //   background-position: center center;
  //   opacity: 1;
  // }
  canvas {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px rgba(119, 108, 116, 0.808);
  }
</style>