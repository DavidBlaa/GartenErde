<head>
 <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.css">
</head>

<script>
 import { onMount } from 'svelte'
 import jQuery from 'jquery'

 import dt from 'datatables.net'
 import dtCss from 'datatables.net-dt'



 export let values = [1,2,3,4]
 let tableElement

 onMount( () => {
  dt(jQuery)
  window.jQuery = jQuery;
  jQuery(tableElement).DataTable()
 } )

</script>

<h1>datatables</h1>

<table bind:this={tableElement} border="1px">
 <thead>
   <tr>
     <th>values</th>
   </tr>
 </thead>
 <tbody>
   {#each values as value}
     <tr>
       <td>{value}</td>
     </tr>
   {/each}
 </tbody>
</table>