import {writable} from 'svelte/store';

export const hosturl = 'http://localhost:55683'

export const Species = writable([]);

const fetchSpecies = async () => {
 const url = hosturl +'/api/species';
 const res = await fetch(url);
 
 console.log(res);

 Species.set(await res.json());
} 

fetchSpecies();