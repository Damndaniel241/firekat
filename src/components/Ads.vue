<script setup lang="ts">
// const naira = new URL('./assets/naira.png', import.meta.url).href
import naira from '@/assets/naira.png'

</script>

<template>
    <div class="flex justify-center items-center">
    <div class="flex gap-2 justify-between">
        <img :src="naira" class="rounded-lg shadow-lg border border-gray-300"/>
        <img :src="naira" class="rounded-lg shadow-lg border border-gray-300"/>
        <img :src="naira" class="rounded-lg shadow-lg border border-gray-300"/>
    </div>
</div>
</template>