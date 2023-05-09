<script setup>
import Header from "@/components/Header.vue"
import AdsBanner from "@/components/AdsBanner.vue"

</script>

<template>
  <Header />

  <div class="container">
    <AdsBanner />

    <RouterView />

  </div>
</template>
<style scoped>
.container {
  padding: 50px;
  padding-top: 0px !important;
}
</style>

