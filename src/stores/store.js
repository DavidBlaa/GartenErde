import {writable} from 'svelte/store';

export const hosturl = 'http://localhost:55683/'

export const testArray = writable([]);

const fetchTest = async () => {
 const url = hosturl +'api/testapi';
 const res = await fetch(url);
 testArray.set(await res.json());
} 

fetchTest();