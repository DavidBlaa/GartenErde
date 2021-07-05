<script>
 import { Container } from 'sveltestrap';
 import SimpleParent from '../../components/comp/simpleParent.svelte';

 import Link from './simpleLink.svelte'
 
 export let Parent;
 export let Children=[];
 
 </script>
 
 {#if Parent}
  <b>Eltern</b> 
  <SimpleParent node={Parent} />
 {/if}
 
 {#if Children.length>0}
 <h5>Kinder</h5>
 {#each Children as child}
 <p><Link node={child}/> ({child.Type})</p>
 {/each}
 {/if }
 