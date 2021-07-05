<script>

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle
  } from 'sveltestrap';

import {fade} from 'svelte/transition';

export let Species;


</script>

<a href="/species/{Species.Type}_{Species.Id}" > <div class="SpeciesCardContainer" transition:fade>
  <div>
  <Card>
   <CardHeader>
     <CardTitle>{Species.Name}</CardTitle>
   </CardHeader>
   <CardBody>
     <CardSubtitle>{Species.ScientificName}</CardSubtitle>
     <CardText>
      <p>
      <br/>
      {Species.Description}
     </p>
     </CardText>

   </CardBody>
   <CardFooter>
    {Species.Type}
   </CardFooter>
  </Card>
 </div>
</a>

<style>
 .SpeciesCardContainer{
  margin: 10px 0;
 }

 a, a:visited, a:hover, a:active  {
  text-decoration: none;
  color:darkslategrey;
 }

 div {
  box-shadow:  0 1px 1px 0 rgba(53, 38, 38, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
 }

 div:hover {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
 }

</style>