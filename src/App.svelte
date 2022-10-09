<script>
import { currentScene }  from './lib/state';
import Huette from './lib/Huette.svelte';
import Berg from './lib/Berg.svelte';

let sceneToDisplay;
currentScene.subscribe(value => { sceneToDisplay = value; });
currentScene.set(Huette);

function aufnBerg() {
  alert("Und hoch")
  currentScene.set(Berg);
}

</script>

<main>
  <h1>Ein Adventure</h1>

  <button on:click={aufnBerg}>Berch</button>

  <div class="scene" style="">
    <svelte:component this={sceneToDisplay} />
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
