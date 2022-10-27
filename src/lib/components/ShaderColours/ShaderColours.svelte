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

  // Sizes 
  let widthContainer
  let heightContainer
  let windowWidth
  $: width = widthContainer
  $: height = windowWidth > 1000 ? widthContainer * 1 : widthContainer * 1.3
  $: aspect = width / height

  // Initialise 
  let scene = undefined 
  let geometry = undefined
  let material = undefined
  let mesh = undefined
  let camera = undefined
  let controls = undefined
  let renderer = undefined
  let clock = undefined


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

    // Scene 
    scene = new THREE.Scene()

    /************************************
    ************** Object ***************
    ************************************/
    // Geometry 
    geometry = new THREE.PlaneGeometry(4, 4, 50, 50)
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
        uAspectRatio: { value: aspect},
        uExplosion: { value: 1 } // the amount to push vertices outwards
      }
    })
    // Mesh 
    mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.y = Math.PI / 6
    mesh.rotation.x = Math.PI / 6
    scene.add(mesh)


    /************************************
    ************** Camera ***************
    ************************************/
    camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 100)
    //camera.aspect = sizes.width / sizes.height
    //camera.updateProjectionMatrix() // For resize
    camera.position.z = 2.5
    scene.add(camera)
    // Controls 
    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.enabled = false


    /************************************
    ************* Renderer **************
    ************************************/
    renderer = new THREE.WebGLRenderer({ canvas: canvas })
    renderer.setSize(width, height)
    renderer.setClearColor('#fff')
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
      material.uniforms.uTime.value = elapsedTime
      material.uniforms.uExplosion.value = Math.sin(elapsedTime - Math.PI / 4) * 0.5 + 0.5;

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
  $: if (material) {
    material.uniforms.uColour1.value = new THREE.Color(col1)
    material.uniforms.uColour2.value = new THREE.Color(col2)
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