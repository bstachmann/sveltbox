
<script context="module">
import { scene } from '../lib/state';
export const name="Hütte";

function toBerg() {
  scene.set("Berg");
}
</script>
  

<h1>Huette</h1>


<button on:click={toBerg}>Zu Berge!</button>
