<script>
  import { onMount, afterUpdate } from 'svelte'
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import * as dat from 'lil-gui'  
  import testFragmentShader from './shaders/test/fragment.glsl'
  import testVertexShader from './shaders/test/vertex.glsl'
  
  let windowWidth
  let windowHeight
  let canvas
  

  onMount(() => {
    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color( '#5a189a' )
    
    // Dimensions 
    let width = Math.min(windowWidth, 750)
    let height = windowWidth / windowHeight > 1.4 ? 1.15 * width : 1.2 * width // Condition to nicely fit on different screens

    /************************************
    ************** Sizes ****************
    ************************************/
    const sizes = {
        width,
        height
    }

    /************************************
    ************** Object ***************
    ************************************/

    // Geometry
    //const geometry = new THREE.CircleGeometry( 1, 128 )
    const geometry = new THREE.IcosahedronGeometry( 1, 3 )
    //const geometry = new THREE.DodecahedronGeometry( 1, 32 )
    //const geometry = new THREE.RingGeometry( 0.1, 1, 120 )
    //const geometry = new THREE.SphereGeometry( 1, 64, 16 );
    //const geometry = new THREE.TorusGeometry( 0.5, 1, 16, 100 );
    //const geometry = new THREE.TorusKnotGeometry( 0.7, 0.2, 100, 16 );

    // Add attributes that go into the vertex shader 
    const numVertices = geometry.attributes.position.count 
    const randoms = new Float32Array(numVertices)
    for (let i = 0; i < numVertices; i++) {
      randoms[i] = Math.random()
    }
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))
 
    // Material
    const material = new THREE.ShaderMaterial({
        vertexShader: testVertexShader,
        fragmentShader: testFragmentShader,
        side: THREE.DoubleSide,
        transparent: true,
        uniforms: {
            uColour: { value: new THREE.Color('#f72585') },
            uTime: { value: 0 }
        }
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)


    /************************************
    ************** Camera ***************
    ************************************/
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 2.5
    scene.add(camera)


    /************************************
    ************* Controls **************
    ************************************/
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true


    /************************************
    ************* Renderer **************
    ************************************/
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


    /************************************
    ********** Functionality ************
    ************************************/
    // // Resize event 
    // window.addEventListener('resize', () =>
    // {
    //     // Update sizes
    //     let { width } = wrapper.getBoundingClientRect()
    //     let height = window.innerWidth / window.innerHeight > 1 ? 1.2 * width : 1.5 * width

    //     sizes.width = width
    //     sizes.height = height

    //     // Update camera
    //     camera.aspect = sizes.width / sizes.height
    //     camera.updateProjectionMatrix()

    //     // Update renderer
    //     renderer.setSize(sizes.width, sizes.height)
    //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    // })

    // Animate
    const clock = new THREE.Clock()

    const tick = () => {
        const elapsedTime = clock.getElapsedTime()

        // Update material - the uniforms can be updated from here
        material.uniforms.uTime.value = elapsedTime

        // Update controls
        controls.update()

        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
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
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  canvas {
    box-sizing: border-box;
    box-shadow: 2px 2px 10px rgba(119, 108, 116, 0.808);
  }
</style>