<script context="module">
 import {hosturl} from '../../stores/store.js'
 import { Container} from 'sveltestrap';

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
<Container>

<h1>{species.Name}</h1>

<p>{species.Description}</p>
<p>{species.Type}</p>

</Container>