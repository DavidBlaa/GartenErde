<script>
import { Table, Container } from 'sveltestrap';
import Link from './simpleLink.svelte'

export let PreCultures;
export let AfterCultures;

</script>

<Container>
<h5>Vorkultur</h5>
  
{#each PreCultures as preculture}
<p><Link node={preculture}/></p>

{/each}

<h5>Nachkultur</h5>
{#each AfterCultures as afterculture}
<p><Link node={afterculture}/></p>

{/each}
</Container>
