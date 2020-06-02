<script>
  export let name;
  export let url = "";
  import PG from "./PG.svelte";
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
    <h1>UTBK SBMPTN - Data Analytic</h1>
    <span class="menu">
      <Link to="/passinggrade">Data Passing Grade</Link>
      |
      <Link to="/Jurusan">Jurusan Favorit</Link>
      |
	  <Link to="/Jurusan">Kampus Favorit</Link>
      |
      <Link to="/BOW">Disclaimer</Link>
    </span>

    <div class="content">
      <Route path="/passinggrade" component={PG}>
        <PG />
      </Route>
      <Route path="/" component={PG}>
        <PG />
      </Route>
    </div>
  </main>
</Router>
