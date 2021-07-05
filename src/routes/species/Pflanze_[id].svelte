<script context="module">

import {hosturl} from '../../stores/store.js'
import SpeciesPart from '../../components/species/SpeciesDetails.svelte'
import { Container} from 'sveltestrap';
import Interactions from '../../components/comp/interactions.svelte';
import Cultures from '../../components/comp/cultures.svelte';
import { TabContent, TabPane } from 'sveltestrap';

export async function load({page}){
     const id = page.params.id;
     const url = hosturl + 'api/plant/'+id.replace('$','')
     const res = await fetch(url);
     const species = await res.json();
     return {props:{species}}
 }
</script>

<script>
 export let species
</script>

<Container>
<SpeciesPart {species}/>

<TabContent pills >
    <TabPane tabId="Interactions" tab="Interaktionen" active>
     <Interactions interactions={species.Interactions}/>
    </TabPane>
    <TabPane tabId="Cultures" tab="Kulturen">
     <Cultures precultures={species.PreCultures} aftercultures={species.AfterCultures} /> 
    </TabPane>
</TabContent>
</Container>