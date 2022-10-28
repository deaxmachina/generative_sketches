<script>
  let wrapper
  let windowWidth
  let windowHeight
  let w
  $: h = windowWidth / windowHeight > 1 ? 1.2 * w : 1.5 * w // Condition to nicely fit on different screens
</script>

<section class='wrapper' bind:this={wrapper} bind:clientWidth={w} style='height: {h}px'>
  <slot w={w} h={h}></slot>
</section>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}></svelte:window>


<style lang='scss'>
  .wrapper {
    width: 95%;
    max-width: 700px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 10px rgba(119, 108, 116, 0.808);
  }
</style>