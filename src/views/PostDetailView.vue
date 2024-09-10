<script setup lang="ts">
import HeaderView from "./HeaderView.vue";
import Ads from "@/components/Ads.vue";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import postpic from "@/assets/files.png";
import FooterView from "./FooterView.vue";
import { contents } from "@/Fakedb";
import axios from "axios";
import { TopicSchema, TopicscommentSchema } from "@/schemas/schemas";

const topicData = ref<TopicSchema | null>(null);
const commentsList = ref<TopicscommentSchema | []>([]);

const route = useRoute();
const router = useRouter();
// interface Content {
//       title: string;
//       description: string;
//       images: string;
//       id: string;
//     }

const topicId = computed(() => route.params?.topicId as string);
console.log(topicId);
async function getTopicData() {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/topics/${topicId.value}`
    );
    console.log(response.data);
    topicData.value = response.data;
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getComments() {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/topics/${topicId.value}/comments/`
    );
    console.log(response.data);
    commentsList.value = response.data;
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

getTopicData();
getComments();

console.log(topicData);

function formatPostedAt(datetime: string) {
  const date = new Date(datetime);
  // const options = { hour: '2-digit', minute: '2-digit', hour12: true };
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const time = date.toLocaleTimeString("en-US", options);
  const day = date.toLocaleString("en-US", { month: "short", day: "2-digit" });
  return `${time.toLowerCase()} On ${day}`;
}

// const data = computed(()=>contents.filter((value)=>postId.value===value.id))

// console.log(data);

// const postId = route.params.postId
</script>

<template>
  <Ads />
  <div
    class="flex flex-col rounded-lg border border-gray-300 shadow-lg w-[70em] place-self-center"
  >
    <div class="bg-[#E8ECE0] p-2 border-b-gray-300 border-b rounded-t-lg">
      <RouterLink
        :to="{ name: 'PostDetail', params: { topicId: topicId } }"
        class="text-[#181882] font-bold"
        v-if="topicData"
      >
        <!-- {{data[0]?.title}} -->
        {{ topicData?.title }}
      </RouterLink>
      by
      <RouterLink to="" class="text-[#551818] font-bold">
        {{ topicData?.author.username }} </RouterLink
      >:
      <span class="text-[#555518] font-semibold">{{
        formatPostedAt(topicData?.posted_at ?? '')
      }}</span>
    </div>
    <div class="bg-[#F6F6EC] rounded-lg p-1">
      <!-- <img :src="postpic" alt="postpic" class="w-[400px] h-[400px] p-4" /> -->
      <p>
        {{ topicData?.content }}
      </p>
      <p></p>
    </div>
  </div>
  <div
    class="flex flex-col rounded-lg border border-gray-300 shadow-lg w-[70em] place-self-center"
    v-for="comment in commentsList"
  >
    <div class="bg-[#E8ECE0] p-2 border-b-gray-300 border-b border-t-rounded-lg">
      <RouterLink to="" class="text-[#181882] font-bold">
        RE: {{ topicData?.title }} by
        <RouterLink to="" class="text-[#551818] font-bold">
          {{ comment.user.username }} 
        </RouterLink>: 
        <span class="text-[#555518] font-semibold">{{
          formatPostedAt(comment?.posted_at)
        }}</span>
      </RouterLink>
    </div>
    <div class="bg-[#F6F6EC] p-1">
      <!-- <img :src="postpic" alt="postpic" class="w-[400px] h-[400px] p-4" /> -->
      <p>
        {{ comment?.content }}
      </p>
    </div>
  </div>
  <div></div>

  <Ads />
</template>
