<script setup lang="ts">
import axios from "axios";
import { onMounted,ref } from "vue";
import { ScienceSchema } from "@/schemas/schemas";

const subjects = ref<ScienceSchema | []>([]);




async function getSubjects(){
  try{
    const response = await axios.get("http://127.0.0.1:8000/api/faculties/2/subjects/");
    console.log(response.data)
    subjects.value = response.data
    return response.data
  }catch(error){
    console.error("Error retrieving subjects",error);
  }
}


getSubjects();
console.log(subjects)

function capitalize(name:string) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

</script>

<template>
    <Ads />
    <div
      class="rounded-lg flex flex-col first:border-t-0 last:rounded-b-lg shadow-lg last:border-b-0 bg-[#F6F6EC] border border-gray-300 w-[70em] place-self-center"
    >
    <div class="odd:bg-[#e8ece0] flex justify-center  border border-gray-300  p-2" v-for="subject in subjects" :key="subject.id">
     <RouterLink :to="{name:capitalize(subject.name)}"  class="font-bold text-[#181882] hover:underline">{{ subject.name }} </RouterLink>: {{ subject.description }} (200) topics
    </div>
    <!-- :to="{name:`${subject.name}`}" -->
</div>
<Ads/>
</template>