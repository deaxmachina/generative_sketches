<script>
  import _ from 'lodash'
  import RectAreaLight from './RectAreaLight.svelte'
  import { createNoise2D } from 'simplex-noise';

  let rectLightIntensity = 10
  let rectLightWidth = 2
  let rectLightHeight = 3
  let noise2D = createNoise2D()
</script>


<div class='layout'>
  <div class='left'>
    <h1>Light .01</h1>
    <button on:click={() => { 
      rectLightIntensity = _.random(1, 10) 
      rectLightWidth = _.random(1, 6) 
      rectLightHeight = _.random(1, 6) 
      noise2D = createNoise2D()
      }}>re-generate</button>
  </div>
  <div class='right'>
    <!-- <div class='dummy-content'></div> -->
    <RectAreaLight {rectLightIntensity} {rectLightWidth} {rectLightHeight} {noise2D}/>
  </div>
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
      max-width: 800px;
    }
  }

</style>