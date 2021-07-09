<script>
 import { Icon } from 'sveltestrap';
 import Link from './simpleLink.svelte'
export let node;

let parent = node.Parent

</script>
<div title="{node.ScientificName}">
 <span class="rank">{node.TaxonRank} </span><br/>
 <Link node={node}/>
</div>


{#if parent}
<Icon name="arrow-left" />
<svelte:self node={parent}/>
{/if}


<style>

.rank{
 font-size:10px;
 font-weight: bold;

}

 div {
  box-shadow:  0 1px 1px 0 rgba(53, 38, 38, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
  display: inline-block;
  padding:0 5px;
  border-radius: 5px;
 }

 div:hover {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
 }


</style>