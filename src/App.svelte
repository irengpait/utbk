<script>
  export let url = "";
  import Major from "./Major.svelte";
  import University from "./University.svelte";
  import Disclaimer from "./Disclaimer.svelte";
  import { Router, Link, Route } from "svelte-routing";


</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 300;
  }

  .menu,
  .menu a,
  .menu a:visited {
    color: #291291;
    font-size: 1.2em;
    font-weight: 200;
  }

  .content {
    margin-top: 50px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<Router {url}>
  <main>
    <h1>UTBK SBMPTN 2019 - RECAP</h1>
    <span class="menu">
      <Link to="/jurusan">Jurusan</Link>
      |      
	  <Link to="/kampus">Kampus</Link>
      |
      <Link to="/disclaimer">Disclaimer</Link>
    </span>

    <div class="content">
      <Route path="/jurusan" component={Major}/>
      <Route path="/" component={Major}/>
      <Route path="/kampus" component={University}/>
      <Route path="/disclaimer" component={Disclaimer}/>
    </div>
  </main>
</Router>
