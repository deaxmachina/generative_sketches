<script>
  import { onMount, afterUpdate } from 'svelte'
  import { selectedWork } from '$lib/stores'
  import { page } from '$app/stores'
  import Sketches from '$lib/components/Sketches.svelte'

  $: slug = $page.params.slug
  $: {
    selectedWork.set(slug)
  }

  onMount(() => {
    selectedWork.set(slug)
  })

</script>

<Sketches />