<script>
    import SideMenu from '$lib/components/SideMenu/index.svelte'
    import globalCss from '$lib/styles/global.scss'
    import sketchesData from './sketchesData.js'
</script>


<div class='wrapper'>
    <div class='side-menu-wrapper'><SideMenu {sketchesData} sketchType={'sketches'} /></div>
    <div class='main-content-wrapper'><slot></slot></div>
</div>



<style lang='scss'>
    div.wrapper {
        display: flex;
        margin: 0 auto;
    }
    .side-menu-wrapper {
        flex: 0 1 160px;
    }
    .main-content-wrapper {
        flex: 0 1 1500px;
        margin: 0 auto;
        text-align: center;
        //border: 2px solid green;
    }

  @media (max-width: 1000px) {
    div.wrapper {
        flex-direction: column;
    }
    .side-menu-wrapper {
        flex: 1;
    }
    .main-content-wrapper {
      flex: 0 1;
      width: 100%;
    }
  }
</style>