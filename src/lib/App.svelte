<script>
  import '$lib/styles/global.scss'
  import { createNoise2D } from 'simplex-noise';
  import Frame from './components/Frame/index.svelte'
  import RandomValPerVertexShape from './components/RandomValPerVertexShape/index.svelte'
  import Random3ValsPerVertexShape from './components/Random3ValsPerVertexShape/index.svelte'
  import ShaderColours from './components/ShaderColours/index.svelte'
  import HemisphereLight from './components/HemisphereLight/index.svelte'
  import RectAreaLight from './components/RectAreaLight/index.svelte';
  import SimpleCube from './components/SimpleCube/index.svelte'
  import TrackballControlsExample from './components/TrackballControlsExperiment/index.svelte'
  import OrbWithShader from './components/Experiment/OrbWithShader.svelte'
  import Amazarashi from './components/Experiment/Amazarashi.svelte'
  import AmazarashiLandscape from './components/Experiment/AmazarashiLandscape.svelte';
  import NeoTokyo from './components/Experiment/NeoTokyo.svelte'
</script>


<TrackballControlsExample />
<RectAreaLight />
<ShaderColours  />
<HemisphereLight />
<NeoTokyo />
<Amazarashi />
<OrbWithShader />




