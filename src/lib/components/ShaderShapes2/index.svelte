<script>
  import ShaderColours from './ShaderShapes.svelte'
  const possibleCol1 = [ '#9e164d', '#ffffff', '#a53860', '#565264', '#706677', '#a6808c', '#d6cfcb', '#07beb8', '#16697a', '#3d5a80']
  
  let col1 

  let hillValue
  const setCols = () => {
    col1 = possibleCol1[Math.floor(Math.random()*possibleCol1.length)]
    hillValue = Math.random()
  }
</script>


<div class='layout'>
  <div class='left'>
    <h1>Mercurial .02</h1>
    <button on:click={setCols}>re-generate</button>
  </div>
  <div class='right'>
    <ShaderColours {col1} {hillValue} />
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