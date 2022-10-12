
<script context="module">
import Berg from './Berg.svelte';
import { currentScene } from './state';

function toBerg() {
  currentScene.set(Berg);
}
</script>
  

<h1>Huette</h1>

<button on:click={toBerg}>Zu Berge!</button>
