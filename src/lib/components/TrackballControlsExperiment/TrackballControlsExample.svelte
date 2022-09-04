<script>
  import { onMount, afterUpdate } from 'svelte'
  import * as THREE from 'three'
  import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'

  export let backgroundColour
  export let colour = '#ffff'
  export let geometryType
  let canvas

  // Sizes 
  let widthContainer
  let heightContainer
  let windowWidth
  
  $: width = widthContainer
  $: height = windowWidth > 1000 ? widthContainer * 0.8 : widthContainer * 1
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
  let hemisphereLight = undefined
  let pointLight = undefined
  let geometryTypes = {}
  const cameraZoom = 2

  onMount(() => {
    geometryTypes = {
      'IcosahedronGeometry': new THREE.IcosahedronGeometry(0.2, 10),
      'ConeGeometry': new THREE.ConeGeometry( 0.2, 0.8, 40, 30 ),
      'BoxGeometry': new THREE.BoxGeometry( 0.5, 0.5, 0.5, 30, 30, 30 ),
      'CircleGeometry': new THREE.CircleGeometry( 0.2, 32 ),
      //'TorusGeometry': new THREE.TorusGeometry( 1, 0.3, 16, 50 )
    }
    // Manually set sizes on mount as the width and height vars are 
    // not available yet
    const wrapper = document.getElementById('simple-cube-wrapper')
    const { width:widthContainer } = wrapper.getBoundingClientRect()
    const width = widthContainer
    const height = windowWidth > 1000 ? widthContainer * 0.8 : widthContainer * 1
    const aspect = width / height
      
    // Scene 
    scene = new THREE.Scene()
    //scene.background = new THREE.Color('black')

    // Material - try Basic or Points
    // material = new THREE.MeshStandardMaterial({
    //   color: new THREE.Color(colour),
    //   side: THREE.DoubleSide
    // })
    material = new THREE.PointsMaterial({
        color: new THREE.Color(colour),
        size: 0.02,
        sizeAttenuation: true,
        transparent: true,
        depthWrite: false,
    })

    // Geometry
    //geometry = new THREE.BoxGeometry(2, 2, 2, 50, 50, 500)
    geometry = geometryTypes[geometryType] //THREE.ConeGeometry( 0.5, 2, 4 )

    // Mesh - either Mesh for MeshBasicMaterial or Points for PointMaterial
    // Or many meshes 
    const numMeshes = 1000 
    for (let i = 0; i < numMeshes; i++) {
      const mesh = new THREE.Points(geometry, material) // THREE.Mesh(geometry, material) 
      const scale = Math.random()
      mesh.scale.set(scale, scale, scale)
      mesh.position.set(
        Math.random() * 7, 
        Math.random() * 7, 
        Math.random() * 10
        )
      meshes.push(mesh)
      scene.add(mesh)
    }

    // Camera - try Perspective or Orthographic
    // camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 100)
    // camera.position.z = 2.5 
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
    camera.position.x = 2

    // Controls 
    controls = new TrackballControls(camera, canvas)
    controls.enableDamping = true

    // Light 
    // Ambient light 
    ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)
    // Directional light 
    directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(0, 0, 1)
    scene.add(directionalLight)
    // Hemisphere light
    hemisphereLight = new THREE.HemisphereLight('#ff5252', '#0c0366', 0.6)
    hemisphereLight.position.set(0, -1, 0)
    scene.add(hemisphereLight)

    // Renderer 
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(backgroundColour)
    renderer.render(scene, camera)

    // Animate 
    clock = new THREE.Clock()
    let id
    const tick = () => {
      const elapsedTime = clock.getElapsedTime()
      // Update the material, e.g. the uniforms 
      meshes.forEach((mesh, i) => mesh.rotation.y = i%2 === 0 ? Math.sin(elapsedTime) : -Math.sin(elapsedTime))
      
      // Update the controls 
      controls.update()
      // Render 
      renderer.render(scene, camera)
      // Call tick function again on the next frame 
      id = window.requestAnimationFrame(tick)
   }
   tick()
   return () => {
    console.log('The experiment was destroyed')
    window.cancelAnimationFrame(id);// Stop the animation
    //this.renderer.domElement.addEventListener('dblclick', null, false); //remove listener to render
    scene = null;
    //this.projector = null;
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
    renderer.render(scene, camera)
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
    renderer.setClearColor(backgroundColour)
    renderer.render(scene, camera)
  }
  // // Option 2 - from afterUpdate (worse)

</script>

<svelte:window bind:innerWidth={windowWidth}/>

<div class='wrapper' id='simple-cube-wrapper' bind:clientWidth="{widthContainer}" bind:clientHeight="{heightContainer}">
  <canvas bind:this={canvas}></canvas>
</div>

<style lang='scss'>
  #simple-cube-wrapper {
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