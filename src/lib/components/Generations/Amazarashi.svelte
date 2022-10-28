<script>
  import { onMount, afterUpdate } from 'svelte'
  import * as THREE from 'three'
  import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'
  import fragmentShader from './shaders/amazarashiFragment.glsl'
  import vertexShader from './shaders/vertex.glsl'
  import glslify from 'glslify'
  import _ from 'lodash'

  const possibleCol1 = ['#ff595e', '#dd2634', '#9e164d', '#31dd87', '#13b79f']
  const possibleCol2 = ['#6a4c93', '#61189b', '#6239d3', '#334dcc', '#ccaf36']
  let col1 = '#dd2634'
  let col2 = '#13b79f'
  const setCols = () => {
    col1 = possibleCol1[Math.floor(Math.random()*possibleCol1.length)]
    col2 = possibleCol2[Math.floor(Math.random()*possibleCol2.length)]
  }

  let canvas

  // Sizes 
  let widthContainer
  let heightContainer
  
  $: width = widthContainer
  $: height = heightContainer
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

  onMount(() => {
    // Manually set sizes on mount as the width and height vars are 
    // not available yet
    const wrapper = document.getElementById('simple-cube-wrapper')
    const { width:widthContainer, height:heightContainer } = wrapper.getBoundingClientRect()
    const width = widthContainer
    const height = heightContainer
    const aspect = width / height
      
    // Scene 
    scene = new THREE.Scene()

    // Material 
    material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
      uniforms: {
        uColour1: { value: new THREE.Color(col1) },
        uColour2: { value: new THREE.Color(col2) },
        uTime: { value: 0 },
        uAspectRatio: { value: aspect },
        uExplosion: { value: 1 } // the amount to push vertices outwards
      }
   })

    // Geometry
    //geometry = new THREE.PlaneGeometry(4, 4, 50, 50) // new THREE.BoxGeometry(2, 2, 2, 100, 100, 100)
    geometry = new THREE.SphereGeometry(1, 64, 64)

    // Mesh - either Mesh for MeshBasicMaterial or Points for PointMaterial
    mesh = new THREE.Mesh(geometry, material)
    //mesh.scale.set(0.2, 0.2, 0.2)
    mesh.position.set(0.8, 1, 0)
    scene.add(mesh)


    // Camera 
    camera = new THREE.OrthographicCamera()
    const zoom = 2
    camera.left = -zoom * aspect 
    camera.right = zoom * aspect 
    camera.top = zoom
    camera.bottom = -zoom 
    camera.near = -100
    camera.far = 100
    // Set position and look at world center 
    camera.position.set(zoom, zoom, zoom)
    camera.position.x = -1
    camera.position.y = -1

    // Controls 
    controls = new TrackballControls(camera, canvas)
    controls.enableDamping = true
    controls.enabled = false

    // Renderer 
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.render(scene, camera)

    // Animate 
    clock = new THREE.Clock()
    const tick = () => {
      const elapsedTime = clock.getElapsedTime()
      // Update the material, e.g. the uniforms 
      material.uniforms.uTime.value = elapsedTime
      // Update the controls 
      controls.update()
      // Render 
      renderer.render(scene, camera)
      // Call tick function again on the next frame 
      window.requestAnimationFrame(tick)
   }
   tick()
  })

  // Update for resize 
  // Option 1 - from reactive statements
  $: if (aspect && camera) {
    camera.aspect = aspect
    camera.updateProjectionMatrix() 
  }
  $: if (renderer && scene && camera && width && height) {
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
    renderer.render(scene, camera)
  }
  $: if (material && aspect) {
    material.uniforms.uColour1.value = new THREE.Color(col1)
    material.uniforms.uColour2.value = new THREE.Color(col2)
    material.uniforms.uAspectRatio.value = aspect
  }

</script>


<div on:click={setCols} class='wrapper' id='simple-cube-wrapper' bind:clientWidth="{widthContainer}" bind:clientHeight="{heightContainer}">
  <canvas bind:this={canvas}></canvas>
</div>

<style lang='scss'>
  // Filters: https://css-tricks.com/almanac/properties/f/filter/
  @keyframes blur-animate {
    0%   {filter: brightness(1.3) invert(0.17) saturate(2.6) sepia(0.25) blur(0px); }
    75%  {filter: brightness(1.3) invert(0.17) saturate(2.6) sepia(0.25) blur(0px); }
    100% {filter: brightness(1.3) invert(0.17) saturate(2.6) sepia(0.25) blur(1px); }
  }
  #simple-cube-wrapper {
    width: 90%;
    max-width: 800px;
    height: 800px;
    margin: auto;
    margin-top: 50px;
    cursor: crosshair;
  }
  #simple-cube-wrapper::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    filter: brightness(0.8) hue-rotate(350deg) saturate(3) blur(0px) contrast(0.6);
    //filter: brightness(1.3) invert(0.17) saturate(2.6) sepia(0.25) blur(8px); 
    background-image: url('https://mj-gallery.com/5b746a7b-e9a9-48d2-8f77-0cd27c3a9679/grid_0.png');
    background-size: cover;  
    background-repeat: no-repeat; 
    background-size: 90%;
    background-position: center;
    opacity: 1;
    // animation-name: blur-animate;
    // animation-duration: 4s;
    // animation-iteration-count: infinite;
    // animation-direction: alternate;
  }

  canvas {
    //background-color: rgba(252, 252, 252, 0.158);
    position: relative;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px rgba(216, 184, 207, 0.808);
  }
</style>