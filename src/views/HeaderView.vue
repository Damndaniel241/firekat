<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useAuth } from "@/composables/useAuth";
import axios from "axios";
import { useRouter } from "vue-router";
import {watch,ref,onMounted,computed} from  "vue";


;
const router = useRouter();

const {isLoggedIn,logout} = useAuth();
// const isUserLoggedIn = computed(() => isLoggedIn.value);
// const userData = computed(() => getUserData());

// const isAuthenticated = ref(localStorage.getItem('user') !== null);

// watch(isLoggedIn,(newValue)=>{
//   if (!newValue){
//     router.push({name:"Index"});
//   }
// })


async function logoutUser(){
  try{
  const response = await axios.post("http://127.0.0.1:8000/accounts/logout/");
  // localStorage.removeItem('user');
  // isLoggedIn.value = false; 
  logout();
  
  return
  }catch(error){
    console.error("error logging out",error)
  }

}

// const { isLoggedIn, user, login, logout } = useAuth();
</script>

<template>
  <div class="flex justify-center items-center flex-col gap-5">
    <div
      class="bg-[#F6F6EC] shadow-lg border border-gray-300 p-2 rounded-lg flex flex-col justify-center items-center w-[70em] gap-1"
    >
      <RouterLink
        :to="{ name: 'Index' }"
        class="text-[#175616] text-4xl font-bold capitalize hover:underline cursor-pointer"
      >
        Firekat forum
      </RouterLink>
      <div>
        Welcome, <span class="font-semibold">Guest: </span
        ><RouterLink
          :to="{name:'Signup'}"
          class="text-[#181882] font-bold capitalize hover:underline"
          >Register on Firekat</RouterLink
        >&nbsp;/&nbsp;<RouterLink
          :to="{ name: 'Login' }"
          class="text-[#181870] hover:underline"
          >LOGIN! </RouterLink
        >/
        <RouterLink class="text-[#181870] hover:underline" to=""
          >Trending </RouterLink
        >/
        <RouterLink class="text-[#181870] hover:underline" to=""
          >Recent </RouterLink
        >/
        <RouterLink class="text-[#181870] hover:underline" to=""
          >New</RouterLink
        >

        
       
      </div>
      <div>
        <span class="font-bold">Stats:</span> 3,183,615 members, 7,921,304
        topics <span class="font-bold">Date: </span>Wednesday, 14 August 2024 at
        10:30 PM
        <span v-if="isLoggedIn"><button @click="logoutUser" class="text-[#181870] hover:underline"> (logout)All</button></span>
      </div>
      <div class="flex gap-2">
        <input
          type="text"
          class="rounded-2xl border border-gray-400 w-[500px]"
        />
        <button
          class="bg-white cursor-pointer border text-black border-gray-400 p-1 px-2 rounded-2xl"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>
