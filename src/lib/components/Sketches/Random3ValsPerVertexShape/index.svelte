<script>
  import { onMount, afterUpdate } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import fragmentShader from './shaders/fragment.glsl'
  import vertexShader from './shaders/vertex.glsl'

  let windowWidth
  let windowHeight
  let canvas 

  afterUpdate(() => {
    // Scene 
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#5a189a')

    // Dimensions 
    let width = Math.min(windowWidth, 750)
    let height = windowWidth / windowHeight > 1.4 ? 1.15 * width : 1.2 * width // Condition to nicely fit on different screens
  
    const sizes = {
      width, 
      height
    }

    /************************************
    ************** Object ***************
    ************************************/
   // Geometry 
   const geometry = new THREE.IcosahedronGeometry(1, 3)
   //const geometry = new THREE.DodecahedronGeometry( 1, 32 )

   // Add random 3-dim value for each vertex to be sent to shader
   const numVertices = geometry.attributes.position.count 
   const randomDirections = [];
   const randomStrengths = [];

   for (let i = 0; i < numVertices; i++) {
    const dir = new THREE.Vector3(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      Math.random() * 2 - 1
    )
      .normalize()
      .toArray();
    // Triplicate it and turn into a flat list of x, y, z, x, y, z...
    const directions = [dir, dir, dir].flat();
    // Concat into array
    randomDirections.push(...directions);

    // Do the same but with the 1 random strength float
    const str = Math.random();
    randomStrengths.push(str, str, str);
   }

   // Define the attributes
   const randomDirectionAttribute = new THREE.BufferAttribute(
    new Float32Array(randomDirections),
    3
   )
   geometry.setAttribute('aRandomDirection', randomDirectionAttribute)

   const randomStrengthAttrbitue = new THREE.BufferAttribute(
    new Float32Array(randomStrengths),
    1
   )
   geometry.setAttribute('aRandomStrength',randomStrengthAttrbitue )


   // Material 
   const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: THREE.DoubleSide,
    transparent: true,
    uniforms: {
      uColour: { value: new THREE.Color('#f72585') },
      uTime: { value: 0 },
      uExplosion: { value: 1 } // the amount to push vertices outwards
    }
   })
   // Mesh 
   const mesh = new THREE.Mesh(geometry, material)
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