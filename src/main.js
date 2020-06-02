import App from './App.svelte';
// import '../node_modules/tabulator-tables/dist/css/tabulator.css';
import '../node_modules/tabulator-tables/dist/css/semantic-ui/tabulator_semantic-ui.css';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;