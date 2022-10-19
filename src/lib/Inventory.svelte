<script >
import { inventory }  from './state';
</script>

<main>
  <h2>Inventorium</h2>

  <p>
    inventory: 
    {#each Object.entries($inventory) as [k,v]}
    KEY {k} VALUE {v} <br/> 
    {/each}
  </p>

</main>

<style>
</style>
