<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router=useRouter();

const queryString = ref<string>("");

function takeToSearch(){
  router.push(
    {path:"/-/search",
    query:{q:queryString.value},
  }
  );
}
</script>

<template>
  <div class="flex justify-center items-center mb-3">
    <div
      class="bg-[#F6F6EC] shadow-lg border border-gray-300 p-2 rounded-lg flex flex-col justify-center items-center mx-1.5 md:w-[70em] gap-1"
    >
      <div class="flex gap-2">
        <input
        v-model="queryString"
          type="text"
          class="rounded-2xl border border-gray-400 md:w-[500px] " 
        />
        <button
          class="bg-white cursor-pointer border text-black border-gray-400 p-1 px-2 rounded-2xl"
          @click="takeToSearch"
        >
          Search
        </button>
      </div>
      <div class="text-center">
        Sections:
        <RouterLink class="text-[#181870] hover:underline" to=""
          >politics (1)
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >business
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >autos (1)
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >jobs (1)
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >career
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >education (1)
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >romance
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >computers
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >phones </RouterLink
        >
        <RouterLink class="text-[#181870] hover:underline" to=""
          >travel
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >sports
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >fashion
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >health
        </RouterLink>
      </div>
      <div class="text-center">
        <RouterLink class="text-[#181870] hover:underline" to=""
          >religion
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >celeb
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >tv-movies
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >music-radio
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >literature
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >webmasters
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >programming
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >techmarket
        </RouterLink>
      </div>
      <div class="text-center">
        Links:
        <RouterLink class="text-[#181870] hover:underline" to=""
          >(1)
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >(2)
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >(3)
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >(4)
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >(5)
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >(6)
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >(7)
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >(8)
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >(9)
        </RouterLink>
        <RouterLink class="text-[#181870] hover:underline" to=""
          >(10)
        </RouterLink>
      </div>
      <div class="text-center">
        <RouterLink class="font-bold hover:underline" to="">
          Firekat
        </RouterLink>
        - Copyright &copy; 2005 - 2024
        <RouterLink class="text-[#181870] hover:underline" to=""
          >Daniel Ebere.</RouterLink
        >
        All rights reserved. See
        <RouterLink class="text-[#181870] hover:underline" to=""
          >How to advertise.</RouterLink
        >
        48
      </div>
      <div class="text-center ">
        <span class="font-bold">Disclaimer: </span>
        Every Firekat member is
        <span class="font-bold"> solely responsible </span>
        for
        <span class="font-bold"> anything </span>
        that he/she
        <span class="font-bold"> posts </span>
        or
        <span class="font-bold"> uploads </span>
        on Firekat.
      </div>
    </div>
  </div>
</template>
