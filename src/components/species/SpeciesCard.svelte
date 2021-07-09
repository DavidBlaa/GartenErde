<script>

import {hosturl} from '../../stores/store.js'


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

export let Id;
export let Type;
export let Name;
export let ScientificName;
export let Description;
export let ImagePath;
export let TaxonRank;

$:imagePath = hosturl+ImagePath;

</script>

<a href="/species/{Type}_{Id}" > <div class="SpeciesCardContainer" transition:fade>
  <div class="{Type}">
  <Card> 
   <img src="{imagePath}" alt="{Name}" />
   <CardHeader>
     <CardTitle>{Name}</CardTitle>
   </CardHeader>
   <CardBody>
     <CardSubtitle>{ScientificName}</CardSubtitle>
     <CardText>
      
      <p class="description">
      <br/>
      {Description}
     </p>
     </CardText>

   </CardBody>
   <CardFooter>
    
    {Type} - {TaxonRank}

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

 img{
   width: 100%;
 }

 .description{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
 }

 .Pflanze{
   color:forestgreen;
 }
 .Tier{
   color:red;
    }
</style>