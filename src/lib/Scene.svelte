

<script>

import Mountains from './Mountains.svelte';
import Rivers from './Rivers.svelte';

let s = 0;


</script>


<div class="wurst" style="position:relative; width:400px; height:120px; overflow:hidden;">
  <h1 style="left:290px;top:10px;">Wurst</h1>
  <div style="left:10px;top:40px;">Eins</div>
  <p>Zwei</p>
  <p>Hololo</p>
  <p>Hololo</p>
  <p>Hololo</p>
  <p>Hololo</p>

</div>


<style>

.wurst {
  border: 3px solid #73AD21;
  background-color: bisque;
}

.wurst * {
  position: absolute;
  background-color: lightblue;
}


</style>