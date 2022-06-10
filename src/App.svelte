<script>
	import Greetings from './components/greetings.svelte';

	export let name;

	let age = 22;

	const incrementAge = () => {
		age += 1;
	}
</script>

<main>
	<h1>Hello {name}, my age is {age}</h1>
	<button on:click={incrementAge}>Increment age</button>
	<hr>
	Greetings html: <br />
	<Greetings name={name}>You're welcome!</Greetings>
</main>
