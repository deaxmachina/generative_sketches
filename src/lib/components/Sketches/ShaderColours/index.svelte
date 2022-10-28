<script>
  import ShaderColours from './ShaderColours.svelte'
  const possibleCol1 = ['#ff595e', '#dd2634', '#9e164d', '#31dd87', '#13b79f']
  const possibleCol2 = ['#6a4c93', '#61189b', '#6239d3', '#334dcc', '#ccaf36']
  let col1 
  let col2 
  const setCols = () => {
    col1 = possibleCol1[Math.floor(Math.random()*possibleCol1.length)]
    col2 = possibleCol2[Math.floor(Math.random()*possibleCol2.length)]
  }
</script>


<div class='layout'>
  <div class='left'>
    <h1>Coloured .01</h1>
    <button on:click={setCols}>re-generate</button>
  </div>
  <div class='right'>
    <ShaderColours {col1} {col2} />
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
      max-width: 800px;
    }
  }

</style>