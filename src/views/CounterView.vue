<script setup>
import {useCounterStore} from "../stores/counter"

const counterStore = useCounterStore()


</script>

<template>
    <main>
        <h2>My Counter App</h2>
        <h1> {{ counterStore.count }} </h1>
        <hr>
        <p>Computed Property:</p>
        <h1> {{ counterStore.doubleCount }} </h1>

        <button @click="counterStore.increment" >+</button>
        <button @click="counterStore.decrement">-</button>
        <button @click="counterStore.timesTwo"> x2 </button>
    </main>
</template>

<style scoped>
button{
    margin-right: 10px;
}
</style>
