<script>
  import '$lib/styles/global.scss'
  import { selectedWork } from '$lib/stores'
  import ShaderColours from '$lib/components/Sketches/ShaderColours/index.svelte'
  import RectAreaLight1 from '$lib/components/Sketches/RectAreaLight/index.svelte' 
  import RectAreaLight2 from '$lib/components/Sketches/RectAreaLight2/index.svelte' 
  import ShaderShapes1 from '$lib/components/Sketches/ShaderShapes/index.svelte' 
  import ShaderShapes2 from '$lib/components/Sketches/ShaderShapes2/index.svelte' 
  import TrackballControlsExample from '$lib/components/Sketches/TrackballControlsExperiment/index.svelte'
  import HemisphereLight1 from '$lib/components/Sketches/HemisphereLight/index.svelte'
  import HemisphereLight2 from '$lib/components/Sketches/HemisphereLight2/index.svelte'
</script>

{#if $selectedWork === 'colours01'}
  <ShaderColours />
{:else if $selectedWork === 'light01'}
  <RectAreaLight1 />
{:else if $selectedWork === 'mercurial01'}
  <ShaderShapes1 />
{:else if $selectedWork === 'mercurial02'}
  <ShaderShapes2 />
{:else if $selectedWork === 'perspective01'}
  <TrackballControlsExample />
{:else if $selectedWork === 'structured01'}
  <HemisphereLight1 />
{:else if $selectedWork === 'structured02'}
  <HemisphereLight2 />
{:else}
  <h1>This page does not exist... yet</h1>
{/if}