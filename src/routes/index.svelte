<style lang="scss">
  h1,
  h2,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  h2 {
    font-size: 2.4em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  $rainbow-colors: violet, indigo, blue, green, yellow, orange, red;

  // thanks to https://codepen.io/cimmanon/pen/yoCDG for the inspiration!
  .rainbow-text {
    @for $i from 1 through length($rainbow-colors) {
      span:nth-child(#{length($rainbow-colors)}n + #{$i}) {
        color: nth($rainbow-colors, $i);
      }
    }
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 { font-size: 4em; }
    h2 { font-size: 3.2em;}
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<h2 class="rainbow-text">
  <span>W</span><span>i</span><span>t</span><span>h</span>&nbsp;<span>S</span><span>A</span><span>S</span><span>S</span><span>!</span>
</h2>

<figure>
  <img alt="Success Kid" src="successkid.jpg" />
  <figcaption>Have fun with Sapper and SASS!</figcaption>
</figure>

<p>
  <strong>
    Try editing this file (src/routes/index.svelte) to test live reloading.
  </strong>
</p>
