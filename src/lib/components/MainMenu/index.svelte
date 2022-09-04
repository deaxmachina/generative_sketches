<script>
  import {onMount} from 'svelte'
  import { base } from '$app/paths';
  import '$lib/styles/global.scss';
  import App from '$lib/App.svelte'

  let hoverSketches = false
  let hoverGenerations = false

  let colSketches = '#212529'//'#6a3453'
  let colGenerations = '#212529' //'#339d81'

  const generationUrls = [
    'https://mj-gallery.com/991215f3-4359-488a-8e0b-ebc4ca40d9ce/grid_0.png',
    'https://mj-gallery.com/ea93b2b4-f9a1-4aac-9f7d-12703b378a5d/grid_0.png',
    'https://mj-gallery.com/a29e1abe-df25-42de-845e-c6d0ec775128/grid_0.png',
    'https://mj-gallery.com/462c3a16-4528-4664-bf1f-996c9f13e932/grid_0.png',
    'https://mj-gallery.com/96ed8365-8e78-4f46-a830-52216bfe7253/grid_0.png',
    'https://mj-gallery.com/5b746a7b-e9a9-48d2-8f77-0cd27c3a9679/grid_0.png',
    'https://mj-gallery.com/4d2106de-0d2d-4b75-b5bf-db874881c787/grid_0.png',
    'https://mj-gallery.com/fa6c122d-e233-47eb-be6a-ab05da20becf/grid_0.png',
    'https://mj-gallery.com/ea93b2b4-f9a1-4aac-9f7d-12703b378a5d/grid_0.png',
    'https://mj-gallery.com/e0f13ff6-4ce1-46b2-8ef1-3e72bbe0eb2e/grid_0.png',
    'https://media.discordapp.net/attachments/996046569709244577/1010564728441020516/Dea_beautiful_kimono_8527bde4-a5c2-4d75-b585-0fa36bf4be54.png',
    'https://media.discordapp.net/attachments/996046569709244577/1010564443387744357/Dea_beautiful_kimono_39bf237e-5baf-4c73-a132-89a3f30a3eaf.png'
  ]
  let generationUrl = undefined

  onMount(() => {
    generationUrl = generationUrls[Math.floor(Math.random()*generationUrls.length)] 
  })
</script>


<main>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div class='menu-container'>
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <a 
      href='{base}/sketches' 
      class='menu-item sketches' 
      on:mouseover={() => { hoverSketches = true }}
      on:mouseout={() => { hoverSketches = false }}
    >
      <div class='inside sketches-inside'>
        <h1 class='sketches-title' style:background-color={hoverSketches ? colSketches : 'transparent'}>Sketches</h1>
      </div>   
    </a>
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <a 
      href='{base}/generations' 
      class='menu-item generations'
      on:mouseover={() => { hoverGenerations = true }}
      on:mouseout={() => { hoverGenerations = false }}
      style={`--url: url(${generationUrl})`}
    >
      <div class='inside generations-inside'>
        <h1 class='generations-title' style:background-color={hoverGenerations ? colGenerations : 'transparent'}>Generations</h1>
      </div>
    </a>
  </div>
</main>



<style lang='scss'>

  a {
    text-decoration: none;
  }

  .menu-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .menu-item {
    width: 100%;
    height: 100%;
    flex: 1;
    padding: 2px;
    &.sketches {
      margin-right: 0;
      text-align: right;
      &::before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: calc(50% - 2px); 
        height: 100%;
        //filter: brightness(1) hue-rotate(350deg) saturate(2) blur(0px) contrast(0.6);
        background-image: url('/images/mercurial_4.gif');
        background-repeat: no-repeat; 
        background-position: center center;
        background-size: cover; 
        opacity: 1;
        //background-size: 100%;
      }
    }
    &.generations {
      text-align: left;
      margin-left: 0;
      &::before {
        content: "";
        position: absolute;
        top: 0; 
        left: calc(50% + 2px);
        width: calc(50% - 2px); 
        height: 100%;
        filter: brightness(0.7) hue-rotate(350deg) saturate(3) blur(0px) contrast(0.6);
        background-image: var(--url);
        background-size: cover;  
        background-repeat: no-repeat; 
        background-position: center;
        opacity: 1;
      }
    }
  }

  .inside {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    cursor: crosshair;
    &.sketches-inside {
      justify-content: flex-end;
      //padding-right: 20px;
    }
    &.generations-inside {
      justify-content: flex-start;
      //padding-left: 20px;
    } 
    h1 {
      //background-color: #6a3453;
      transition: all 0.7s ease;
      padding: 5px;
      font-size: 1.8rem;
      letter-spacing: 3.3px;
      font-weight: 400;
      color: #fff;
      text-decoration: none;
      letter-spacing: 2.5px;
      writing-mode: vertical-rl;
      text-orientation: upright;
      &.generations-title {
        //background-color: #339d81;
      }
    }
  }

  @media (max-width: 900px) {
    h1 {
      padding: 1px 8px;
      font-size: 1.4rem;
      letter-spacing: 2.5px;
      writing-mode: vertical-rl;
      text-orientation: upright;
    }
  }


</style>