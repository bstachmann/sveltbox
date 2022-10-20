
<script context="module">
    import Edelweiss from '../items/Edelweiss.svelte';
    import { scene } from '../state';

    function toHuette() {
         scene.set("Huette");
    }
</script>
  
<h1>Berg</h1>

<Edelweiss showInLocation={"Berg"}/>

<button on:click={toHuette}>Zurück zur tollen Hütte!</button>

  
  