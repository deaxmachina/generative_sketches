<script>
  import { onMount } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
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


  // Variables 
  let colour = '#f72585'
  let canvas 
  let useGlitch = true

  // Sizes 
  let widthContainer
  let windowWidth
  $: width = widthContainer
  $: height = windowWidth > 1000 ? widthContainer * 0.9 : widthContainer * 1
  $: aspect = width / height

  // Instantiations 
  let scene = undefined 
  let material = undefined 
  let geometry = undefined 
  let mesh = undefined 
  let camera = undefined 
  let controls = undefined 
  let renderer = undefined 
  let clock = undefined 
  const cameraZoom = 4
  // Lights 
  let ambientLight
  let directionalLight
  // Texture 
  const textureUrl = `${base}/images/mj4.png`
  let textureLoader = undefined
  let texture = undefined 
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
    // Manually set sizes on mount as the width and height vars are not available yet
    const wrapper = document.getElementById('birth-city-wrapper')
    const { width:widthContainer } = wrapper.getBoundingClientRect()
    const width = widthContainer
    const height = windowWidth > 1000 ? widthContainer * 0.9 : widthContainer * 1
    const aspect = width / height

    // Scene 
    scene = new THREE.Scene()

    /************************************
    ************** Objects **************
    ************************************/
    // Material
    // Geometry 
    // Meshes 
    // Wall 
    textureLoader = new THREE.TextureLoader()
    texture = textureLoader.load(textureUrl)
    materialWall = new THREE.MeshStandardMaterial({
      map: texture,
      side: THREE.DoubleSide
    })
    geometryWall = new THREE.BoxGeometry(5, 5, 5, 10, 10, 10)//new THREE.PlaneGeometry(7, 7)
    meshWall = new THREE.Mesh(geometryWall, materialWall)
    meshWall.position.z = -1
    meshWall.position.y = 0
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

    /**********************************
    ************* Camera **************
    **********************************/
    // Orthographics camera
    camera = new THREE.OrthographicCamera()
    camera.left = -cameraZoom * aspect 
    camera.right = cameraZoom * aspect 
    camera.top = cameraZoom
    camera.bottom = -cameraZoom 
    camera.near = -100
    camera.far = 100
    // Set position and look at world center 
    //camera.position.set(cameraZoom, cameraZoom, cameraZoom)
    camera.position.x = 0.3
    camera.position.y = 0.2
    camera.position.z = 1

    // Controls 
    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true

    // Renderer 
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor('#2b207a')
    // renderer.render(scene, camera) // no need with effect composer

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
    // Add a render pass 
    renderPass = new RenderPass(scene, camera)
    effectComposer.addPass(renderPass)
    // Dot Screen Pass 
    dotScreenPass = new DotScreenPass()
    dotScreenPass.enabled = false
    effectComposer.addPass(dotScreenPass)
    // Glitch Pass 
    glitchPass = new GlitchPass(scene, camera)
    glitchPass.enabled = true
    glitchPass.uniforms[ 'byp' ].value = 0.1
    glitchPass.uniforms[ 'amount' ].value = 0.1;
    effectComposer.addPass(glitchPass)
    // RGB Shift Pass 
    rgbShiftShader = new ShaderPass(RGBShiftShader)
    rgbShiftShader.enabled = false
    effectComposer.addPass(rgbShiftShader)
    // Unreal Bloom Pass
    unrealBloomPass = new UnrealBloomPass()
    unrealBloomPass.strength = 0.7
    unrealBloomPass.radius = 2
    unrealBloomPass.threshold = 0.9
    unrealBloomPass.enabled = false
    effectComposer.addPass(unrealBloomPass)
    // Gamma Correction for the colour
    gammaCorrectionShader = new ShaderPass(GammaCorrectionShader)
    gammaCorrectionShader.enabled = true
    effectComposer.addPass(gammaCorrectionShader)

    if (renderer.getPixelRatio() === 1 && !renderer.capabilities.isWebGL2) {
      smaaPass = new SMAAPass()
      effectComposer.addPass(smaaPass)
    }

    /************************************
    ********** Functionality ************
    ************************************/
    // Animate
    let animationId 
    clock = new THREE.Clock()
    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      // Update materials, etc 
      meshWall.rotation.x = Math.sin(elapsedTime * 0.6)

      // Update the controls 
      controls.update()

      // Render
      // renderer.render(scene, camera)
      effectComposer.render()

      // Call tick function again on the next frame 
      animationId = window.requestAnimationFrame(tick)
    }
    tick()

    return () => {
      window.cancelAnimationFrame(animationId)
      scene = null 
      camera = null 
      controls = null 
    }

  })

  // Update camera on resize 
  $: if (camera && aspect) {
    camera.aspect = aspect
    camera.left = -cameraZoom * aspect
    camera.right = cameraZoom * aspect
    camera.updateProjectionMatrix()
  }
  // Render on resize 
  $: if (renderer && scene && camera && width && height) {
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
    // renderer.render(scene, camera)
    effectComposer.setSize(width, height)
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    effectComposer.render()
  }
  // // Update the colour 
  // $: if (material) {
  //   material.colour = new THREE.Color(colour)
  // }
  $: if(glitchPass) {
    glitchPass.enabled = useGlitch
  }

</script>


<div class='wrapper'>
  <div id='birth-city-wrapper' bind:clientWidth="{widthContainer}">
    <button on:click={() => useGlitch = !useGlitch}>toggle glitch</button>
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
    position: relative;
    @media (max-width: 900px) {
      min-height: 70vh;
    }
  }
  #birth-city-wrapper {
    width: 100%;
    max-width: 800px;
    margin: auto;
  }
  canvas {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px rgba(119, 108, 116, 0.808);
  }
  button {
    position: absolute;
    z-index: 100;
    top: 2px;
    left: 2px;
    //transform: translate(-50%, 0);
    border: 1px dashed #d69d0d;
    //border-top: none;
    color:#d69d0d;
    font-weight: bold;
    background: none;
    padding: 1rem; 
    cursor: crosshair;
    margin: auto;
    &:hover {
      border: 1px solid #fff;
      color:#fff;
      background: #2b207a;
    }
  }
</style>