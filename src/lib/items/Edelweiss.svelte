
<script context="module">
import { inventory } from '../state';

function take() {
    inventory.set(["edelw"])
}
</script>

<h2>WE</h2>

<!--  -->
{#if $inventory.includes("edelw") }
<p>Not Edelweiß</p>
{:else}
<p>Edelweiß</p>
<button on:click={take}>Take</button>
{/if}