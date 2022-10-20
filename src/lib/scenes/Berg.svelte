
<script context="module">
    import Huette, {name} from './Huette.svelte';
    import Edelweiss from '../items/Edelweiss.svelte';
    import { currentScene } from '../state';
    // import Huette from './Huette.svelte';

    function toHuette() {
         currentScene.set(Huette);
    }
</script>
  
<h1>Berg</h1>

<Edelweiss showInLocation={"Berg"}/>

<button on:click={toHuette}>Zurück zur tollen {name}!</button>

  
  