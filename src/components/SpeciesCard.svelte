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

export let Species;


</script>


 <div class="SpeciesCardContainer">
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
    <a href="/species/${Species.Id}" >details</a>
   </CardFooter>
  </Card>
 </div>



<style >
 .SpeciesCardContainer{
  margin: 10px 0;
 }

</style>