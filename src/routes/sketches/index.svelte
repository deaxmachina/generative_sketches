<script>
    import { base } from '$app/paths';
    import { selectedWork } from '../../lib/stores'
    import sketchesData from './sketchesData'
    import Light01 from './light01.svelte';
    import Colours01 from './colours01.svelte';
</script>

<Colours01 />

<!-- <h1>The index of the sketches</h1>
<ul>
    <li>
        {#each sketchesData as sketch}
            <a href='{base}/sketches/{sketch.key}' on:click={() => selectedWork.set(sketch.key)}>{sketch.key}</a>
        {/each}
    </li>
</ul> -->