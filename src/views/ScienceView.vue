<script setup lang="ts">
import axios from "axios";
import { onMounted,ref } from "vue";
import { ScienceSchema } from "@/schemas/schemas";
import { useRoute,useRouter } from "vue-router";
import { goToNewPost } from "@/utils/linktopost";
import { useAuth } from "@/composables/useAuth";
import { GeneralTopicSchema } from "@/schemas/schemas";
import { formatPostedAt } from "@/utils/Dateutils";

const subjects = ref<ScienceSchema | []>([]);
const scienceTopics = ref<GeneralTopicSchema|[]>([]);
const router = useRouter();
const {isLoggedIn} = useAuth();


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


async function getScienceTopics() {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/faculties/2/topics/"
    );
    console.log(response.data);
  scienceTopics.value = response.data;
  } catch (error) {
    console.error("Error retrieving subjects", error);
  }
}

onMounted(() => {
getSubjects();
getScienceTopics();
});

console.log(subjects)

function capitalize(name:string) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function goToNewTopic(facultyId:number) {
  router.push({ 
    path: '/-/new-topic', 
    query: { faculty: facultyId }
  });
}

</script>

<template>
    <Ads />
    <div
      class="rounded-lg flex flex-col first:border-t-0 last:rounded-b-lg shadow-lg last:border-b-0 bg-[#F6F6EC] border border-gray-300 md:w-[70em] place-self-center mx-1.5"
    >
    <div class="odd:bg-[#e8ece0] md:flex md:justify-center text-center  border border-gray-300  p-2" v-for="subject in subjects" :key="subject.id">
     <RouterLink :to="{name:capitalize(subject.name)}"  class="font-bold text-[#181882] hover:underline">{{ subject.name }} </RouterLink>: {{ subject.description }} (200) topics
    </div>
</div>

    <button v-if="isLoggedIn" class="hover:underline text-[#181882] font-medium" @click="goToNewPost(router,2,null)" >(create new topic)</button>
    
    <div
    class="rounded-lg flex flex-col first:border-t-0 last:rounded-b-lg shadow-lg last:border-b-0 bg-[#F6F6EC] border border-gray-300 md:w-[70em] w-[95%] place-self-center "
  v-if="scienceTopics.length>0"
    >
 
    <div
      class="odd:bg-[#e8ece0] flex flex-col justify-center items-center border border-gray-300 p-2"
      v-for="topic in scienceTopics"
      :key="topic.id"
    >
      <RouterLink :to="{name:'PostDetail',params:{topicId:topic.id,topicSlug:topic.slug}}" class="font-bold text-[#181882] hover:underline"
        >{{ topic?.title }}</RouterLink
      >
      <div class="text-sm text-[#555518]">
        by
        <RouterLink class="hover:underline text-[#551818] font-bold" to="">{{
          topic.author.username
        }}</RouterLink>.
        <span class="font-bold"> {{ topic.comment_count }} </span> posts <span class="font-bold"> {{ formatPostedAt(topic.posted_at) }}</span>
      </div>
    </div>
  </div>

<Ads/>
</template>