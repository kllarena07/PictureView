<nav>
  <p>Welcome</p>
  <ul>
    <li><a href='/'>Home</a></li>
    <li><a href='shop'>Shop</a></li>
    <li><a href='pictures'>Pictures</a></li>
  </ul>
</nav>
<main>
  <slot />
</main>

<style>
  nav {
    display: flex;
    margin: 0;
    height: 64px;
    background: linear-gradient(45deg, rgb(33, 0, 79), rgb(106, 0, 255));
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  }
  nav * {
    color: white;
    text-decoration: none;
  }
  li {
    display: inline;
    padding: 0 1rem;
  }
  main {
    padding: 2rem;
  }
  a {
    transition: border-bottom 400ms ease;
  }
  a:hover {
    border-bottom: 1px solid white;
  }
</style>