<script>
import { Interactions } from '../stores/store.js'
import InteractionsComp from '../components/comp/interactions.svelte';
import DT from '../components/comp/datatables.svelte'
let I = []; 

$:{
  I = $Interactions;
  console.log(I);
}

</script>

<!-- <InteractionsComp {$Interactions} /> -->

<DT/>