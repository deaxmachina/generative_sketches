<script>
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import "$lib/styles/global.scss";
  import App from "$lib/App.svelte";

  let hoverSketches = false;
  let hoverGenerations = false;

  let colSketches = "#000"; //'#6a3453'
  let colGenerations = "#000"; //'#339d81'

  const generationUrls = [
    `${base}/images/generations/2.jpg`,
    `${base}/images/generations/4.jpg`,
    `${base}/images/generations/5.jpg`,
    `${base}/images/generations/6.jpg`,
    `${base}/images/generations/7.jpg`,
    `${base}/images/generations/8.jpg`,
    `${base}/images/generations/9.jpg`,
    `${base}/images/generations/10.jpg`,
    `${base}/images/generations/11.jpg`,
    `${base}/images/generations/12.jpg`,
    `${base}/images/generations/13.jpg`,
    `${base}/images/generations/14.jpg`,
    `${base}/images/generations/15.jpg`,
    `${base}/images/generations/16.jpg`,
  ];
  let generationUrl = undefined;

  onMount(() => {
    generationUrl =
      generationUrls[Math.floor(Math.random() * generationUrls.length)];
  });
</script>

<main>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div class="menu-container">
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <a
      href="{base}/sketches"
      class="menu-item sketches"
      on:mouseover={() => {
        hoverSketches = true;
      }}
      on:mouseout={() => {
        hoverSketches = false;
      }}
    >
      <div class="inside sketches-inside">
        <h1
          class="sketches-title"
          style:background-color={hoverSketches ? colSketches : "transparent"}
        >
          Sketches
        </h1>
      </div>
    </a>
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <a
      href="{base}/generations"
      class="menu-item generations"
      on:mouseover={() => {
        hoverGenerations = true;
      }}
      on:mouseout={() => {
        hoverGenerations = false;
      }}
      style={`--url: url(${generationUrl})`}
    >
      <div class="inside generations-inside">
        <h1
          class="generations-title"
          style:background-color={hoverGenerations
            ? colGenerations
            : "transparent"}
        >
          Generations
        </h1>
      </div>
    </a>
  </div>
</main>

<style lang="scss">
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
        top: 0;
        left: 0;
        width: calc(50% - 2px);
        height: 100%;
        //filter: brightness(1) hue-rotate(350deg) saturate(2) blur(0px) contrast(0.6);
        background-image: url("/images/mercurial01.png");
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
        // filter: brightness(0.7) hue-rotate(350deg) saturate(3) blur(0px)
        //   contrast(0.6);
        background: #bf2361;
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
      //background-color: rgb(0, 0, 0);
      transition: all 0.7s ease;
      padding: 5px;
      font-size: 2rem;
      letter-spacing: 3.3px;
      font-weight: 400;
      color: #fff;
      text-decoration: none;
      letter-spacing: 2.3px;
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
      letter-spacing: 2.3px;
      writing-mode: vertical-rl;
      text-orientation: upright;
    }
  }
</style>
