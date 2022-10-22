<script context="module">
    import { writable, get } from 'svelte/store';
    import { scene } from '../lib/state.js'

    let itemLocation = writable("Berg");
</script>
<script>
    function action() {  
        itemLocation.set(get(itemLocation) === "Inventory" ? "Berg" : "Inventory" );
    };
    export let showInLocation = get(scene);
</script>

{#if $itemLocation === showInLocation }
    {#if $itemLocation === "Inventory" }
        <button on:click={action}>ein Edelweiss</button>    
    {:else if $itemLocation === "Berg"  }
        <button on:click={action}><em>ein Edelweiss</em></button>
    {/if}
{/if} 


