<script>
    import { onMount, afterUpdate } from 'svelte'
    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
    import { RectAreaLightHelper }  from 'three/examples/jsm/helpers/RectAreaLightHelper.js'
    import * as dat from 'lil-gui'
    import { createNoise2D } from 'simplex-noise';
  
    let windowWidth
    let windowHeight
    let canvas 
    let gui
  
    export let noise2D = createNoise2D()
  
    onMount(() => {
      //gui = new dat.GUI() 
    })
  
    afterUpdate(() => {
      // Scene 
      const scene = new THREE.Scene()
  
      // Dimensions -- this is why we're using afterUpdate 
      let width = Math.min(windowWidth, 850)
      let height = windowWidth / windowHeight > 1.4  ? width : windowHeight * 0.7
      // let width = windowWidth
      // let height = windowHeight
  
      /************************************
      ************** Objects **************
      ************************************/
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color('white'),
        roughness: 0.8,
        metalness: 0
      })
  
      // A few specific objects 
      // const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
      // const box = new THREE.Mesh(boxGeometry, material)
      // scene.add(box)
  
      // const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32)
      // const sphere = new THREE.Mesh(sphereGeometry, material)
      // sphere.position.x = -1.5
      // scene.add(sphere)
  
      // const torusGeometry = new THREE.TorusGeometry(0.4, 0.3, 32, 64)
      // const torus = new THREE.Mesh(torusGeometry, material)
      // torus.position.x = 1.5
      // scene.add(torus)
  
      const planeGeometry = new THREE.PlaneGeometry(13, 13)
      const plane = new THREE.Mesh(planeGeometry, material)
      plane.rotation.x = - Math.PI * 0.5 
      plane.position.y = -1.2
      scene.add(plane)
  
      // A collection of objects 
      //const noise2D = createNoise2D()
      const numMeshes = 100
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      for (let i = 0; i < numMeshes; i ++) {
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(
          noise2D(i, i*2), noise2D(i, i*3), noise2D(i, i*5)
        )
        mesh.scale.set(noise2D(i, i*Math.random()), noise2D(i, i*Math.random()), noise2D(i, i*Math.random()))
        scene.add(mesh)
      }
  
      // const geometry = new THREE.PlaneGeometry(1, 1)
      // for (let i = 0; i < numMeshes; i ++) {
      //   const mesh = new THREE.Mesh(geometry, material)
      //   mesh.position.set(
      //     noise2D(i, i*2), noise2D(i, i*3), noise2D(i, i*5)
      //   )
      //   mesh.scale.set(
      //     Math.max(0.3, noise2D(i, i*Math.random())), 
      //     Math.max(0.3, noise2D(i, i*Math.random())), 
      //     Math.max(0.3, noise2D(i, i*Math.random()))
      //     )
      //   mesh.rotation.y = Math.random()
      //   scene.add(mesh)
      // }
  
      /************************************
      ************** Lights ***************
      ************************************/
      // Ambient light 
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
      scene.add(ambientLight)
      //gui.add(ambientLight, 'intensity').min(0).max(1).name('amb light intensity')
  
      // Directional light 
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      directionalLight.position.set(1, 0.25, 0)
      scene.add(directionalLight)
      //gui.add(directionalLight, 'intensity').min(0).max(1).name('dir light intensity')
  
      // Point light 
      const pointLight = new THREE.PointLight(0xff9000, 0.8, 3)
      pointLight.position.set(1, -0.4, 1)
      scene.add(pointLight)
      const pointLightUp = new THREE.PointLight(0xff0000, 0.4, 3)
      pointLightUp.position.set(0, 1, 2)
      //scene.add(pointLightUp)
  
      // Hemisphere light
      const hemisphereLight = new THREE.HemisphereLight('#ff5252', '#0c0366', 0.6)
      hemisphereLight.position.set(0, -1, 0)
      scene.add(hemisphereLight)
      //gui.add(hemisphereLight, 'intensity').min(0).max(1).name('hemi light intensity')
  
  
      /************************************
      ************** Camera ***************
      ************************************/
      // Perspective camera 
      // const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100)
      // camera.aspect = width / height
      // camera.updateProjectionMatrix() // For resize
      // camera.position.z = 3
  
      // Orthographic camera
      const camera = new THREE.OrthographicCamera()
      const aspect = width / height 
      const zoom = 1.7
      camera.left = -zoom * aspect 
      camera.right = zoom * aspect 
      camera.top = zoom
      camera.bottom = -zoom 
      camera.near = -100
      camera.far = 100
      // Set position and look at world center 
      camera.position.set(zoom, zoom, zoom)
      camera.lookAt(new THREE.Vector3())
      // Update the camera 
      camera.updateProjectionMatrix()
  
      // Controls 
      const controls = new OrbitControls(camera, canvas)
      controls.enableDamping = true
  
  
      /************************************
      ************* Renderer **************
      ************************************/
      const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor( '#fff', 1 )
      
  
      /************************************
      ********** Functionality ************
      ************************************/
      // Animate 
      const clock = new THREE.Clock()
      let uTime = 0
        
      const tick = () => {
        const elapsedTime = clock.getElapsedTime()
  
        // Update the material, light
        uTime = elapsedTime
        // Move the point light in a circle
        const spread = 1.2
        const speed = 1
        pointLight.position.z = Math.cos(uTime*speed)*spread
        pointLight.position.x = Math.sin(uTime*speed)*spread
        // Rotate the scene 
        //scene.rotation.y = uTime * 0.3
  
        // Update the controls 
        controls.update()
  
        // Render 
        renderer.render(scene, camera)
  
        // Call tick function again on the next frame 
        window.requestAnimationFrame(tick)
        }
      tick()
  
    })
  
  
  </script>
  
  
  
  <div class='wrapper'>
    <canvas bind:this={canvas}></canvas>
  </div>
  
  
  <svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}></svelte:window>
  
  <style lang='scss'>
    .wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      box-sizing: border-box;
      box-shadow: 2px 2px 10px rgba(119, 108, 116, 0.808);
    }
  </style>