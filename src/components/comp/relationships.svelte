<script>
 import { Container } from 'sveltestrap';
 import SimpleParent from '../../components/comp/simpleParent.svelte';

 import Link from './simpleLink.svelte'
 
 export let parent;
 export let children=[];
 
 </script>
 
 
 {#if parent}
  <b>Eltern</b> 
  <SimpleParent node={parent} />
 {/if}
 
 {#if children.length>0}
 <h5>Kinder</h5>
 {#each children as child}
 <p><Link node={child}/> ({child.Type})</p>

 {/each}
 {/if }
 