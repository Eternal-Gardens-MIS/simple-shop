<script setup>
import { ref } from "vue";
import brandLogo from "@images/ecom-brand-logo.png";

const cartTotal = ref(0)

</script>
<template>
    <div class="flex items-center px-10" id="header">
        <!-- left -->
        <div class="flex-auto pt-2 ">
            <img :src="brandLogo" class="w-32" />
        </div>
        <div class="flex-auto bg-blue-700"></div>

        <!-- right -->
        <div class="flex-auto flex items-center justify-between">
            <input type="text" placeholder="Search Product ..." class="w-3/4 bg-gray-100 p-3 rounded-lg focus:bg-gray-200
      focus:outline-none
      focus:shadow-sm
      ">

            <div class="flex align-top">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span v-if="cartTotal > 0"
                    class="badge bg-orange-500 p-1 text-blue-800 text-sm font-medium mr-2 rounded-full dark:bg-blue-900 dark:text-blue-300 w-6 h-6">{{
                        cartTotal }}</span>

            </div>

        </div>
    </div>
</template>

<style scoped>
#header {
    height: 80px;
}

.badge {
    margin-left: -10px;
}

.badge {
    padding: 0px !important;
    padding-left: 6px !important;
    padding-top: 2px !important;
}
</style>