<script>
import { Container,Row,Col } from 'sveltestrap';
import SimpleParent from '../comp/simpleParent.svelte'
import {hosturl} from '../../stores/store.js'

export let Id;
export let Name;
export let ScientificName;
export let Type;
export let TaxonRank;
export let Description;
export let Parent;
export let ImagePath;
let imagePath

$:{
  console.log(Name +" - "+ImagePath)
  console.log(Id);

  imagePath = hosturl+ImagePath;
}


</script>

<Container>
 <Row>
  <Col>
   <img src="{imagePath}" alt="{Name}" class="img-thumbnail" />
  </Col>
  <Col xs="10">
   <h1>{Name}</h1>
   <h2>{ScientificName}</h2>
   <p>Type: <b>{Type}</b> Taxon: <b>{TaxonRank}</b></p>
   {#if Parent}
   <SimpleParent node={Parent} />
   {/if}
  
  </Col>
  
 </Row>
 <Row>
  <Col>
  <div class="description"> <p>{Description}</p></div>
  </Col>
 </Row>
 </Container>

 <style>
  .description{
    margin-top: 20px;
    margin-bottom: 10px;

  }
 </style>