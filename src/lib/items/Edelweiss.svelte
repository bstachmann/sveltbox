<script context="module">
    import { writable } from 'svelte/store';
    let itemLocation = writable("Berg");
</script>
<script>
    export let showInLocation;

    function action() {  
        itemLocation.set($itemLocation === "Inventory" ? "Berg" : "Inventory" );
    };
</script>

{#if showInLocation === $itemLocation }
    <button on:click={action}>ein Edelweiss</button>    
{/if} 


