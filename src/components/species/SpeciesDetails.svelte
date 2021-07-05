<script>
import { Container} from 'sveltestrap';

export let species;

</script>

<Container>

 <h1>{species.Name}</h1>
 <h2>{species.ScientificName}</h2>
 <p>Type: <b>{species.Type}</b></p>
 
 <p>Taxon: <b>{species.TaxonRank}</b></p>

 <p>{species.Description}</p>

 </Container>

 