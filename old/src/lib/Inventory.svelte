<script context="module">
import Edelweiss  from '../items/Edelweiss.svelte';

let allHoldableItems = [ 
  Edelweiss,
];

</script>

<h2>Inventory</h2>

<ul>
  {#each allHoldableItems as item}
    <li><svelte:component this={item} showInLocation="Inventory"/></li>
  {/each}
</ul>


<style>
</style>
