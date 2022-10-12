<script >
import { currentScene }  from './lib/state';

import Huette from './lib/Huette.svelte';

currentScene.set(Huette);

</script>

<main>
  <h1>Ein Adventure</h1>

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
