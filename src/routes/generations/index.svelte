<script>
  import { onMount } from 'svelte'
  import { selectedWork } from '$lib/stores'
  import Generations from '$lib/components/Generations.svelte'

  onMount(() => {
      selectedWork.set('city-cubes')
  })
</script>

<Generations />