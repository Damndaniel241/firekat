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
      class="first:border-t-0 last:border-b-0 odd:bg-[#e8ece0] rounded-lg bg-[#F6F6EC] border border-gray-300 w-[70em] flex flex-col place-self-center"
    >
      <div
        class="odd:bg-[#e8ece0] border-b rounded-t-lg border-b-gray-300 flex justify-center text-xl font-bold uppercase p-2 w-full"
      >
        Firekat nigerian forums
      </div>

      <div
        class="odd:bg-[#daf89f] p-2 font-bold border-gray-300 border place-content-start"
      >
        <RouterLink :to="{name:'General'}" class="text-[#181882] hover:underline"> Firekat/General: </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Politics, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Crime, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Romance, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Jobs/Vacancies, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Career, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Business, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Investment, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> NYSC, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Education, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Autos, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Car Talk, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Properties, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Health, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Travel, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Family, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Culture, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Religion, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Food, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Diaries, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Nairaland Ads, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Pets, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline"> Agriculture </RouterLink>
      </div>

      <div
        class="odd:bg-[#e8ece0] place-content-start font-bold border border-gray-300 p-2"
      >
        <RouterLink :to="{name:'Entertainment'}"  class="text-[#181882] hover:underline">Entertainment:</RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Jokes Etc, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">TV/Movies, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Music/Radio, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Celebrities, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Fashion, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Events, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Sports, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Gaming, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Forum Games, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Literature </RouterLink>
      </div>

      <div
        class="odd:bg-[#e8ece0] place-content-start border-t rounded-b-lg border-t-gray-300 font-bold p-2"
      >
        <RouterLink :to="{name:'Science'}"  class="text-[#181882] hover:underline"
          >Science/Technology:
        </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Programming, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Webmasters, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Computers, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Phones, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Art, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Graphics & Video, </RouterLink>
        <RouterLink to="" class="text-[#181882] hover:underline">Technology Market</RouterLink>
      </div>
    </div>
    <Ads />
    <div
      class="rounded-lg flex flex-col first:border-t-0 last:rounded-b-lg shadow-lg last:border-b-0 odd:bg-[#e8ece0] bg-[#F6F6EC] border border-gray-300 w-[70em] place-self-center"
    >
      <div class="flex justify-center items-center p-2">
        <RouterLink to="" class="font-semibold text-[#181882]"
          >Latest news </RouterLink
        >&nbsp;/&nbsp;<RouterLink to="" class="text-[#181882] font-semibold"
          >Twitter</RouterLink
        >&nbsp; /&nbsp;<RouterLink to="" class="text-[#181882] font-semibold"
          >Facebook</RouterLink
        >&nbsp;/&nbsp;
        <RouterLink to="" class="text-[#181882] font-semibold"
          >How To Advertise</RouterLink
        >
      </div>
      <div
        v-for="topic in allTopics"
        :key="topic.id"
        class="odd:bg-[#e8ece0] border border-gray-300 flex justify-center items-center p-2"
      >
        <!-- {{ content.title }} -->
        <span class="text-[#984948]">»</span
        ><RouterLink :to="{name:'PostDetail',params:{topicId:topic.id,topicSlug:topic.slug}}" class="text-[#181882] font-bold mx-1 hover:underline">{{
          topic.title
        }}</RouterLink
        ><span class="text-[#984948]">«</span>
      </div>
      <div className="last:rounded-b-lg flex justify-center items-center p-2">
        (<RouterLink to="" class="font-bold text-[#181882]">1</RouterLink
        >)(<RouterLink to="" class="font-bold text-[#181882]">2</RouterLink
        >)(<RouterLink to="" class="font-bold text-[#181882]">3</RouterLink
        >)(<RouterLink to="" class="font-bold text-[#181882]">4</RouterLink
        >)(<RouterLink to="" class="font-bold text-[#181882]">5</RouterLink>)
        (<RouterLink to="" class="font-bold text-[#181882]">6</RouterLink
        >)(<RouterLink to="" class="font-bold text-[#181882]">7</RouterLink
        >)(<RouterLink to="" class="font-bold text-[#181882]">8</RouterLink
        >)(<RouterLink to="" class="font-bold text-[#181882]">9</RouterLink>)
      </div>
    </div>
    <Ads />
   
</template>
