<script>
  import { onMount } from 'svelte'
  import { selectedWork } from '../../lib/stores'
  import ShaderShapes from '../../lib/components/ShaderShapes/index.svelte' 

  onMount(() => {
    selectedWork.set('mercurial01')
  })
</script>

<ShaderShapes />