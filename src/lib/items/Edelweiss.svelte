
<script context="module">
import { inventory } from '../state';
import { get } from 'svelte/store';

function action() {
    inventory.set({...get(inventory), "edelweiss": "Moin Edelweiß!"});
}
</script>

<h2>Das Edelweiß</h2>

{#if $inventory["edelweiss"] }
<p>Not Edelweiß</p>
{:else}
<button on:click={action}>Ein Edelweiß</button>
{/if}