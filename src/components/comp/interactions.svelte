<script>
import { Table, Container } from 'sveltestrap';
import Link from './simpleLink.svelte'

export let interactions;

</script>

<Container>
<Table>
 <thead>
   <tr>
     <th>Subjekt</th>
     <th>Prädikat</th>
     <th>Objekt</th>
     <th>Impact Objekt</th>
     <th>Indikator</th>
   </tr>
 </thead>
 <tbody>
  
{#each interactions as interaction}
 
<tr>
  <td><Link node={interaction.Subject}/></td>
  <td>{interaction.Predicate.Name}</td>
  <td><Link node={interaction.Object}/></td>
  <td><Link node={interaction.ImpactSubject}/></td>
  <td>{interaction.Indicator}</td>
</tr>

{/each}
</tbody>
</Table>
</Container>