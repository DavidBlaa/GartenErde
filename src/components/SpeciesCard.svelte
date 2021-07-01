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

<a href="/species/{Species.Type}_{Species.Id}" > <div class="SpeciesCardContainer">
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




<style >
 .SpeciesCardContainer{
  margin: 10px 0;
 }

 a, a:visited, a:hover, a:active  {
  text-decoration: none;
  color:darkslategrey;
 }

</style>