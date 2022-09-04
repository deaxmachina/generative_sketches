<script>
  import { onMount, afterUpdate } from 'svelte'
  import * as THREE from 'three'
  import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'

  export let colour = 'rgb(100, 70, 200)'
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
    //scene.background = new THREE.Color('black')

    // Material - try Basic or Points
    // material = new THREE.MeshBasicMaterial({
    //   color: new THREE.Color(colour),
    //   side: THREE.DoubleSide
    // })
    material = new THREE.PointsMaterial({
        color: new THREE.Color(colour),
        size: 0.01,
        sizeAttenuation: true,
        transparent: true,
        depthWrite: false,
    })

    // Geometry
    geometry = new THREE.BoxGeometry(2, 2, 2, 50, 50, 500)

    // Mesh - either Mesh for MeshBasicMaterial or Points for PointMaterial
    // mesh = new THREE.Mesh(geometry, material)
    mesh = new THREE.Points(geometry, material)
    scene.add(mesh)

    // Camera - try Perspective or Orthographic
    // camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 100)
    // camera.position.z = 2.5 
    // Orthographic camera
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
    camera.position.x = 2

    // Controls 
    controls = new TrackballControls(camera, canvas)
    controls.enableDamping = true

    // Renderer 
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor('black')
    renderer.render(scene, camera)

    // Animate 
    clock = new THREE.Clock()
    const tick = () => {
      const elapsedTime = clock.getElapsedTime()
      // Update the material, e.g. the uniforms 
      mesh.rotation.y = Math.sin(elapsedTime)
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
  $: if (material) {
    console.log('colour of material was updated')
    material.color = new THREE.Color(colour)
  }
  // // Option 2 - from afterUpdate (worse)
  // afterUpdate(() => {
  //   if (aspect && camera && controls) {
  //     camera.aspect = aspect
  //     camera.updateProjectionMatrix() 
  //   } 
  //   if (controls) {
  //     controls.update()
  //   }
  //   if (renderer && width && height) {
  //     renderer.setSize(width, height)
  //     renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
  //     renderer.render(scene, camera) // important ! 
  //   } 
  // })


</script>

<div class='wrapper' id='simple-cube-wrapper' bind:clientWidth="{widthContainer}" bind:clientHeight="{heightContainer}">
  <canvas bind:this={canvas}></canvas>
</div>

<style lang='scss'>
  #simple-cube-wrapper {
    width: 90%;
    max-width: 900px;
    height: 500px;
    margin: auto;
    margin-top: 150px;
  }
  canvas {
    width: 100%;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px rgba(119, 108, 116, 0.808);
  }
</style>