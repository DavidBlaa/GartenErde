<script>
 import { Species } from '../stores/store.js'
 import SpeciesCard from '../components/SpeciesCard.svelte'
 import { Col, Container, Row, Input } from 'sveltestrap';

 let searchTerm="";
 let filteredSpecies=[];

 $:{

  console.log({searchTerm})

   if(searchTerm)
   {
     //search species
     filteredSpecies = $Species.filter(species => species.Name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
   }
   else{
    filteredSpecies = [...$Species]
   }

 }

</script>

<svelte:head>
 <title>Garten Erde - Lexikon</title>
</svelte:head>



<Container>
 <Input type="search" name="search" id="SpeciesSearch" placeholder="search species" bind:value={searchTerm} />
 <Row>
 {#each filteredSpecies as o}
   <Col xs="12" md="4" xl="3"><SpeciesCard Species={o}/></Col>
 {/each}
</Row>
</Container>

