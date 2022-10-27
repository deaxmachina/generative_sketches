<script>
  import { onMount } from 'svelte'
  import { selectedWork } from '$lib/stores'
  import { page } from '$app/stores'
  import Sketches from '$lib/components/Sketches.svelte'

  //$:console.log('page', $page.params.slug)

  onMount(() => {
      selectedWork.set($page.params.slug)
  })
</script>

<Sketches />