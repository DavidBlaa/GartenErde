<script>
import { Container, Input, Row,Col } from 'sveltestrap';
import { Interactions } from '../stores/store.js'
import InteractionsComp from '../components/comp/interactions.svelte';
import DT from '../components/comp/datatables.svelte'
let filteredInteractions = []; 
let count = 0; 
let searchTerm="";

$:{
 
  console.log({searchTerm});

  filteredInteractions = $Interactions.filter(i => 
    i.Subject.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.Object.Name.toLowerCase().includes(searchTerm.toLowerCase()))


  console.log({searchTerm})
  count = filteredInteractions.length;
}

</script>
<Container>
  <Row>
    <Col sm={{ size: 3,  offset: 9 }} >
      <Input type="search" name="search" id="interactionSearch" placeholder="Suche" bind:value={searchTerm} />
    </Col>
  </Row>
</Container>

<InteractionsComp bind:Interactions={filteredInteractions} />

<!-- <DT/> -->