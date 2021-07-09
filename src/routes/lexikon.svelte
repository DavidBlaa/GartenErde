<script>
 import { Species } from '../stores/store.js'
 import SpeciesCard from '../components/species/SpeciesCard.svelte'
 import { Col, Container, Row, Input } from 'sveltestrap';

 let searchTerm="";
 let filteredSpecies=[];
 $: count = 0;

 $:{

   console.log({searchTerm})

   if(searchTerm)
   {
     //search species
     filteredSpecies = $Species.filter(species => species.Name.toLowerCase().includes(searchTerm.toLowerCase()))
   }
   else{
    filteredSpecies = [...$Species]
   }

   count = filteredSpecies.length;

   console.log({filteredSpecies})
 }

</script>

<Container>
 <Input type="search" name="search" id="SpeciesSearch" placeholder="search species" bind:value={searchTerm} />
 <Row>
  <p>Ergebnisse: {count} </p>
 </Row>
 <Row>
 {#each filteredSpecies as o}
   <Col xs="12" md="4" xl="3"><SpeciesCard {...o}/></Col>
 {/each}
</Row>
</Container>

