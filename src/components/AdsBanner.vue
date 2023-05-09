<script setup>
import adsImage from "@images/banner.jpg"

</script>
<template>
    <div class="ads-container w-full flex justify-center">
        <img :src="adsImage" />
    </div>
</template>

<style scoped>
.ads-container {
    background-color: #e8d3d2;
}

.ads-container img {
    width: 50%;
}
</style>