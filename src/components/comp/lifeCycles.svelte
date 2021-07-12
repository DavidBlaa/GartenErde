<script>

import TimePeriod from '../comp/timePeriod.svelte'

export let LifeCycles;
 
</script>


{#each LifeCycles as lc}

{#each lc as tp}
 <TimePeriod {...tp}/>
{/each}

{/each}