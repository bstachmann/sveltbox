<script context="module">
    import { writable } from 'svelte/store';
    import { scene } from '../state.js'
    let itemLocation = writable("Berg");
</script>
<script>
    export let showInLocation = $scene;
    function action() {  
        itemLocation.set($itemLocation === "Inventory" ? "Berg" : "Inventory" );
    };
</script>

{#if $itemLocation !== showInLocation }
    <!-- nothing -->Placeholder EW
{:else if $itemLocation === "Inventory" }
    <button on:click={action}>ein Edelweiss</button>    
{:else if $itemLocation === "Berg"  }
        <button on:click={action}><em>ein Edelweiss</em></button>
{:else}
    INVALID Edelweiss at {$itemLocation} show in {showInLocation}
{/if} 


