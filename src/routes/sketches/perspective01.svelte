<script>
    import { onMount } from 'svelte'
    import { selectedWork } from '../../lib/stores'
    import TrackballControlsExample from '../../lib/components/TrackballControlsExperiment/index.svelte' 

    onMount(() => {
        selectedWork.set('perspective01')
    })
</script>

<TrackballControlsExample />