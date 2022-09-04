<script>
    import { onMount } from 'svelte'
    import { selectedWork } from '../../lib/stores'
    import HemisphereLight from '../../lib/components/HemisphereLight/index.svelte'

    onMount(() => {
        selectedWork.set('structured01')
    })
</script>

<HemisphereLight />