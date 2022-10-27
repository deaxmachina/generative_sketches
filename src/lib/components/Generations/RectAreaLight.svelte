<script>
  import { onMount, afterUpdate } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import * as dat from 'lil-gui'
  import { createNoise2D } from 'simplex-noise';
  import { base } from '$app/paths';
  import _ from 'lodash'

  let canvas 
  let gui

  let rectLightIntensity = 10
  let rectLightWidth = 2
  let rectLightHeight = 3
  let noise2D = createNoise2D()
  const rectLightCol = 0x4e00ff

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
  let planeGeometry = undefined
  let plane = undefined
  const numMeshes = 600
  let meshes = []
  let geometry = undefined
  let ambientLight = undefined 
  let directionalLight = undefined
  let rectAreaLight = undefined
  let camera = undefined 
  const cameraZoom = 2
  let controls = undefined
  let renderer = undefined
  let clock = undefined
  let geometryWall = undefined 
  let materialWall = undefined 
  let meshWall = undefined
  // Texture 
  const textureUrl = `${base}/images/optimised/mj2.jpg`
  let textureLoader
  let texture

  onMount(() => {
    // Manually set sizes on mount as the width and height vars are 
    // not available yet
    const wrapper = document.getElementById('rect-area-wrapper')
    const { width:widthContainer } = wrapper.getBoundingClientRect()
    const width = widthContainer
    const height = windowWidth > 1000 ? widthContainer * 0.9 : widthContainer * 1.1
    const aspect = width / height

    // Scene 
    scene = new THREE.Scene()
    //scene.background = new THREE.Color('black')

    /************************************
    ************** Objects **************
    ************************************/
    // Material 
    material = new THREE.MeshStandardMaterial({
      color: new THREE.Color('white'),
      side: THREE.DoubleSide
    })
    // Plane geometry + mesh
    planeGeometry = new THREE.PlaneGeometry(13, 13)
    plane = new THREE.Mesh(planeGeometry, material)
    plane.rotation.x = - Math.PI * 0.5 
    plane.position.y = -0.5
    scene.add(plane)

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
    meshWall.position.z = 0.1
    meshWall.position.y = 1.45
    scene.add(meshWall)


    // Boxes 
    geometry = new THREE.BoxGeometry(1, 1, 1)
    for (let i = 0; i < numMeshes; i ++) {
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(
        noise2D(i, i*2)*2, 
        Math.max(0, noise2D(i, i*3)*2), 
        Math.max(0, noise2D(i, i*5))
      )
      const scale = noise2D(i, i) * 0.1
      mesh.scale.set(scale, scale, scale)
      scene.add(mesh)
      meshes.push(mesh)
    }

    /************************************
    ************** Lights ***************
    ************************************/
    // Ambient light 
    ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)

    // Directional light 
    directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1, 0.25, 1)
    scene.add(directionalLight)

    // Rect area light 
    rectAreaLight = new THREE.RectAreaLight(rectLightCol, rectLightIntensity, rectLightWidth, rectLightHeight)
    rectAreaLight.lookAt(new THREE.Vector3(0, 0, 0))
    rectAreaLight.rotation.x = Math.PI
    scene.add(rectAreaLight)

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
    camera.position.x = 2
    camera.updateProjectionMatrix()

    // Controls 
    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.enabled = false

    /************************************
    ************* Renderer **************
    ************************************/
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor('white')
    renderer.render(scene, camera)

    /************************************
    ********** Functionality ************
    ************************************/
    // Animate 
    clock = new THREE.Clock()
    let id
  
    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      // Update the material, e.g. the uniforms 
      for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i]
        mesh.position.z = (Math.sin(elapsedTime*0.5))*noise2D(i, i)*2
      }

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
    camera.left = -cameraZoom * aspect 
    camera.right = cameraZoom * aspect 
    camera.updateProjectionMatrix() 
  }

  // Update the render based on size i.e. width and height 
  $: if (renderer && scene && camera && width && height) {
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
    renderer.render(scene, camera)
  }

  // Update the ligh intensity (passed in prop)
  $: if (rectAreaLight) {
    rectAreaLight.color = new THREE.Color(rectLightCol)
    rectAreaLight.intensity = rectLightIntensity
    rectAreaLight.width = rectLightWidth
    rectAreaLight.height = rectLightHeight
  }

  // Update the cube arrangement (passed in prop)
  $: if (meshes, geometry, material) {
    const meshesNew = []
    meshes.forEach((mesh, i) => {
      mesh.position.set(
        noise2D(i, i*2)*2, 
        Math.max(-1, noise2D(i, i*3)*2), 
        Math.max(0, noise2D(i, i*5))
      )
      const scale = noise2D(i, i) * 0.2
      mesh.scale.set(scale, scale, scale)
      meshesNew.push(mesh)
      meshes = meshesNew
    })
  }

</script>


<svelte:window bind:innerWidth={windowWidth}/>

<div 
  class='wrapper' 
  on:click={() => { 
    rectLightIntensity = _.random(1, 10) 
    rectLightWidth = _.random(1, 6) 
    rectLightHeight = _.random(1, 6) 
    noise2D = createNoise2D()
  }}
  >
  <div id='rect-area-wrapper' bind:clientWidth="{widthContainer}" bind:clientHeight="{heightContainer}">
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
    cursor: crosshair;
    @media (max-width: 900px) {
      min-height: 70vh;
    }
  }
  #rect-area-wrapper {
    width: 100%;
    max-width: 800px;
    margin: auto;
  }
  canvas {
    width: 100%;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px rgba(119, 108, 116, 0.808);
  }
</style>