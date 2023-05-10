<script setup>
import { defineProps } from 'vue';

defineProps({
    productImage: String,
    productName: String,
    productPrice: Number,

})

defineEmits('addToCart')

</script>
<template>
    <div class="bg-white ">
        <div class="img-container">
            <img id="pImage" :src="productImage">
        </div>
        <div class="flex justify-between p-2">
            <p> {{ productName }} </p>
            <p class="font-semibold">&#8369;{{ productPrice }}</p>
        </div>
        <button @click="$emit('addToCart')"
            class="p-2 bg-orange-600 text-white w-full active:bg-orange-800 hover:bg-orange-700">Add
            to
            cart</button>
    </div>
</template>