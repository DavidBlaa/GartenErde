<script>
 import { Container } from 'sveltestrap';
 import SimpleParent from '../../components/comp/simpleParent.svelte';

 import Link from './simpleLink.svelte'
 
 export let Parent;
 export let Childrens=[];
 
 
 </script>
 <Container>
 {#if Parent}
  <b>Eltern</b> <br/>
  <SimpleParent node={Parent} />
 {/if}
 
<br/>

 {#if Childrens.length>0}
 <h5>Kinder</h5>
 {#each Childrens as child}
 <p><Link node={child}/> ({child.Type})</p>
 {/each}
 {/if }
</Container>
 