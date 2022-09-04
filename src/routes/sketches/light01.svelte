<script>
    import { onMount } from 'svelte'
    import { selectedWork } from '../../lib/stores'
    import RectAreaLight from '../../lib/components/RectAreaLight/index.svelte' 

    onMount(() => {
        selectedWork.set('light01')
    })
</script>

<RectAreaLight />