<script setup lang="ts">
    import Ads from '@/components/Ads.vue';
    import HeaderView from './HeaderView.vue';
    import FooterView from './FooterView.vue';
</script>

<template>
    <div class="h-full">
        <HeaderView/>
        <Ads/>
        <div class="rounded-lg flex flex-col justify-center items-center">
            
        </div>
        <FooterView/>
    </div>

</template>