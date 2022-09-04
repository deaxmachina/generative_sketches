<script>
  import { onMount } from 'svelte'
  import { selectedWork } from '../../lib/stores'
  import ShaderShapes2 from '../../lib/components/ShaderShapes2/index.svelte' 

  onMount(() => {
    selectedWork.set('mercurial02')
  })
</script>

<ShaderShapes2 />