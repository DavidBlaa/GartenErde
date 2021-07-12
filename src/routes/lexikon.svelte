<script>
 import { Species } from '../stores/store.js'
 import SpeciesCard from '../components/species/SpeciesCard.svelte'
 import { Col, Container, Row, Input } from 'sveltestrap';

 let searchTerm="";
 let filteredSpecies=[];
 
 let Pflanze = true;
 let Tier = true;
 $: count = 0;
 $: filterTypes = [];
 $:{

   console.log({searchTerm})
   console.log({Pflanze})
   console.log({Tier})
   
   filterTypes = setFilterType();

   //search species
   filteredSpecies = $Species.filter(species => filterTypes.includes(species.Type) && species.Name.toLowerCase().includes(searchTerm.toLowerCase()))

   count = filteredSpecies.length;


 }

function setFilterType()
{
  let types =[];
  if(Pflanze) types.push("Pflanze");
  if(Tier) types.push("Tier");
  //console.log(types);

  return types;
}


</script>

<Container>
 <Input type="search" name="search" id="SpeciesSearch" placeholder="search species" bind:value={searchTerm} />
 
 <Row>
    <Col xs=auto>
      Ergebnisse: {count}
    </Col>
    <Col xs=auto>
    <Input id="Pflanze" type="checkbox" label="Pflanze" bind:checked={Pflanze} />
    </Col>
    <Col xs=auto>
      <Input id="Tier" type="checkbox" label="Tier" bind:checked={Tier} />
    </Col>
 </Row>
 <Row>
 {#each filteredSpecies as o}
   <Col xs="12" md="4" xl="3"><SpeciesCard {...o}/></Col>
 {/each}
</Row>
</Container>

