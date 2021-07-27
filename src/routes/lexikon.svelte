<script>
 import { Species } from '../stores/store.js'
 import SpeciesCard from '../components/species/SpeciesCard.svelte'
 import { Col, Container, Row, Input } from 'sveltestrap';

 let searchTerm="";
 let filteredSpecies=[];
 
 let Pflanze = true;
 let Tier = true;
 let onlyArt = true;

 $: count = 0;
 $: filterTypes = [];
 $: filterRank = [];
 $:{

   console.log({searchTerm})
   console.log({Pflanze})
   console.log({Tier})
   console.log({onlyArt})
   
   filterTypes = setFilterType();
   filterRank = setFilterRank();
   console.log(filterRank)

   //search species
   filteredSpecies = $Species.filter(species => 
          filterTypes.includes(species.Type) && 
          filterRank.includes(species.TaxonRank) && 
          species.Name.toLowerCase().includes(searchTerm.toLowerCase()))

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

function setFilterRank()
{
  let ranks =[];

  if(onlyArt) 
  { 
    ranks.push("Art");
    ranks.push("Unterart");
  }
  else
  {
    ranks.push("Klasse");
    ranks.push("Ordnung");
    ranks.push("Familie");
    ranks.push("Gattung");
    ranks.push("Art");
    ranks.push("Unterart");
  }

  return ranks;
}


</script>

<Container>
 <Input type="search" name="search" id="SpeciesSearch" placeholder="Suche" bind:value={searchTerm} />
 <div class="stats">
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
    <Col xs=auto>
      <Input id="Art" type="checkbox" label="nur Arten/Sorten" bind:checked={onlyArt} />
    </Col>
 </Row>
</div>
 <Row>
 {#each filteredSpecies as o, i (o.Id)}
   <Col xs="12" md="4" xl="3"><SpeciesCard {...o}/></Col>
 {/each}
</Row>

</Container>

<style>
  .stats{
    padding-left: 2px;;
    padding-top:9px;
    padding-bottom:5px;
  }
</style>
