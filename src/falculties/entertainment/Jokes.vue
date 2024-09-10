<script setup lang="ts">
import {ref,onMounted,computed,onUpdated,onUnmounted, onBeforeMount} from 'vue';

const counter = ref(0);

onMounted(() => {
      alert('Component is mounted');
    });

    onUpdated(() => {
      console.log('Component is updated');
    });


      // onUnmounted Hook: Executes logic before component is unmounted
      onUnmounted(() => {
      console.log('Component is unmounted');
    });
    // onBeforeMount(() => {
    // //   console.log('Component is unmounted');
    // alert("component is about to be mounted");
    // });

    const increment = () =>{
        counter.value = counter.value+1
    }

    const decrement = () =>{
        counter.value = counter.value-1
    }
</script>


<template>
    <h1>this is a boy</h1>

    <h2>counter  = {{ counter }}</h2>
    <div class="flex gap-1">
    <button type="button" class="bg-black text-white p-2" @click="increment">increase</button>
    <button type="button" class="bg-black text-white p-2" @click="decrement">decrease</button>
</div>
</template>