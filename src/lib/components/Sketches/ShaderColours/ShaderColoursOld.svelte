<script>
    import { onMount, afterUpdate } from 'svelte'
    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
    import fragmentShader from './shaders/fragment.glsl'
    import vertexShader from './shaders/vertex.glsl'
    import glslify from 'glslify'
  
  
    let canvas 
    // Options 
    export let col1 = '#ff595e'
    export let col2 = '#6a4c93'
  
    // Need the afterUpdate just for the external options
    afterUpdate(() => {
      // Scene 
      const scene = new THREE.Scene()
      scene.background = new THREE.Color('#ffffff')
  
      /************************************
      ************** Sizes ****************
      ************************************/
      const wrapper = document.getElementById('wrapper')
      const { width:wrapperWidth, height:wrapperHeight } = wrapper.getBoundingClientRect()
      const sizes = {
          width: wrapperWidth,
          height: wrapperHeight
      }
      // resize event 
      window.addEventListener('resize', () => {
          const wrapper = document.getElementById('wrapper')
          const { width:wrapperWidth, height:wrapperHeight } = wrapper.getBoundingClientRect()
          // Update sizes 
          sizes.width = wrapperWidth
          sizes.height = wrapperHeight
          // Update camera 
          camera.aspect = sizes.width / sizes.height
          camera.updateProjectionMatrix()
          // Update renderer 
          renderer.setSize(sizes.width, sizes.height)
          renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
      })
      // Full screen on double click and exit full screen on double click again
      wrapper.addEventListener('dblclick', () => {
          if (!document.fullscreenElement) {
              canvas.requestFullscreen()
          } else {
              document.exitFullscreen()
          }
      })
  
      /************************************
      ************** Object ***************
      ************************************/
     // Geometry 
     const geometry = new THREE.PlaneGeometry(4, 4, 50, 50)
     // Material 
     const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
      uniforms: {
        uColour1: { value: new THREE.Color(col1) },
        uColour2: { value: new THREE.Color(col2) },
        uTime: { value: 0 },
        uAspectRatio: { value: sizes.width / sizes.height },
        uExplosion: { value: 1 } // the amount to push vertices outwards
      }
     })
     // Mesh 
     const mesh = new THREE.Mesh(geometry, material)
     mesh.rotation.y = Math.PI / 6
     mesh.rotation.x = Math.PI / 6
     scene.add(mesh)
  
  
      /************************************
      ************** Camera ***************
      ************************************/
      const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix() // For resize
      camera.position.z = 2.5
      scene.add(camera)
      // Controls 
      const controls = new OrbitControls(camera, canvas)
      controls.enableDamping = true
  
      /************************************
      ************* Renderer **************
      ************************************/
      const renderer = new THREE.WebGLRenderer({ canvas: canvas })
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  
      /************************************
      ********** Functionality ************
      ************************************/
     // Animate 
     const clock = new THREE.Clock()
    
     const tick = () => {
      const elapsedTime = clock.getElapsedTime()
  
      // Update the material, e.g. the uniforms 
      material.uniforms.uTime.value = elapsedTime
      material.uniforms.uExplosion.value = Math.sin(elapsedTime - Math.PI / 4) * 0.5 + 0.5;
  
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
  
  <div class='wrapper' id='wrapper'>
    <canvas bind:this={canvas}></canvas>
  </div>
  
  
  <style lang='scss'>
    .wrapper {
      width: 800px;
      height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      text-align: center;
      @media (max-width: 1200px) {
        width: 680px;
      }
      @media (max-width: 900px) {
        width: 96vw;
      }
    }
    canvas {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      box-shadow: 2px 2px 10px rgba(119, 108, 116, 0.808);
    }
  </style>