<script setup lang="ts">
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { useUser } from "@/composables/useUser";
import { onMounted, ref } from "vue";
import { CommentSchema } from "@/schemas/schemas";

const { userInfo } = useUser();
const userData = localStorage.getItem("user");
const route = useRoute();
const router = useRouter();


const commentData = ref<CommentSchema | null>(null);
const content = ref("");
const topicID = route.query.topic;
const commentID = route.query.post;

async function getComment() {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${commentID}`
    );
    console.log(response.data);

    commentData.value = response.data;
    // content.value = commentData.value?.content;
    content.value = commentData.value?.content || "";
    return response.data;
  } catch (error) {
    console.error("couldn't load comment", error);
  }
}

onMounted(() => {
  getComment();
});

async function postEditToComment(){
    const currentDateTime = new Date().toISOString();
    const editCommentData = {
        content:content.value,
        posted_at:currentDateTime,
    }
    try{
        if (!userData) {
      throw new Error("No user data found in localStorage.");
    }
    const token = JSON.parse(userData).token;
        const response = await axios.patch(`http://127.0.0.1:8000/api/comments/${commentID}/`,editCommentData,{
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
    <!-- <h1>topicID = {{ topicID }}</h1>
<h1>commentID = {{ commentID }}</h1> -->

<h1 class="font-bold">edit comment</h1>
    <textarea v-model="content" type="text" class="rounded-xl w-[100%] mt-2">

    </textarea>
    <button
      type="button"
      class="bg-white rounded-2xl p-2 mt-1 cursor-pointer"
      @click="postEditToComment()"
    >
    post 
    </button>
    
  </div>
</template>
