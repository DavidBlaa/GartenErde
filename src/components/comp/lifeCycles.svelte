<script>

import { TabPane } from 'sveltestrap';
import TimePeriod from '../comp/timePeriod.svelte'
import Cultures from './cultures.svelte';

export let LifeCycles;
 
</script>


{#each LifeCycles as lc}
<hr>
{#each lc as tp}
 <TimePeriod {...tp}/>
{/each}

{/each}