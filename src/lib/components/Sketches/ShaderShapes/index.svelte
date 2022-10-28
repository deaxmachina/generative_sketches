<script>
  import ShaderColours from './ShaderShapes.svelte'
  const possibleCol1 = [ '#9e164d', '#f71735', '#ff9f1c', '#61189b', '#6239d3', '#ffffff', '#a53860']
  const possibleCol2 = ['#6a4c93', '#61189b', '#6239d3', '#334dcc', '#ccaf36']
  
  let colHills
  let colSun 
  let hillValue
  const setCols = () => {
    colHills = possibleCol1[Math.floor(Math.random()*possibleCol1.length)]
    colSun = possibleCol1[Math.floor(Math.random()*possibleCol1.length)]
    hillValue = Math.random()
  }
</script>


<div class='layout'>
  <div class='left'>
    <h1>Mercurial .01</h1>
    <button on:click={setCols}>re-generate</button>
  </div>
  <div class='right'>
    <ShaderColours {colHills} {colSun} {hillValue} />
  </div>
</div>

<style lang='scss'>
  @import '../../../styles/global.scss';
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