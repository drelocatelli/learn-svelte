<script>
    import {count, increment, decrement} from '../store.ts';
    export let name;

    let countValue;
    count.subscribe(value => {
        countValue = value;
    });

</script>

<div>
    Ola, {name} <slot />
    <br><br>
    Count: <br>
    <button on:click={decrement}>-</button> 
    {countValue}
    <button on:click={increment}>+</button> 

</div>