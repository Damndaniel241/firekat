<script setup lang="ts">
import Ads from "@/components/Ads.vue";
import { onBeforeMount, onMounted, ref } from "vue";
import axios, { Axios } from "axios";
import { useRoute, useRouter } from "vue-router";
import { formatPostedAt } from "@/utils/Dateutils";
import { CommentSchema, TopicSchema,TopicscommentSchema } from "@/schemas/schemas";

const route = useRoute();
const filteredPosts = ref<[TopicSchema]|CommentSchema|[TopicscommentSchema]|[]>([]);

const searchQuery = route.query.q;

console.log(searchQuery);

async function getSearchQuery() {
  //   const searchForm = {
  //     query: searchQuery,
  //   };

  try {
    const response = await axios.get("http://127.0.0.1:8000/api/search/all/", {
      params: {
        query: searchQuery, // Pass query parameter here
      },
    });
    console.log(response.data);

    filteredPosts.value = response.data;
  } catch (error) {
    console.error("error retrieving search data");
  }
}

getSearchQuery();


const getStyledContent = (content:string) => {
      const parts = content.split(searchQuery);
      const styledParts:[] = [];

      parts.forEach((part, index) => {
        styledParts.push({ text: part, isHighlighted: false });
        if (index < parts.length - 1) {
          styledParts.push({ text: searchQuery, isHighlighted: true });
        }
      });

      return styledParts;
    };
</script>

<template>
  <!-- <div
      class="rounded-lg flex flex-col first:border-t-0 last:rounded-b-lg shadow-lg last:border-b-0 bg-[#F6F6EC] border border-gray-300 lg:w-[70em] md:w-[99%] mx-1.5  place-self-center"
    >
    <div>frffgjgfgherigtg</div>
    <div>coming</div>
    </div> -->
  <Ads />
  <div
    v-for="post in filteredPosts"
    :key="post?.id"
    class="flex flex-col rounded-lg border border-gray-300 shadow-lg md:w-[99%] lg:w-[70em] place-self-center mx-1.5"
  >
    <div
      class="bg-[#E8ECE0] p-2 border-b-gray-300 border-b border-t-rounded-lg"
      v-if="post?.slug"
    >
    <RouterLink to="" class="text-[#181882] font-bold hover:underline">
     {{ post?.title }}
      </RouterLink>
      by
      <RouterLink
        :to="{ name: 'User', params: { username: post.author?.username } }"
        class="text-[#551818] font-bold hover:underline"
      >
        {{ post.author.username }} </RouterLink
      >:
      <span class="text-[#555518] font-semibold">{{
        formatPostedAt(post?.posted_at)
      }}</span>
  

    <div class="bg-[#F6F6EC] p-1">
      <!-- <img :src="postpic" alt="postpic" class="w-[400px] h-[400px] p-4" /> -->
       
      <p >
        <!-- {{ post?.content }} -->
        <span v-for="(part, index) in getStyledContent(post?.content)" :key="index">
          <span
            v-if="part.isHighlighted"
            class="bg-[#FFFF00] font-bold text-black"
          >
            {{ part.text }}
          </span>
          <span v-else>{{ part.text }}</span>
        </span>
      </p>
      </div>

    </div>


    <div
      class="bg-[#E8ECE0] p-2 border-b-gray-300 border-b border-t-rounded-lg"
      v-else
    >
    <RouterLink to="" class="text-[#181882] font-bold hover:underline">
        RE: {{ post.topic?.title }}
      </RouterLink>
      by
      <RouterLink
        :to="{ name: 'User', params: { username: post.user?.username } }"
        class="text-[#551818] font-bold hover:underline"
      >
        {{ post.user.username }} </RouterLink
      >:
      <span class="text-[#555518] font-semibold">{{
        formatPostedAt(post?.posted_at)
      }}</span>

<div class="bg-[#F6F6EC] p-1">
      <!-- <img :src="postpic" alt="postpic" class="w-[400px] h-[400px] p-4" /> -->
       <p v-if="post.quoted_comment" class="bg-[#E8ECE0] rounded-lg p-1">
      <p>  <RouterLink :to="{name:'User',params:{username:post.quoted_comment.user.username}}" class="text-[#181882] font-bold hover:underline">{{ post.quoted_comment.user.username  }}:</RouterLink
          ></p>
        {{ post.quoted_comment?.content }} </p>
      <p>
        <!-- {{ post?.content }} -->
          <span v-for="(part, index) in getStyledContent(post?.content)" :key="index">
          <span
            v-if="part.isHighlighted"
            class="bg-yellow-200 font-bold text-black"
          >
            {{ part.text }}
          </span>
          <span v-else>{{ part.text }}</span>
        </span>
      </p>
      
</div>
</div>


  </div>
  <Ads />
</template>
