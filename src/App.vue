<script setup>
import Header from "@/components/Header.vue"
import AdsBanner from "@/components/AdsBanner.vue"

</script>

<template>
  <Header />

  <div class="body-container">
    <AdsBanner />

    <RouterView />

  </div>
</template>
<style scoped>
div.body-container {
  padding: 50px;
  padding-top: 10px !important;
}
</style>

