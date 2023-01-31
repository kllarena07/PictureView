<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
import ImgPortrait from '$lib/Portrait.svelte';

  export let data
  const { pictures } = data

  let applied_filter = ''
</script>

<Navbar />
<main>
  <h1>Welcome to the Pictures Page!</h1>
  <p>You can look at some nice pictures on this page, enjoy :)</p>
  <label for="filter-select">Filter:</label>
  <select id="filter-select" bind:value={applied_filter}>
    <option value=""></option>
    <option value="liked">Liked</option>
    <option value="disliked">Disliked</option>
    <option value="favorited">Favorite</option>
  </select>
  
  <section id="portrait-container">
    <ul>
      {#each pictures as picture}
        <li>
          <ImgPortrait img_src={picture.urls.full} />
        </li>
      {/each}
    </ul>
  </section>
  <section id="disclaimer-container">
    <p id="disclaimer">It doesn't look like you have any {applied_filter} pictures, go ahead and add some!</p>
    <p id="disclaimer-hint">Hint: go ahead and like, dislike, or favorite some photos</p>
  </section>
</main>

<style>
  #portrait-container {
    margin-top: 2rem;
  }
  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    list-style: none;
  }
  #disclaimer-container {
    text-align: center;
    display: block;
  }
  #disclaimer {
    font-size: 1.5rem;
  }
  #disclaimer-hint {
    font-size: 1rem;
    font-style: italic;
  }
  #portrait-container:has(.portrait) + #disclaimer-container {
    display: none;
  }
</style>