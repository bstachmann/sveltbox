<script >
import { currentScene, inventory }  from './lib/state';
import Inventory from './lib/Inventory.svelte';
import Huette from './lib/scenes/Huette.svelte';

currentScene.set(Huette);

</script>

<main>
  <h1>Ein Adventure</h1>

  <Inventory/>

  <h2>Scene</h2>

  <div class="scene" style="">
    <svelte:component this={$currentScene} />
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
