<script setup>
import { useCartStore } from '../stores/cart';
import ProductItem from './ProductItem.vue';
const cartStore = useCartStore()


</script>
<template>
  <div class="grid grid-cols-4 gap-4">

    <ProductItem v-for="(product, index) in cartStore.products" :key="index" :product-price="product.price"
      :product-image="product.url" :product-name="product.name" @add-to-cart="cartStore.addToCart(product)" />


  </div>
</template>
