<script>
    import { onMount } from 'svelte'
    import { selectedWork } from '../../lib/stores'
    import ShaderColours from '../../lib/components/ShaderColours/index.svelte'

    onMount(() => {
        selectedWork.set('colours01')
    })
</script>

<ShaderColours />