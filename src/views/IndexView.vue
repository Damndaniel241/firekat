<script setup lang="ts">

import Ads from "@/components/Ads.vue";
import { contents } from "@/Fakedb.ts";
import { useAuth } from "@/composables/useAuth";

const {isLoggedIn} = useAuth();

console.log(isLoggedIn.value);

// console.log(contents);
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
        <RouterLink to="" class="text-[#181882]"> Firekat/General: </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Politics, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Crime, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Romance, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Jobs/Vacancies, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Career, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Business, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Investment, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> NYSC, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Education, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Autos, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Car Talk, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Properties, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Health, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Travel, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Family, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Culture, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Religion, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Food, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Diaries, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Nairaland Ads, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Pets, </RouterLink>
        <RouterLink to="" class="text-[#181882]"> Agriculture </RouterLink>
      </div>

      <div
        class="odd:bg-[#e8ece0] place-content-start font-bold border border-gray-300 p-2"
      >
        <RouterLink to="" class="text-[#181882]">Entertainment:</RouterLink>
        <RouterLink to="" class="text-[#181882]">Jokes Etc, </RouterLink>
        <RouterLink to="" class="text-[#181882]">TV/Movies, </RouterLink>
        <RouterLink to="" class="text-[#181882]">Music/Radio, </RouterLink>
        <RouterLink to="" class="text-[#181882]">Celebrities, </RouterLink>
        <RouterLink to="" class="text-[#181882]">Fashion, </RouterLink>
        <RouterLink to="" class="text-[#181882]">Events, </RouterLink>
        <RouterLink to="" class="text-[#181882]">Sports, </RouterLink>
        <RouterLink to="" class="text-[#181882]">Gaming, </RouterLink>
        <RouterLink to="" class="text-[#181882]">Forum Games, </RouterLink>
        <RouterLink to="" class="text-[#181882]">Literature </RouterLink>
      </div>

      <div
        class="odd:bg-[#e8ece0] place-content-start border-t rounded-b-lg border-t-gray-300 font-bold p-2"
      >
        <RouterLink to="" class="text-[#181882]"
          >Science/Technology:
        </RouterLink>
        <RouterLink to="" class="text-[#181882]">Programming, </RouterLink>
        <RouterLink to="" class="text-[#181882]">Webmasters, </RouterLink>
        <RouterLink to="" class="text-[#181882]">Computers, </RouterLink>
        <RouterLink to="" class="text-[#181882]">Phones, </RouterLink>
        <RouterLink to="" class="text-[#181882]">Art, </RouterLink>
        <RouterLink to="" class="text-[#181882]">Graphics & Video, </RouterLink>
        <RouterLink to="" class="text-[#181882]">Technology Market</RouterLink>
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
        v-for="content in contents"
        key="content.id"
        class="odd:bg-[#e8ece0] border border-gray-300 flex justify-center items-center p-2"
      >
        <!-- {{ content.title }} -->
        <span class="text-[#984948]">»</span
        ><RouterLink :to="{name:'PostDetail',params:{postId:content.id}}" class="text-[#181882] font-bold mx-1">{{
          content.title
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
