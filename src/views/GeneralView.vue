<script setup lang="ts">


import {sections} from "@/Topicsdb.ts";


// const TopicList:Section = sections;

console.log(sections)
</script>

<template>
  <!-- <div class="h-full flex flex-col justify-between my-3 gap-4"> -->
   
    <Ads />
    <div
      class="rounded-lg flex flex-col first:border-t-0 last:rounded-b-lg shadow-lg last:border-b-0 bg-[#F6F6EC] border border-gray-300 w-[70em] place-self-center"
    >
    <div class="odd:bg-[#e8ece0] flex justify-center  border border-gray-300  p-2" v-for="section in sections" :key="section.title">
     <RouterLink to="" class="font-bold text-[#181882]">{{ section.title }} </RouterLink>: {{ section.description }} ({{ section.no_of_topics }}) topics
    </div>

</div>
    
  <!-- </div> -->
</template>
