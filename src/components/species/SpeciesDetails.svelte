<script>
import { Container} from 'sveltestrap';



export let Name;
export let ScientificName;
export let Type;
export let TaxonRank;
export let Description;

</script>

<Container>

 <h1>{Name}</h1>
 <h2>{ScientificName}</h2>
 <p>Type: <b>{Type}</b></p>
 
 <p>Taxon: <b>{TaxonRank}</b></p>

 <p>{Description}</p>

 

 </Container>

 