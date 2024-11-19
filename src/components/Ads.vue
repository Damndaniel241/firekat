<script setup lang="ts">
// const naira = new URL('./assets/naira.png', import.meta.url).href
import naira from '@/assets/naira.png'

</script>

<template>
    <div class="flex justify-center items-center ">
    <div class="flex gap-2 justify-between lg:flex-row  md:justify-center md:flex-wrap">
        <img :src="naira" class="rounded-lg shadow-lg border border-gray-300 "/>
        <img :src="naira" class="rounded-lg shadow-lg border border-gray-300 hidden md:block"/>
        <img :src="naira" class="rounded-lg shadow-lg border border-gray-300 hidden md:block"/>
    </div>
</div>
</template>