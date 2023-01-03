<script lang="ts">
	import ImgPortrait from '../../lib/Portrait.svelte';

  export let data
  const { pictures } = data

  let applied_filter = ''
</script>

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
  {#each pictures as picture}
    <ImgPortrait img_src={picture.urls.full} filter={applied_filter} />
  {/each}
</section>
<section id="disclaimer-container">
  <p id="disclaimer">It doesn't look like you have any {applied_filter} pictures, go ahead and add some!</p>
  <p id="disclaimer-hint">Hint: go ahead and like, dislike, or favorite some photos</p>
</section>

<style>
  #portrait-container {
    display: flex;
    width: 100%;
    margin-top: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
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