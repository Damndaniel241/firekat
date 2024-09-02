<script setup lang="ts">
import axios from "axios";
import { onMounted,ref } from "vue";

// import {sections} from "@/Topicsdb.ts";

import { Generalschema,GeneralTopicSchema } from "@/schemas/schemas";


const subjects = ref<Generalschema | []>([]);
const generalTopics = ref<GeneralTopicSchema | []>([]);

async function getSubjects(){
  try{
    const response = await axios.get("http://127.0.0.1:8000/api/faculties/1/subjects/");
    console.log(response.data);
    subjects.value = response.data;
    return response.data;
  }catch(error){
    console.error("Error retrieving subjects",error);
  }
}

getSubjects();
console.log(subjects);

async function getGeneralTopics(){
  try{
    const response = await axios.get("http://localhost:8000/api/faculties/1/topics/");
    console.log(response.data);
    generalTopics.value = response.data;
  }catch(error){
    console.error("Error retrieving subjects",error);
  }
}


getGeneralTopics();
console.log(generalTopics)


function capitalize(name:string) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}


function formatPostedAt(datetime:string) {
      const date = new Date(datetime);
      // const options = { hour: '2-digit', minute: '2-digit', hour12: true };
      const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
      const time = date.toLocaleTimeString('en-US', options);
      const day = date.toLocaleString('en-US', { month: 'short', day: '2-digit' });
      return `${time.toLowerCase()} On ${day}`;

}
</script>

<template>
  
   
  <div class="text-center text-3xl font-bold">
    Firekat/General - Firekat
  </div>
  <div class="flex gap-1 place-self-center text-lg font-medium">
    <RouterLink  class="hover:underline text-[#181882]" :to="{name:'Index'}">Firekat forum</RouterLink>/
    <RouterLink  class="hover:underline text-[#181882]" :to="{name:'General'}">Firekat </RouterLink>
  </div>
   
    <div
      class="rounded-lg flex flex-col first:border-t-0 last:rounded-b-lg shadow-lg last:border-b-0 bg-[#F6F6EC] border border-gray-300 w-[70em] place-self-center"
    >
    <div class="odd:bg-[#e8ece0] flex justify-center  border border-gray-300  p-2" v-for="subject in subjects" :key="subject.id">
     <RouterLink :to="{name:capitalize(subject.name)}"  class="font-bold text-[#181882] hover:underline">{{ subject.name }} </RouterLink>: {{ subject.description }} (200) topics
    </div>
    
  
</div>
<Ads />
    <div class="odd:bg-[#e8ece0] flex justify-center  border border-gray-300  p-2" v-for="topic in generalTopics" :key="topic.id">
     <RouterLink to=""  class="font-bold text-[#181882] hover:underline">{{topic.title }} {{ formatPostedAt(topic.posted_at) }}</RouterLink>: 
    </div>
    
<Ads />

</template>
