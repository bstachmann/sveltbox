
<script context="module">

    import Huette from './Huette.svelte';
    import { currentScene } from './state';

    export let r = Math.random()

    function toHuette() {
         currentScene.set(Huette);
    }
</script>
  
  
<h1>Berg {r}</h1>

<button on:click={toHuette}>Zurück zur Hütte!</button>

  
  