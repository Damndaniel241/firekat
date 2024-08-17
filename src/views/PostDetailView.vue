<script setup lang="ts">
import HeaderView from "./HeaderView.vue";
import Ads from "@/components/Ads.vue";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import postpic from "@/assets/files.png";
import FooterView from "./FooterView.vue";
import { contents } from "@/Fakedb";
// import { Content } from "@/Fakedb.d.ts";


interface Content {
      title: string;
      description: string;
      images: string;
      id: string;
    }
  
const route = useRoute();
const router = useRouter(); 

const postId = computed(() => route.params?.postId);
const data = computed(()=>contents.filter((value)=>postId.value===value.id))

console.log(data);

// const postId = route.params.postId
</script>

<template>
  <div class="flex flex-col h-full justify-between my-3 gap-4">
    <HeaderView />
    <Ads />
    <div
      class="flex flex-col rounded-lg border border-gray-300 shadow-lg w-[70em] place-self-center"
    >
      <div class="bg-[#E8ECE0] p-2 border-b-gray-300 border-b rounded-t-lg">
        <RouterLink
          :to="{ name: 'PostDetail', params: { postId: postId } }"
          class="text-[#181882] font-bold"
          v-if="data"
        >
          {{data[0]?.title}}
        </RouterLink>
        by
        <RouterLink to="" class="text-[#551818] font-bold"
          >Robin-hood</RouterLink
        >:
        <span class="text-[#555518] font-semibold">3:45pm</span>
      </div>
      <div class="bg-[#F6F6EC] rounded-lg">
        <img :src="postpic" alt="postpic" class="w-[400px] h-[400px] p-4" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          atque, odio impedit debitis architecto aut vel odit, ab cupiditate a
          natus libero quisquam, possimus culpa fugiat incidunt non
          reprehenderit. Laudantium.
        </p>
      </div>
    </div>
    <Ads />
    <FooterView />
  </div>
</template>
