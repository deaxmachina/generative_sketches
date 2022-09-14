<script>
  import { onMount, afterUpdate } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'
  import fragmentShaderPlane from './shaders/fragmentPlane.glsl'
  import vertexShaderPlane from './shaders/vertexPlane.glsl'
  import fragmentShaderSun from './shaders/fragmentSun.glsl'
  import vertexShaderSun from './shaders/vertexSun.glsl'
  import glslify from 'glslify'


  let canvas 
  // Options 
  const colBg = '#011627'
  export let colHills = '#fff'
  export let colSun = '#9e164d'//'#ff9f1c'
  export let hillValue = 0.5

  // Sizes 
  let widthContainer
  let heightContainer
  let windowWidth
  $: width = widthContainer
  $: height = windowWidth > 1000 ? widthContainer * 0.85 : widthContainer * 1.3
  $: aspect = width / height

  // Initialise 
  let scene = undefined 

  let geometryPlane = undefined
  let materialPlane = undefined
  let meshPlane = undefined
  let geometrySun = undefined 
  let materialSun = undefined
  let meshSun = undefined

  let camera = undefined
  let controls = undefined
  let renderer = undefined
  let clock = undefined
  let texture = {}


  onMount(() => {
    // Manually set sizes on mount as the width and height vars are 
    // not available yet
    const wrapper = document.getElementById('shader-colours-wrapper')
    const { width:widthContainer } = wrapper.getBoundingClientRect()
    const width = widthContainer
    const height = windowWidth > 1000 ? widthContainer * 1 : widthContainer * 1.3
    const aspect = width / height

    // Add double-click event
    wrapper.addEventListener('dblclick', () => {
        if (!document.fullscreenElement) {
            canvas.requestFullscreen()
        } else {
            document.exitFullscreen()
        }
    })

    /************************************
    ************** Texture **************
    ************************************/
    texture.linesCount = 10
    texture.width = 32
    texture.height = 128
    texture.canvas = document.createElement('canvas')
    texture.canvas.width = texture.width
    texture.canvas.height = texture.height
    texture.canvas.style.position = 'fixed'
    texture.canvas.style.top = 0
    texture.canvas.style.left = 0
    texture.canvas.style.zIndex = 1

    texture.context = texture.canvas.getContext('2d')
    texture.instance = new THREE.CanvasTexture(texture.canvas)
    texture.instance.wrapS = THREE.RepeatWrapping
    texture.instance.wrapT = THREE.RepeatWrapping

    texture.context.clearRect(0, 0, texture.width, texture.height)  
    texture.context.globalAlpha = 1;
    texture.context.fillStyle = colHills
    texture.context.fillRect(
      0, 
      0, 
      texture.width, 
      Math.round(texture.height * 0.08)
    )
    const smallLinesCount = texture.linesCount - 1
    for (let i = 0; i < smallLinesCount; i++) {
      texture.context.globalAlpha = 0.5;
      texture.context.fillRect(
        0, 
        Math.round(texture.height / (smallLinesCount + 1)) * (i + 1), 
        texture.width, 
        Math.round(texture.height * 0.01)
      )  
    }


    // Scene 
    scene = new THREE.Scene()

    /************************************
    *********** Plane Object ************
    ************************************/
    // Geometry 
    geometryPlane = new THREE.PlaneGeometry(3, 3, 1000, 1000)
    geometryPlane.rotateX(-Math.PI * 0.5)

    // Material 
    materialPlane = new THREE.ShaderMaterial({
      vertexShader: vertexShaderPlane,
      fragmentShader: fragmentShaderPlane,
      side: THREE.DoubleSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: texture.instance },
        uElevation: { value: 1 },
        uHeightHill: { value: 0.4 } 
      }
    })

    // Mesh 
    meshPlane = new THREE.Mesh(geometryPlane, materialPlane)
    meshPlane.scale.set(10, 10, 10)
    meshPlane.rotation.z = Math.PI;
    meshPlane.rotation.x = Math.PI * 0.05;
    meshPlane.position.y -= 2;
    scene.add(meshPlane)


    /************************************
    ************ Sun Object *************
    ************************************/
    // Ambient light 
    const ambientLight = new THREE.AmbientLight(0x000000, 0.1)
    scene.add(ambientLight)
    // Directional light 
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.6)
    directionalLight1.position.set(1, 0.25, 0)
    scene.add(directionalLight1)
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.1)
    directionalLight2.position.set(-1, -0.6, 0)
    scene.add(directionalLight2)

    // Geometry 
    geometrySun = new THREE.OctahedronGeometry(0.5, 0)
    // Material 
    materialSun = new THREE.MeshToonMaterial({
      color: new THREE.Color(colSun),
      //side: THREE.DoubleSide
    })
    // materialSun = new THREE.ShaderMaterial({
    //   vertexShader: vertexShaderSun,
    //   fragmentShader: fragmentShaderSun,
    //   side: THREE.DoubleSide,
    //   transparent: true,
    //   blending: THREE.AdditiveBlending,
    //   uniforms: {
    //     uColour1: { value: new THREE.Color(col1) },
    //     uColour2: { value: new THREE.Color(col2) },
    //     uTime: { value: 0 }
    //   }
    // })
    // Mesh 
    meshSun = new THREE.Mesh(geometrySun, materialSun)
    meshSun.position.y += 0.9
    meshSun.rotation.x = Math.PI * 0.6
    scene.add(meshSun)


    /************************************
    ************** Camera ***************
    ************************************/
    camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 100)
    camera.position.z = 2.5
    scene.add(camera)

    // Controls 
    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true


    /************************************
    ************* Renderer **************
    ************************************/
    renderer = new THREE.WebGLRenderer({ canvas: canvas })
    renderer.setSize(width, height)
    renderer.setClearColor(colBg)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


    /************************************
    ********** Functionality ************
    ************************************/
    // Animate 
    let id
    clock = new THREE.Clock()
    
    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      // Update the material, e.g. the uniforms 
      materialPlane.uniforms.uTime.value = elapsedTime
      materialPlane.uniforms.uElevation.value = 1 - Math.sin(elapsedTime)*0.3
      //material.uniforms.uHeightHill.value = Math.sin(elapsedTime)
      meshSun.rotation.z = elapsedTime * 0.2

      // Update the controls 
      controls.update()

      // Render 
      renderer.render(scene, camera)

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
    camera.updateProjectionMatrix() 
  }

  // Update the render based on size i.e. width and height 
  $: if (renderer && scene && camera && width && height) {
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
    renderer.render(scene, camera)
  }

  // Update the colours 
  $: if (materialPlane && texture) {
    materialPlane.uniforms.uHeightHill.value = hillValue
  }

  $: if (materialSun) {
    materialSun.color.set(new THREE.Color(colSun))
  }



</script>

<svelte:window bind:innerWidth={windowWidth}/>

<div class='wrapper' id='shader-colours-wrapper' bind:clientWidth="{widthContainer}" bind:clientHeight="{heightContainer}">
  <canvas bind:this={canvas}></canvas>
</div>


<style lang='scss'>
  #shader-colours-wrapper {
    width: 100%;
    height: 100%;
    margin: auto;
  }
  canvas {
    width: 100%;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px rgba(119, 108, 116, 0.808);
  }
</style>