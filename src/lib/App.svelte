<script>
  import '$lib/styles/global.scss'
  import { selectedWork } from '$lib/stores'
  import ShaderColours from '$lib/components/ShaderColours/index.svelte'
</script>

{#if $selectedWork === 'colours01'}
  <ShaderColours />
{:else}
  <h1>Other</h1>
{/if}






