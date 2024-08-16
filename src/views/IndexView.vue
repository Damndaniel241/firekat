<script setup lang="ts">
import HeaderView from "@/views/HeaderView.vue";
import FooterView from "@/views/FooterView.vue";
import Ads from "@/components/Ads.vue";
import { contents } from "@/Fakedb.ts";
console.log(contents);
</script>

<template>
  <div class="flex flex-col h-full justify-between my-3 gap-4">
    <HeaderView />
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
        <RouterLink to="" class="text-[#181898]"> Firekat/General </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Politics, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Crime, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Romance, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Jobs/Vacancies, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Career, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Business, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Investment, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> NYSC, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Education, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Autos, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Car Talk, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Properties, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Health, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Travel, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Family, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Culture, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Religion, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Food, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Diaries, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Nairaland Ads, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Pets, </RouterLink>
        <RouterLink to="" class="text-[#181898]"> Agriculture </RouterLink>
      </div>

      <div
        class="odd:bg-[#e8ece0] place-content-start font-bold border border-gray-300 p-2"
      >
        <RouterLink to="" class="text-[#181898]">Entertainment:</RouterLink>
        <RouterLink to="" class="text-[#181898]">Jokes Etc, </RouterLink>
        <RouterLink to="" class="text-[#181898]">TV/Movies, </RouterLink>
        <RouterLink to="" class="text-[#181898]">Music/Radio, </RouterLink>
        <RouterLink to="" class="text-[#181898]">Celebrities, </RouterLink>
        <RouterLink to="" class="text-[#181898]">Fashion, </RouterLink>
        <RouterLink to="" class="text-[#181898]">Events, </RouterLink>
        <RouterLink to="" class="text-[#181898]">Sports, </RouterLink>
        <RouterLink to="" class="text-[#181898]">Gaming, </RouterLink>
        <RouterLink to="" class="text-[#181898]">Forum Games, </RouterLink>
        <RouterLink to="" class="text-[#181898]">Literature </RouterLink>
      </div>

      <div
        class="odd:bg-[#e8ece0] place-content-start border-t rounded-b-lg border-t-gray-300 font-bold p-2"
      >
        <RouterLink to="" class="text-[#181898]"
          >Science/Technology:
        </RouterLink>
        <RouterLink to="" class="text-[#181898]">Programming, </RouterLink>
        <RouterLink to="" class="text-[#181898]">Webmasters, </RouterLink>
        <RouterLink to="" class="text-[#181898]">Computers, </RouterLink>
        <RouterLink to="" class="text-[#181898]">Phones, </RouterLink>
        <RouterLink to="" class="text-[#181898]">Art, </RouterLink>
        <RouterLink to="" class="text-[#181898]">Graphics & Video, </RouterLink>
        <RouterLink to="" class="text-[#181898]">Technology Market</RouterLink>
      </div>
    </div>
    <Ads />
    <div
      class="rounded-lg flex flex-col first:border-t-0 last:rounded-b-lg shadow-lg last:border-b-0 odd:bg-[#e8ece0] bg-[#F6F6EC] border border-gray-300 w-[70em] place-self-center"
    >
      <div class="flex justify-center items-center p-2">
        <RouterLink to="" class="font-semibold text-[#181898]">Latest news </RouterLink
        >&nbsp;/&nbsp;<RouterLink to="" class="text-[#181898] font-semibold">Twitter</RouterLink
        >&nbsp; /&nbsp;<RouterLink to="" class="text-[#181898] font-semibold">Facebook</RouterLink
        >&nbsp;/&nbsp; 
        <RouterLink to="" class="text-[#181898] font-semibold">How To Advertise</RouterLink>
      </div>
      <div
        v-for="content in contents"
        key="content.id"
        class="odd:bg-[#e8ece0] border border-gray-300 flex justify-center items-center p-2"
      >
        <!-- {{ content.title }} -->
        <span class="text-[#984948]">»</span><RouterLink to="" class="text-[#181898] font-bold mx-1">{{ content.title }}</RouterLink><span class="text-[#984948]">«</span>
      </div>
      <div className="last:rounded-b-lg flex justify-center items-center p-2"> 
        (<RouterLink to="" class="font-bold text-[#181898]">1</RouterLink>)(<RouterLink to="" class="font-bold text-[#181898]">2</RouterLink>)(<RouterLink to="" class="font-bold text-[#181898]">3</RouterLink>)(<RouterLink to="" class="font-bold text-[#181898]">4</RouterLink>)(<RouterLink to="" class="font-bold text-[#181898]">5</RouterLink>)
        (<RouterLink to="" class="font-bold text-[#181898]">6</RouterLink>)(<RouterLink to="" class="font-bold text-[#181898]">7</RouterLink>)(<RouterLink to="" class="font-bold text-[#181898]">8</RouterLink>)(<RouterLink to="" class="font-bold text-[#181898]">9</RouterLink>)
        </div>
    </div>
    <Ads/>
    <FooterView />
  </div>
</template>
