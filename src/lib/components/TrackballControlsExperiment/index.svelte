<script>
  import TrackballControlsExample from './TrackballControlsExample.svelte'
  import _ from 'lodash'

  let colour = '#ffff'//'rgb(100, 70, 200)'
  let backgroundColour = '#5ca4a9'
  let geometryType = 'BoxGeometry'
  const geometryTypes = ['IcosahedronGeometry', 'ConeGeometry', 'BoxGeometry']
  const backgroundColours = ['#ff006e', 'rgb(100, 70, 200)', '#b5838d', '#6d6875', '#5ca4a9']
</script>


<div class='layout'>
  <div class='left'>
    <h1>Perspective .01</h1>
    <button on:click={() => { 
      //colour = `rgb(${_.random(0, 256)}, ${_.random(0, 256)}, ${_.random(0, 256)})`
      geometryType = geometryTypes[Math.floor(Math.random() * geometryTypes.length)]
      backgroundColour = backgroundColours[Math.floor(Math.random() * backgroundColours.length)]
    }}>
      re-generate
    </button>
  </div>
  <div class='right' style:max-width="950px">
    <TrackballControlsExample {colour} {geometryType} {backgroundColour} />
  </div>
</div>


<style lang='scss'>
  @import '../../styles/global.scss';
  $accent-col: #000000;

  .layout {
    @include flexbox-layout-sketch;
    min-height: 100vh;
    
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