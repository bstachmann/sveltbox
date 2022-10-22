
<script context="module">
    import Edelweiss from '../items/Edelweiss.svelte';
    import { scene } from '../lib/state';

    function toHuette() {
         scene.set("Huette");
    }
</script>
  
<h1>Berg</h1>

<Edelweiss/>

<button on:click={toHuette}>Zurück zur tollen Hütte!</button>

  
  