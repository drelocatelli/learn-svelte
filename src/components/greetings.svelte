<script>
    import store from '../store.ts';
    export let name;

    function decrement() {
		store.dispatch({ type:'DECREMENT' });
	}
	function increment() {
		store.dispatch({ type:'INCREMENT' });
	}

</script>

<div>
    Ola, {name} <slot />
    <br><br>
    Count: <br>
    <button on:click={decrement}>-</button> 
    {store}
    <button on:click={increment}>+</button> 

</div>