<script context="module">
 import {hosturl} from '../../stores/store.js'

 export async function load({page}){
     const id = page.params.id;
     const url = hosturl + 'api/species/'+id.replace('$','')
     const res = await fetch(url);
     const species = await res.json();
     return {props:{species}}
 }
</script>

<script>
 export let species
</script>

<h1>{species.Name}</h1>

<p>{species.Description}</p>