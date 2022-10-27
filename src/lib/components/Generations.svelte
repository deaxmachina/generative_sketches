<script>
  import '$lib/styles/global.scss'
  import { selectedWork } from '$lib/stores'
  import Amazarashi from '$lib/components/Generations/Amazarashi.svelte'
  import RectAreaLight from '$lib/components/Generations/RectAreaLight.svelte'
  import CubeFace from '$lib/components/Generations/CubeFace.svelte'
  import ManyCubes from '$lib/components/Generations/ManyCubes.svelte'
  import PopCity from '$lib/components/Generations/PopCity.svelte'
</script>

{#if $selectedWork === 'amazarashi'}
  <Amazarashi />
{:else if $selectedWork === 'city-cubes'}
  <RectAreaLight />
{:else if $selectedWork === 'cube-face'}
  <CubeFace />
{:else if $selectedWork === 'many-cubes'}
  <ManyCubes />
{:else if $selectedWork === 'pop-city'}
  <PopCity />
{:else}
  <h1>This page does not exist... yet</h1>
{/if}