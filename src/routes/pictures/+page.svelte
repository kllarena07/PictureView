<script lang="ts">
	import ImgPortrait from '../../lib/ImgPortrait.svelte';

  export let data
  const { pictures } = data
</script>

<h1>Welcome to the Pictures Page!</h1>
<p>You can look at some nice pictures on this page, enjoy :)</p>

<section>
  {#each pictures as picture}
    <ImgPortrait img_src={picture.urls.full} />
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 400px 400px 400px;
    gap: 70px;
  }
</style>