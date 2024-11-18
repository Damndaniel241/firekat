<script setup lang="ts">
import { useRoute,useRouter } from "vue-router";
import { useUser } from "@/composables/useUser";
import axios from "axios";
import { TopicSchema } from "@/schemas/schemas";
import { ref, watchEffect,computed } from "vue";

const { userInfo } = useUser();

const userData = localStorage.getItem("user");
const Topic = ref<TopicSchema | null>(null);
const topicData = ref<TopicSchema | null>(null);
const props = defineProps({
  topicId: String,
  commentId: String,
});
const route = useRoute();
const router = useRouter();



const topicUID = route.query.topic;
const commentUID = route.query.post;
// console.log(route.query.topic);  // 'topicId' from query
// console.log(route.query.post);   // 'commentId' from queryconst route = useRoute();

const user = ref(null);
const content = ref("");
const selectedFiles = ref<File[]>([]);
const imageUrl = ref<string | null>(null);
const formErrors = ref<{ title?: string }>({});


function validateForm(){
  // formErrors.value = {};

  if(!content.value.trim()){
    formErrors.value.title = "content is required";
    return false;
  }
  return true;
}


const imageUrls = computed(() => 
  selectedFiles.value.map(file => URL.createObjectURL(file))
);

// getting topic data to access particular comments under topic
async function getTopicData() {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/topics/${topicUID}/comments/${commentUID}/`
    );
    Topic.value = response.data;
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(error);
  } finally {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/topics/${topicUID}`
    );
    console.log(response.data);
    topicData.value = response.data;
    return response.data;
  }
}

// getting topics data to access topic contents
async function getTopicDataForTopic() {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/topics/${topicUID}`
    );
    console.log(response.data);
    topicData.value = response.data;
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

getTopicData();

// getTopicDataForTopic();

async function postReplyToTopic() {

  if (!validateForm()){
    return;
  }
  const currentDateTime = new Date().toISOString();

//   if (userInfo.value?.id) return;
  const commentData = {
    user: userInfo.value?.id,
    content: content.value,
    posted_at: currentDateTime,
    topic: topicUID,
    quoted_comment: null,
    quoted_topic: topicUID,
  };
  try {
    if (!userData) {
      throw new Error("No user data found in localStorage.");
    }
    const token = JSON.parse(userData).token;
    const response = await axios.post(
      "http://127.0.0.1:8000/api/comments/",
      commentData,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    router.go(-1);
  } catch (error) {
    console.error(error);
  }
}

async function postReplyToComment() {

  if (!validateForm()){
    return;
  }
  const currentDateTime = new Date().toISOString();

  const commentData = {
    user: userInfo.value?.id,
    content: content.value,
    posted_at: currentDateTime,
    topic: topicUID,
    quoted_comment: commentUID,
    quoted_topic: null,
  };
  try {
    if (!userData) {
      throw new Error("No user data found in localStorage.");
    }
    const token = JSON.parse(userData).token;
    const response = await axios.post(
      "http://127.0.0.1:8000/api/comments/",
      commentData,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    router.go(-1);
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div class="place-self-center md:w-[70em] w-[95%] bg-[#E8ECE0] rounded-lg p-3">
    <div v-if="Topic && Topic.content">
    <!-- <p class="text-[#181882] font-bold">{{ Topic.author.username }}:</p> -->
      {{ Topic?.content }}
    </div>
    <div v-else-if="topicData && topicData.content">
      {{ topicData?.content }}
    </div>
    <textarea
      cols="10"
      v-model="content"
      class="rounded-xl w-[100%] mt-2"
    ></textarea>
    <div class="text-red-500" v-if="formErrors">{{ formErrors.title }}</div>
    <button
      type="button"
      v-if="Topic && Topic.content"
      @click="postReplyToComment"
      class="bg-white rounded-2xl p-2 mt-1 cursor-pointer"
    >
      reply
    </button>
    <button
      type="button"
      v-else-if="topicData && topicData.content"
      @click="postReplyToTopic"
      class="bg-white rounded-2xl p-2 mt-1 cursor-pointer"
    >
      reply 
  </button>
  </div>
  <!-- <p>Topic ID: {{ topicId }}</p>
    <p>Comment ID: {{ commentId }}</p> -->
  <!-- <h1>hey God</h1> -->
</template>


<!-- PATCH /api/comments/{comment_id}/ -->