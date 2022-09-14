<script>
    import { base } from '$app/paths';
    import { selectedWork } from '../../stores'

    const greyscaleHoverVal = 0.6
    export let sketchesData
    export let sketchType
</script>

<section class='menu-container'>
    <div class='menu-main-container'>
            {#each sketchesData as image}
                <a href='{base}/{sketchType}/{image.key}' class='image-container' on:click={() => { selectedWork.set(image.key) }}>
                    <img 
                        src={image.url} 
                        alt='stuff'
                        style:filter={image.key !== $selectedWork ? 'grayscale(1)' : 'grayscale(0)'}
                        on:mouseover={(e) =>  image.key === $selectedWork ? e.target.style.filter = 'grayscale(0)' : e.target.style.filter = `grayscale(${greyscaleHoverVal})`}
                        on:focus={(e) =>  image.key === $selectedWork ? e.target.style.filter = 'grayscale(0)' : e.target.style.filter = `grayscale(${greyscaleHoverVal})`}
                        on:mouseout={(e) => image.key !== $selectedWork ? e.target.style.filter = 'grayscale(1)' : e.target.style.filter = 'grayscale(0)'}
                        on:blur={(e) => image.key !== $selectedWork ? 'grayscale(1)' : 'grayscale(0)'}
                    >
                </a>
            {/each}
    </div>
</section>


<style lang='scss'>
  .menu-container {
    height: 100vh;
    overflow-y: scroll;
    padding: 0;
    margin: 0;
  }
  .menu-main-container {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
  .image-container {
    width: 150px;
    height: 150px;
    margin-bottom: 5px;
    cursor: crosshair;
    img {
      width: 150px;
      height: 150px;
      transition: all 0.3s ease;
        &:hover {
          transform: scale(0.98);
        }
      }
    }
  @media (max-width: 1000px) {
    .menu-container {
      height: 100%;
      overflow-x: scroll;
    }
    .menu-main-container {
      display: flex;
      flex-direction: row;
    }
  }
</style>