<script>
    import { onMount } from 'svelte'
    import { selectedWork } from '../../lib/stores'
    import HemisphereLight2 from '../../lib/components/HemisphereLight2/index.svelte'

    onMount(() => {
        selectedWork.set('structured02')
    })
</script>

<HemisphereLight2 />