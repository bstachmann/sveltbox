<script >
import { currentScene, inventory }  from './lib/state';

import Huette from './lib/scenes/Huette.svelte';
    import { each } from 'svelte/internal';

currentScene.set(Huette);

</script>

<main>
  <h1>Ein Adventure</h1>

  <p>
    inventory: 
    {#each $inventory as item}
    {item}, 
    {/each}
  </p>

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
