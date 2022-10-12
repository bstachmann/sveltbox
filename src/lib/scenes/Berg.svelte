
<script context="module">
    import Huette from './Huette.svelte';
    import Edelweiss from '../items/Edelweiss.svelte';
    import { currentScene } from '../state';

    export let r = Math.random()

    function toHuette() {
         currentScene.set(Huette);
    }
</script>
  
  
<h1>Berg {r}</h1>

<Edelweiss/>

<button on:click={toHuette}>Zurück zur Hütte!</button>

  
  