<script context="module">

import {hosturl} from '../../stores/store.js'
import { Container} from 'sveltestrap';
import SpeciesPart from '../../components/species/SpeciesDetails.svelte'
import Interactions from '../../components/comp/interactions.svelte';
import Releationships from '../../components/comp/relationships.svelte';
import { TabContent, TabPane } from 'sveltestrap';


 export async function load({page}){
     const id = page.params.id;
     const url = hosturl + 'api/animal/'+id.replace('$','')
     const res = await fetch(url);
     const species = await res.json();
     return {props:{species}}
 }
</script>

<script>
 export let species
</script>

<SpeciesPart {...species} />
<Container>
<TabContent pills >
    <TabPane tabId="Beziehung" tab="Beziehung">
        <Releationships {...species}/>
    </TabPane>
    <TabPane tabId="Interactions" tab="Interaktionen" active>
     <Interactions {...species}/>
    </TabPane>
</TabContent>
</Container>