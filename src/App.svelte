<script>
import Berg from './lib/Berg.svelte'
import Huette from './lib/Huette.svelte'

let scenes = [ Berg, Huette ];
let currentScene = Huette;

function setScene(s) {
  return () => {
    console.log("MOIN", s);
    currentScene = s;
  }
}

</script>

<main>
  <h1>Ein Adventure</h1>

  {#each scenes as scene }
    <button on:click={setScene(scene)}>{scene.name}</button>
  {/each}

  <div class="scene" style="">
    <svelte:component this={currentScene} />
  </div>




</main>

<style>
.scene {
  border: 3px solid #73AD21;
  background-color: bisque;
  position:relative; 
  width:640px; 
  height:480px; 
  overflow:hidden;
}
</style>
