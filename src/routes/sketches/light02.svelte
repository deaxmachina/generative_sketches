<script>
    import { onMount } from 'svelte'
    import { selectedWork } from '../../lib/stores'
    import RectAreaLight from '../../lib/components/RectAreaLight2/index.svelte' 

    onMount(() => {
        selectedWork.set('light02')
    })
</script>

<RectAreaLight />