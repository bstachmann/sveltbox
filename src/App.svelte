<script>
  import { scene }  from './lib/state';
  import Inventory from './lib/Inventory.svelte';
    
  let sceneComponent;
  
  scene.set("Huette");
  
  scene.subscribe(newSceneName => {
    (async () => {
        const toImport = './scenes/'+newSceneName+'.svelte';
        sceneComponent = (await import(toImport)).default;
    })();	
  });
  
</script>

<main>
  <h1>Ein Adventure</h1>

  <Inventory/>

  <h2>Scene</h2>

  <div class="scene" style="">
    <svelte:component this={sceneComponent} />
  </div>
</main>

<style>
.scene {
  border: 3px solid #73AD21;
  background-color: bisque;
  position:relative; 
  width:640px; 
  height:320px; 
  overflow:hidden;
}
</style>
  