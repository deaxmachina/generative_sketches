<script>
  import { onMount } from 'svelte'
  import { selectedWork } from '$lib/stores'
  import Sketches from '$lib/components/Sketches.svelte'

  onMount(() => {
      selectedWork.set('mercurial01')
  })
</script>

<Sketches />