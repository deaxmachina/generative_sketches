<script>
  import RectAreaLight from './RectAreaLight.svelte'
</script>

<div class='right'>
    <!-- <div class='dummy-content'></div> -->
    <RectAreaLight />
</div>



<style lang='scss'>
  @import url('https://fonts.googleapis.com/css2?family=Monoton&family=Oxanium:wght@200;300;400;500&family=Rubik+Maze&family=Seaweed+Script&family=VT323&display=swap');
  $accent-col: #000000;

    .right {
      margin: 3rem auto;
      border: 1px solid green;
      width: 90%;
      max-width: 700px;
      z-index: 2;
      .dummy-content {
        width: 100%;
        height: 500px;
      }
    }

</style>