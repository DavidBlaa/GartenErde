<script>
import {fade} from 'svelte/transition';

 export let node;

</script>

<a href="/species/{node.Type}_{node.Id}" transition:fade> 
 {node.Name}
</a>