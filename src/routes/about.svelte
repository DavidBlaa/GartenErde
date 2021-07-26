<script>

let name = "david";
let age = 39;
let image = false;


$: uppercaseName = name.toUpperCase();
$: value = image;

$: console.log(name);
$: console.log(value);

$: if (name === 'Felix')
{
  age = 0;
}

function increment()
{
 age = age+1;
}

function changeClass()
{
  image = !image
}

</script>

<h1>test for {uppercaseName}, my age is {age} </h1>
<input type="text" bind:value={name}/><br>
<button on:click="{increment}">increment age</button> <br>


<h1>change style</h1>
<button on:click="{changeClass}">change class</button> 
<!-- <div class="{value?'thunmb' : 'thunmb thunmb-placeholder'}"> -->
  <div class:thunmb-placeholder={!image}>
<p>test text</p>
</div>


<style>
  button{
   margin-top:1rem;
  }

  .thunmb {
    width: 33%;
    height:100%;
    padding: 1rem;
    margin-top: 1rem;
  }

  .thunmb-placeholder {
      background-color: grey;
  }

</style>