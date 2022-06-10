<script>
	import {Router, Route, Link} from 'svelte-navigator';
	import Home from './pages/index.svelte';
	import Test from './pages/test.svelte'
</script>

<Router>
	<nav>
		<Link to='/'>Home</Link>
		<Link to='/test'>Test</Link>
	</nav>

	<main>
		<Route path='/'><Home /></Route>
		<Route path='/test'><Test /></Route>
	</main>
</Router>

