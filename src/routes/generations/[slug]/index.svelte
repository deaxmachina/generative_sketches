<script>
  import { onMount } from 'svelte'
  import { selectedWork } from '$lib/stores'
  import { page } from '$app/stores'
  import Generations from '$lib/components/Generations.svelte'

  onMount(() => {
      selectedWork.set($page.params.slug)
  })
</script>

<Generations />