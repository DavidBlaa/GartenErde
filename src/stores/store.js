import {writable} from 'svelte/store';

export const hosturl = 'http://localhost:55683'

export const Species = writable([]);
export const Stats = writable([]);

const fetchSpecies = async () => {
 const url = hosturl +'/api/species';
 const res = await fetch(url);

 Species.set(await res.json());
} 

fetchSpecies();

const fetchStatistic = async () => {
 const url = hosturl +'/api/statistic';
 const res = await fetch(url);
 Stats.set(await res.json());

} 

fetchStatistic();
