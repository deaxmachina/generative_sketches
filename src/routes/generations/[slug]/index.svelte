<script>
  import { onMount } from 'svelte'
  import { selectedWork } from '$lib/stores'
  import { page } from '$app/stores'
  import Generations from '$lib/components/Generations.svelte'

  $: slug = $page.params.slug
  $: {
    selectedWork.set(slug)
  }

  onMount(() => {
      selectedWork.set(slug)
  })
</script>

<Generations />