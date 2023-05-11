<script setup>
import Products from "@/components/Products.vue"
import { useCartStore } from "../stores/cart";
import { onMounted } from "vue";

const cartStore = useCartStore()

onMounted(() => {
  cartStore.getAllProducts()
})

</script>

<template>
  <main>

    <h2 class="text-lg font-medium py-12">Recommended</h2>
    <Products />

  </main>
</template>
