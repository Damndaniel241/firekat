<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { allTopicsSchema, ScienceSchema } from "@/schemas/schemas";
import { useRoute, useRouter } from "vue-router";
import { goToNewPost } from "@/utils/linktopost";
import { useAuth } from "@/composables/useAuth";
import { GeneralTopicSchema } from "@/schemas/schemas";
import { formatPostedAt } from "@/utils/Dateutils";

const router = useRouter();
const topics = ref<allTopicsSchema | []>([]);
const { isLoggedIn } = useAuth();


async function getTopics() {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/subjects/3/topics/"
    );
    console.log(response.data);
    topics.value = response.data;
  } catch (error) {
    console.error("Error retrieving subjects", error);
  }
}

onMounted(() => {
getTopics();
});
</script>


<template>
    <Ads />
  <button
    v-if="isLoggedIn"
    class="hover:underline text-[#181882] font-medium"
    @click="goToNewPost(router, null, 3)"
  >
    (create new topic)
  </button>
  <RouterLink
    :to="{ name: 'Login' }"
    class="hover:underline text-[#181882] font-medium place-self-center"
    v-else
    >(create new topic)</RouterLink
  >

  <div
    class="rounded-lg flex flex-col first:border-t-0 last:rounded-b-lg shadow-lg last:border-b-0 bg-[#F6F6EC] border border-gray-300 w-[70em] place-self-center"
  v-if="topics.length>0"
    >
  <div
      class="odd:bg-[#e8ece0] flex flex-col justify-center items-center border border-gray-300 p-2"
      v-for="topic in topics"
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
  <Ads />
</template>