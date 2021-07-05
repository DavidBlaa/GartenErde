<script>
import { Table, Container } from 'sveltestrap';
import Link from './simpleLink.svelte'

export let precultures;
export let aftercultures;

</script>

<Container>
<h5>Vorkultur</h5>
  
{#each precultures as preculture}
<p><Link node={preculture}/></p>

{/each}

<h5>Nachkultur</h5>
{#each aftercultures as afterculture}
<p><Link node={afterculture}/></p>

{/each}
</Container>
