<script>
import { Table } from 'sveltestrap';
import Link from './simpleLink.svelte'

export let precultures;
export let aftercultures;

</script>

<h2>Vorkultur</h2>
  
{#each precultures as preculture}
<p><Link node={preculture}/></p>

{/each}

<h2>Nachkultur</h2>
{#each aftercultures as afterculture}
<p><Link node={afterculture}/></p>

{/each}
