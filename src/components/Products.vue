<script setup>
import { useCartStore } from '../stores/cart';
import ProductItem from './ProductItem.vue';
import ProductSkeleton from './ProductSkeleton.vue';
const cartStore = useCartStore()


</script>
<template>
  <div class="grid grid-cols-4 gap-4" v-if="cartStore.isFetching == false">

    <ProductItem v-for="(product, index) in cartStore.products" :key="index" :product-price="product.price"
      :product-image="product.image" :product-name="product.name" @add-to-cart="cartStore.addToCart(product)" />

  </div>

  <div class="grid grid-cols-4 gap-4" v-else>

    <ProductSkeleton />
    <ProductSkeleton />
    <ProductSkeleton />
    <ProductSkeleton />

  </div>
</template>
