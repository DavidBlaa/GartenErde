<script>
import {Sources, fetchSource} from '../stores/store.js'
import Topic from '../components/layout/sourceTopic.svelte'
import {onMount} from 'svelte'

onMount(() => {
  fetchSource();
  
})



</script>

{#if $Sources}
 {#each $Sources as s}
  <Topic {...s}/>
 {/each}
{/if}

