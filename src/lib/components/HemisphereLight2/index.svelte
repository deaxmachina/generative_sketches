<script>
  import { createNoise2D } from 'simplex-noise';
  import HemisphereLight from './HemisphereLight.svelte'

  let noise2DHemisphereLight = createNoise2D()
</script>


<div class='layout'>
  <!-- <div class='bg'></div> -->
  <div class='left'>
    <h1>Structured .02</h1>
    <button on:click={() => {noise2DHemisphereLight = createNoise2D()}}>re-generate</button>
  </div>
  <div class='right'><HemisphereLight noise2D={noise2DHemisphereLight} /></div>
</div>

<style lang='scss'>
  @import '../../styles/global.scss';
  $accent-col: #000000;

  .layout {
    @include flexbox-layout-sketch;
    
    .left {
      @include flexbox-layout-textbox;
      h1 {
        @include sketch-title;
      }
      button {
        @include regenerate-btn;
      }
    }

    .right {
      @include sketch-container;
      max-width: 900px;
    }
  }

</style>


