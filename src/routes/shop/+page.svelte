<script lang="ts">
  export let data
  const { products } = data
</script>

<h1>Welcome to the Shop!</h1>
<p>Here's our inventory:</p>
<ul>
  {#each products as product}
    <li>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </li>
  {/each}
</ul>