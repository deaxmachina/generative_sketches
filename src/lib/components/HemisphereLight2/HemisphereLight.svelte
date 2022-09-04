<script>
  import { onMount, afterUpdate } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { RectAreaLightHelper }  from 'three/examples/jsm/helpers/RectAreaLightHelper.js'
  import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
  import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
  import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass.js'
  import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js'
  import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
  import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js'
  import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader.js'
  import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
  import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js'
  import { MaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js'
  import { PixelShader } from 'three/examples/jsm/shaders/PixelShader.js'

  import * as dat from 'lil-gui'
  import { createNoise2D } from 'simplex-noise';

  let canvas 
  export let noise2D = createNoise2D()

  // Sizes 
  let widthContainer
  let heightContainer
  let windowWidth
  
  $: width = widthContainer
  $: height = windowWidth > 1000 ? widthContainer * 0.9 : widthContainer * 1
  $: aspect = width / height

  // Instantiate 
  let scene
  let material
  let planeGeometry
  let plane
  const numMeshes = 200
  let geometry
  let meshes = []
  let ambientLight
  let directionalLight
  let pointLight
  let hemisphereLight
  let camera
  const cameraZoom = 1.4
  let controls
  let renderer
  let clock

  let effectComposer
  let renderPass
  let dotScreenPass
  let glitchPass
  let shaderPass 
  let rgbShiftShader
  let gammaCorrectionShader
  let unrealBloomPass
  let smaaPass
  let pixelShader
  let maskPass

  onMount(() => {
    // Manually set sizes on mount as the width and height vars are 
    // not available yet
    const wrapper = document.getElementById('hemi-light-wrapper')
    const { width:widthContainer } = wrapper.getBoundingClientRect()
    const width = widthContainer
    const height = windowWidth > 1000 ? widthContainer * 0.9 : widthContainer * 1
    const aspect = width / height

    // Scene 
    scene = new THREE.Scene()

    /************************************
    ************** Objects **************
    ************************************/
    material = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#fff'),
      roughness: 1,
      metalness: 0.1
    })

    planeGeometry = new THREE.PlaneGeometry(13, 13)
    plane = new THREE.Mesh(planeGeometry, material)
    plane.rotation.x = - Math.PI * 0.5 
    plane.position.y = -1.2
    scene.add(plane)

    // A collection of objects 
    geometry = new THREE.BoxGeometry(1, 1, 1)
    for (let i = 0; i < numMeshes; i ++) {
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(
        noise2D(i, i*2), noise2D(i, i*3), noise2D(i, i*5)
      )
      mesh.scale.set(noise2D(i, i*Math.random()), noise2D(i, i*Math.random()), noise2D(i, i*Math.random()))
      scene.add(mesh)
      meshes.push(mesh)
    }

    /************************************
    ************** Lights ***************
    ************************************/
    // Ambient light 
    ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
    //scene.add(ambientLight)

    // Directional light 
    directionalLight = new THREE.DirectionalLight('#175676', 0.8)
    directionalLight.position.set(1, 0.25, 0)
    scene.add(directionalLight)

    // Point light 
    pointLight = new THREE.PointLight('#252422', 0.8, 3)
    pointLight.position.set(1, -0.4, 1)
    scene.add(pointLight)
    const pointLightUp = new THREE.PointLight('#7b1e7a', 0.4, 3)
    pointLightUp.position.set(0, 1, 2)

    // Hemisphere light
    hemisphereLight = new THREE.HemisphereLight('#3a86ff', '#ff006e', 0.9)
    hemisphereLight.position.set(0.6, -1, 0.2)
    scene.add(hemisphereLight)


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
    camera.lookAt(new THREE.Vector3())
    // Update the camera 
    camera.updateProjectionMatrix()

    // Controls 
    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true


    /************************************
    ************* Renderer **************
    ************************************/
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor( '#fff', 1 )

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
    effectComposer.addPass(glitchPass)
    // RGB Shift Pass 
    rgbShiftShader = new ShaderPass(RGBShiftShader)
    effectComposer.addPass(rgbShiftShader)
    // Unreal Bloom Pass
    unrealBloomPass = new UnrealBloomPass()
    unrealBloomPass.strength = 0.7
    unrealBloomPass.radius = 1
    unrealBloomPass.threshold = 0.6
    unrealBloomPass.enabled = true
    effectComposer.addPass(unrealBloomPass)
    // Gamma Correction for the colour
    gammaCorrectionShader = new ShaderPass(GammaCorrectionShader)
    //effectComposer.addPass(gammaCorrectionShader)

    if (renderer.getPixelRatio() === 1 && !renderer.capabilities.isWebGL2) {
      smaaPass = new SMAAPass()
      effectComposer.addPass(smaaPass)
    }


    /************************************
    ********** Functionality ************
    ************************************/
    // Animate 
    clock = new THREE.Clock()
    let uTime = 0
    let id 
      
    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      // Move the meshes 
      meshes.forEach(mesh => {
        //mesh.position.x += (0.5 - Math.sin(elapsedTime)) * (0.5 - Math.random())* 0.001
        //mesh.position.z += Math.cos(elapsedTime) * (0.5 - Math.random())* 0.003
      })


      // Update the material, light
      uTime = elapsedTime
      // Move the point light in a circle
      const spread = 1.5
      const speed = 1
      pointLight.position.z = Math.cos(uTime*speed)*spread
      pointLight.position.x = Math.sin(uTime*speed)*spread

      // Update the controls 
      controls.update()

      // Render with the effect composer
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

  // Update camera based on aspect i.e. width and height 
  $: if (camera && aspect) {
    camera.aspect = aspect
    camera.left = -cameraZoom * aspect 
    camera.right = cameraZoom * aspect 
    camera.updateProjectionMatrix() 
  }

  // Update the render based on size i.e. width and height
  // Render using the effect composer 
  $: if (renderer && scene && camera && width && height) {
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
    // renderer.render(scene, camera) -- no 
    effectComposer.setSize(width, height)
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    effectComposer.render()
  }

  // Update the cube arrangement (passed in prop)
  $: if (meshes, geometry, material) {
    const meshesNew = []
    meshes.forEach((mesh, i) => {
      mesh.position.set(
        noise2D(i, i*2), noise2D(i, i*3), noise2D(i, i*5)
      )
      mesh.scale.set(noise2D(i, i*Math.random()), noise2D(i, i*Math.random()), noise2D(i, i*Math.random()))
      meshesNew.push(mesh)
      meshes = meshesNew
    })
  }


</script>


<svelte:window bind:innerWidth={windowWidth}/>

<div class='wrapper' id='hemi-light-wrapper' bind:clientWidth="{widthContainer}" bind:clientHeight="{heightContainer}">
  <canvas bind:this={canvas}></canvas>
</div>


<style lang='scss'>
  #hemi-light-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  canvas {
    width: 100%;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px rgba(119, 108, 116, 0.808);
  }
</style>