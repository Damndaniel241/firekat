<script setup lang="ts">

import Ads from "@/components/Ads.vue";
import { contents } from "@/Fakedb.ts";
import { useAuth } from "@/composables/useAuth";
import { onBeforeMount,onMounted,ref } from "vue";
import axios from "axios";
import { allTopicsSchema } from "@/schemas/schemas";


const allTopics = ref<allTopicsSchema | []>([]);
  const { isLoggedIn } = useAuth();
  // rest of your code here

function slugify(str:string) {
  return str.toLowerCase()
    .replace(/[^a-z0-9\s]/gi, '') // Remove non-alphanumeric characters
    .replace(/\s+/g, '-'); // Replace spaces with hyphens
}

async function getallTopics() {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/topics/"
    );
    console.log(response.data);
    allTopics.value = response.data;
  } catch (error) {
    console.error("Error retrieving subjects", error);
  }
}


getallTopics();

// console.log(isLoggedIn.value);

console.log(contents);
</script>

<template>
  
    <div
      class="first:border-t-0 last:border-b-0 odd:bg-[#e8ece0] rounded-lg bg-[#F6F6EC] border border-gray-300 md:w-[70em] flex flex-col place-self-center sm:w-[90%] mx-1.5 "
    >
      <div
        class="odd:bg-[#e8ece0] border-b rounded-t-lg border-b-gray-300 flex justify-center sm:text-xl font-bold uppercase p-2 w-full text-lg"
      >
        Firekat nigerian forums
      </div>

      <div
        class="odd:bg-[#daf89f] p-2 font-bold border-gray-300 border place-content-start"
      >
        <RouterLink :to="{name:'General'}" class="text-[#181882] hover:underline"> Firekat/General: </RouterLink>
        <RouterLink :to="{name:'Politics'}" class="text-[#181882] hover:underline"> Politics, </RouterLink>
        <RouterLink :to="{name:'Crime'}" class="text-[#181882] hover:underline"> Crime, </RouterLink>
        <RouterLink :to="{name:'Romance'}" class="text-[#181882] hover:underline"> Romance, </RouterLink>
        <RouterLink :to="{name:'Jobs/vacancies'}" class="text-[#181882] hover:underline"> Jobs/Vacancies, </RouterLink>
        <RouterLink :to="{name:'Career'}" class="text-[#181882] hover:underline"> Career, </RouterLink>
        <RouterLink :to="{name:'Business'}" class="text-[#181882] hover:underline"> Business, </RouterLink>
        <RouterLink :to="{name:'Investment'}" class="text-[#181882] hover:underline"> Investment, </RouterLink>
        <RouterLink :to="{name:'NYSC'}" class="text-[#181882] hover:underline"> NYSC, </RouterLink>
        <RouterLink :to="{name:'Education'}" class="text-[#181882] hover:underline"> Education, </RouterLink>
        <RouterLink :to="{name:'Autos'}" class="text-[#181882] hover:underline"> Autos, </RouterLink>
        <RouterLink :to="{name:'Car talk'}" class="text-[#181882] hover:underline"> Car Talk, </RouterLink>
        <RouterLink :to="{name:'Properties'}" class="text-[#181882] hover:underline"> Properties, </RouterLink>
        <RouterLink :to="{name:'Health'}" class="text-[#181882] hover:underline"> Health, </RouterLink>
        <RouterLink :to="{name:'Travel'}" class="text-[#181882] hover:underline"> Travel, </RouterLink>
        <RouterLink :to="{name:'Family'}" class="text-[#181882] hover:underline"> Family, </RouterLink>
        <RouterLink :to="{name:'Culture'}" class="text-[#181882] hover:underline"> Culture, </RouterLink>
        <RouterLink :to="{name:'Religion'}" class="text-[#181882] hover:underline"> Religion, </RouterLink>
        <RouterLink :to="{name:'Food'}" class="text-[#181882] hover:underline"> Food, </RouterLink>
        <RouterLink :to="{name:'Diaries'}" class="text-[#181882] hover:underline"> Diaries, </RouterLink>
        <RouterLink :to="{name:'Firekat ads'}" class="text-[#181882] hover:underline"> Firekat Ads, </RouterLink>
        <RouterLink :to="{name:'Pets'}" class="text-[#181882] hover:underline"> Pets, </RouterLink>
        <RouterLink :to="{name:'Agriculture'}" class="text-[#181882] hover:underline"> Agriculture </RouterLink>
      </div>

      <div
        class="odd:bg-[#e8ece0] place-content-start font-bold border border-gray-300 p-2"
      >
        <RouterLink :to="{name:'Entertainment'}"  class="text-[#181882] hover:underline">Entertainment:</RouterLink>
        <RouterLink :to="{name:'Jokes'}" class="text-[#181882] hover:underline">Jokes Etc, </RouterLink>
        <RouterLink :to="{name:'Tv/movies'}" class="text-[#181882] hover:underline">TV/Movies, </RouterLink>
        <RouterLink :to="{name:'Music/radio'}" class="text-[#181882] hover:underline">Music/Radio, </RouterLink>
        <RouterLink :to="{name:'Celebrities'}" class="text-[#181882] hover:underline">Celebrities, </RouterLink>
        <RouterLink :to="{name:'Fashion'}" class="text-[#181882] hover:underline">Fashion, </RouterLink>
        <RouterLink :to="{name:'Events'}" class="text-[#181882] hover:underline">Events, </RouterLink>
        <RouterLink :to="{name:'Sports'}" class="text-[#181882] hover:underline">Sports, </RouterLink>
        <RouterLink :to="{name:'Gaming'}" class="text-[#181882] hover:underline">Gaming, </RouterLink>
        <RouterLink :to="{name:'Forum games'}" class="text-[#181882] hover:underline">Forum Games, </RouterLink>
        <RouterLink :to="{name:'Literature'}" class="text-[#181882] hover:underline">Literature </RouterLink>
      </div>

      <div
        class="odd:bg-[#e8ece0] place-content-start border-t rounded-b-lg border-t-gray-300 font-bold p-2"
      >
        <RouterLink :to="{name:'Science'}"  class="text-[#181882] hover:underline"
          >Science/Technology:
        </RouterLink>
        <RouterLink :to="{name:'Programming'}" class="text-[#181882] hover:underline">Programming, </RouterLink>
        <RouterLink :to="{name:'Webmasters'}" class="text-[#181882] hover:underline">Webmasters, </RouterLink>
        <RouterLink :to="{name:'Computers'}" class="text-[#181882] hover:underline">Computers, </RouterLink>
        <RouterLink :to="{name:'Phones'}" class="text-[#181882] hover:underline">Phones, </RouterLink>
        <RouterLink :to="{name:'Art, graphics & video'}" class="text-[#181882] hover:underline">Art,Graphics & Video, </RouterLink>
        <RouterLink :to="{name:'Technology market'}" class="text-[#181882] hover:underline">Technology Market</RouterLink>
      </div>
    </div>
    <Ads />
    <div
      class="rounded-lg flex flex-col first:border-t-0 last:rounded-b-lg shadow-lg last:border-b-0 odd:bg-[#e8ece0] bg-[#F6F6EC] border border-gray-300 place-self-center md:w-[70em] sm:w-[90%] mx-1.5"
    >
      <div class="flex justify-center items-center p-2 text-center">
        <RouterLink :to="{name:'Index'}" class="font-semibold text-[#181882] hover:underline"
          >Latest news </RouterLink
        > / <RouterLink :to="{name:'Index'}" class="text-[#181882] font-semibold hover:underline"
          >Twitter</RouterLink
        > / <RouterLink :to="{name:'Index'}" class="text-[#181882] font-semibold hover:underline"
          >Facebook</RouterLink
        > /
         <RouterLink :to="{name:'General'}" class="text-[#181882] font-semibold hover:underline"
          >How To Advertise</RouterLink
        >
      </div>
      <div
        v-for="topic in allTopics"
        :key="topic.id"
        class="odd:bg-[#e8ece0] border border-gray-300 flex justify-center items-center p-2   "
      >
        <!-- {{ content.title }} -->
        <span class="text-[#984948]">»</span
        ><RouterLink :to="{name:'PostDetail',params:{topicId:topic.id,topicSlug:topic.slug}}" class="text-[#181882] text-center font-bold  hover:underline">{{
          topic.title
        }}</RouterLink
        ><span class="text-[#984948]">«</span>
      </div>
      <div className="last:rounded-b-lg flex justify-center items-center p-2">
        (<RouterLink :to="{name:'Index'}" class="font-bold text-[#181882]">1</RouterLink
        >)(<RouterLink :to="{name:'Index'}" class="font-bold text-[#181882]">2</RouterLink
        >)(<RouterLink :to="{name:'Index'}" class="font-bold text-[#181882]">3</RouterLink
        >)(<RouterLink :to="{name:'Index'}" class="font-bold text-[#181882]">4</RouterLink
        >)(<RouterLink :to="{name:'Index'}" class="font-bold text-[#181882]">5</RouterLink
        >)(<RouterLink :to="{name:'Index'}" class="font-bold text-[#181882]">6</RouterLink
        >)(<RouterLink :to="{name:'Index'}" class="font-bold text-[#181882]">7</RouterLink
        >)(<RouterLink :to="{name:'Index'}" class="font-bold text-[#181882]">8</RouterLink
        >)(<RouterLink :to="{name:'Index'}" class="font-bold text-[#181882]">9</RouterLink>)
      </div>
    </div>
    <Ads />
   
</template>
