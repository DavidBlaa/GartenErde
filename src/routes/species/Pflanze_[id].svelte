<script context="module">

import {hosturl} from '../../stores/store.js'
import SpeciesPart from '../../components/species/SpeciesDetails.svelte'
import { Container} from 'sveltestrap';
import Interactions from '../../components/comp/interactions.svelte';
import Cultures from '../../components/comp/cultures.svelte';
import PlantDetails from '../../components/comp/plant/plantdetails.svelte';
import Releationships from '../../components/comp/relationships.svelte';
import LifeCycles from '../../components/comp/lifeCycles.svelte';
import { TabContent, TabPane } from 'sveltestrap';

export async function load({page}){
     const id = page.params.id;
     const url = hosturl + '/api/plant/'+id.replace('$','')
     const res = await fetch(url);
     const species = await res.json();
     return {props:{species}}
 }
</script>

<script>
 export let species
</script>


<SpeciesPart {...species}/>
<Container>
<TabContent  >
    <TabPane  tabId="Details" tab="Details" active>      
        <PlantDetails {...species} />
    </TabPane>
    <TabPane tabId="Beziehung" tab="Beziehung">
        <Releationships {...species}/>
    </TabPane>
    <TabPane tabId="Interactions" tab="Interaktionen">
     <Interactions {...species}/>
    </TabPane>
    <TabPane tabId="Cultures" tab="Kulturen">
     <Cultures {...species} /> 
    </TabPane>
    <TabPane tabId="Lebenszyklus" tab="Lebenszyklus">
     <LifeCycles {...species} /> 
    </TabPane>
</TabContent>
</Container>


