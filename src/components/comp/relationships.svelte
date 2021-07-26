<script>
 import { Container } from 'sveltestrap';
 import SimpleParent from '../../components/comp/simpleParent.svelte';

 import Link from './simpleLink.svelte'
 
 export let Parent;
 export let Childrens=[];
 
 
 </script>
 <Container>
 {#if Parent}
  <b>Abstammung</b> <br/>
  <SimpleParent node={Parent} />
 {/if}
 
<br/>

 {#if Childrens.length>0}
 <b>Kinder</b>
 {#each Childrens as child}
 <p><Link node={child}/> ({child.Type})</p>
 {/each}
 {/if }
</Container>
 