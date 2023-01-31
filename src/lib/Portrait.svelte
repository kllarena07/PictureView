<script lang="ts">
  export let img_src : string

  let liked = false
  let disliked = false
  let favorited = false

  const handleLike = () => {
    disliked = false
    liked = !liked
  }
  const handleDislike = () => {
    liked = false
    disliked = !disliked
  }
  const handleFavorite = () => {
    favorited = !favorited
  }
</script>

<article class="portrait">
  <div class="img-wrapper" style="background-image: url({img_src})" />
  <div class="preferences">
    <button class="like" on:click={handleLike}>
      <svg class:selected={liked} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="{liked ? "rgb(0, 105, 180)" : "black"}">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
      </svg>
    </button>
    <button class="dislike" on:click={handleDislike}>
      <svg class:selected={disliked} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="{disliked ? "rgb(0, 105, 180)" : "black"}">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
      </svg>
    </button>
    <button class="favorite" on:click={handleFavorite}>
      <svg class="{favorited ? "selected" : "deselected"}" xmlns="http://www.w3.org/2000/svg" fill="{favorited ? "red" : "none"}" viewBox="0 0 24 24" stroke-width="1.5" stroke="{favorited ? "red" : "black"}">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>  
    </button>
  </div>
</article>

<style>
  .portrait {
    width: 400px;
    height: 457px;
    border-radius: 10px;
    box-shadow: 0px 0px 4px black;
    transition: box-shadow 100ms ease;
  }
  .portrait:hover {
    box-shadow: 0px 0px 10px black;
    transition: box-shadow 150ms ease;
  }
  .img-wrapper {
    width: 400px;
    height: 400px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 60%;
  }
  .preferences {
    width: 400px;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    width: 25px;
    height: 25px;
    margin: 0 1rem;
    padding: 0;
    background-color: transparent;
    border: none;
  }
  path {
    width: 25px;
    height: 25px;
  }
  @keyframes grow {
    0% {
      transform: scale(0.6);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);;
    }
  }
  .selected {
    animation: grow 300ms ease;
  }
  @keyframes shudder {
    0% {
      transform: rotate(-10deg);
    }
    25% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(-5deg);
    }
    75% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  button:focus .deselected {
    animation: shudder 200ms linear;
  }
</style>