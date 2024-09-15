<script setup lang="ts">
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { useUser } from "@/composables/useUser";
import { onMounted, ref } from "vue";
import { TopicSchema } from "@/schemas/schemas";
const route = useRoute();
const router = useRouter();
const userData = localStorage.getItem("user");
const topicData = ref<TopicSchema | null>(null);
const topicID = route.query.topic;

const title = ref("");
const content = ref("");


async function getComment() {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/topics/${topicID}`
    );
    console.log(response.data);

    topicData.value = response.data;
    // content.value = topicData.value?.content;
    title.value = topicData.value?.title || "";
    content.value = topicData.value?.content || "";

    return response.data;
  } catch (error) {
    console.error("couldn't load comment", error);
  }
}

onMounted(()=>{
getComment();
});



async function postEditToTopic(){
    const currentDateTime = new Date().toISOString();
    const editCommentData = {
        title:title.value,
        content:content.value,
        posted_at:currentDateTime,
    }
    try{
        if (!userData) {
      throw new Error("No user data found in localStorage.");
    }
    const token = JSON.parse(userData).token;
        const response = await axios.patch(`http://127.0.0.1:8000/api/topics/${topicID}/`,editCommentData,{
            headers:{
                Authorization:`Token ${token}`,
            },
        }
        );
        router.go(-1);
    }catch(error){
        console.error("error posting edit",error);
    }
}

</script>


<template>
  <div class="place-self-center w-[70em] bg-[#E8ECE0] rounded-lg p-3">
    
<h1 class="font-bold">edit topic</h1>
<div class="flex flex-col">
    <label for="">title</label>
    <input type="text" v-model="title" class="rounded-xl">
    </div>

    <div class="flex flex-col">
        <label for="">content</label>
    <textarea v-model="content" type="text" class="rounded-xl w-[100%]">

    </textarea>
    </div>
    <button
      type="button"
      class="bg-white rounded-2xl p-2 mt-1 cursor-pointer"
      @click="postEditToTopic()"
    >
    edit topic
    </button>
</div>
</template>