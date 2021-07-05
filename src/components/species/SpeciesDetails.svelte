<script>
import { children } from 'svelte/internal';
import { Container} from 'sveltestrap';
import Relationships from '../../components/comp/relationships.svelte';
import Releationships from '../../components/comp/relationships.svelte';

export let species;

</script>

<Container>

 <h1>{species.Name}</h1>
 <h2>{species.ScientificName}</h2>
 <p>Type: <b>{species.Type}</b></p>
 
 <p>Taxon: <b>{species.TaxonRank}</b></p>

 <p>{species.Description}</p>

 <Relationships parent={species.Parent} children={species.children}/>

 </Container>

 