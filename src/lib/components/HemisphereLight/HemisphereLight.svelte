<script>
  import { onMount, afterUpdate } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { RectAreaLightHelper }  from 'three/examples/jsm/helpers/RectAreaLightHelper.js'
  import * as dat from 'lil-gui'
  import { createNoise2D } from 'simplex-noise';

  let canvas 
  export let noise2D = createNoise2D()

  // Sizes 
  let widthContainer
  let heightContainer
  let windowWidth
  
  $: width = widthContainer
  $: height = windowWidth > 1000 ? widthContainer * 0.8 : widthContainer * 1.3
  $: aspect = width / height

  // Instantiate 
  let scene
  let material
  let planeGeometry
  let plane
  const numMeshes = 100
  let geometry
  let meshes = []
  let ambientLight
  let directionalLight
  let pointLight
  let hemisphereLight
  let camera
  const cameraZoom = 1.7
  let controls
  let renderer
  let clock

  onMount(() => {
    // Manually set sizes on mount as the width and height vars are 
    // not available yet
    const wrapper = document.getElementById('hemi-light-wrapper')
    const { width:widthContainer } = wrapper.getBoundingClientRect()
    const width = widthContainer
    const height = windowWidth > 1000 ? widthContainer * 0.8 : widthContainer * 1.3
    const aspect = width / height

    // Add double-click event
    wrapper.addEventListener('dblclick', () => {
      if (!document.fullscreenElement) {
          canvas.requestFullscreen()
      } else {
          document.exitFullscreen()
      }
    })

    // Scene 
    scene = new THREE.Scene()

    /************************************
    ************** Objects **************
    ************************************/
    material = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#fff'),
      roughness: 0.8,
      metalness: 0
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
    scene.add(ambientLight)

    // Directional light 
    directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(1, 0.25, 0)
    scene.add(directionalLight)

    // Point light 
    pointLight = new THREE.PointLight(0xff9000, 0.8, 3)
    pointLight.position.set(1, -0.4, 1)
    scene.add(pointLight)
    const pointLightUp = new THREE.PointLight(0xff0000, 0.4, 3)
    pointLightUp.position.set(0, 1, 2)

    // Hemisphere light
    hemisphereLight = new THREE.HemisphereLight('#ff5252', '#0c0366', 0.6)
    hemisphereLight.position.set(0, -1, 0)
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
    controls.enabled = false


    /************************************
    ************* Renderer **************
    ************************************/
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor( '#fff', 1 )


    /************************************
    ********** Functionality ************
    ************************************/
    // Animate 
    clock = new THREE.Clock()
    let uTime = 0
    let id 
      
    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      // Update the material, light
      uTime = elapsedTime
      // Move the point light in a circle
      const spread = 1.2
      const speed = 1
      pointLight.position.z = Math.cos(uTime*speed)*spread
      pointLight.position.x = Math.sin(uTime*speed)*spread

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
    cursor: crosshair;
  }
  canvas {
    width: 100%;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px rgba(119, 108, 116, 0.808);
  }
</style>