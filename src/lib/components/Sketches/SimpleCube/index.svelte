<script>
  import SimpleCube from './SimpleCube.svelte'
  import _ from 'lodash'

  let colour = `rgb(${_.random(0, 256)}, ${_.random(0, 256)}, ${_.random(0, 256)})`
</script>

<button on:click={() => { 
    colour = `rgb(${_.random(0, 256)}, ${_.random(0, 256)}, ${_.random(0, 256)})`
 }}>re-generate</button>
<SimpleCube {colour} />