<script>
export let node;

let parent = node.Parent

</script>
<p>
 {node.Name} ({node.ScientificName}) - {node.TaxonRank}
</p>

{#if parent}
<svelte:self node={parent}/>
{/if}