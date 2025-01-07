<script setup lang="ts">
// import { useAuthStore } from "@/stores/auth";
import { useAuth } from "@/composables/useAuth";
import axios from "axios";
import { useRouter } from "vue-router";
import { watch, ref} from "vue";
import { useUser } from "@/composables/useUser";
import { formatPostedAt } from "@/utils/Dateutils";

const router = useRouter();
const userData = localStorage.getItem("user");
const currentDateTime = new Date().toISOString();

// const { userInfo } = useUser();
const userCount = ref<number | null>(null);
const topicCount = ref<number | null>(null);


const { userInfo } = useUser();

const queryString = ref<string>("");

function takeToSearch(){
  router.push(
    {path:"/-/search",
    query:{q:queryString.value},
  }
  );
  
}


watch(userInfo, (newVal) => {
  if (newVal) {
    console.log("User info updated:", newVal);
    // router.push({name:"Index"});
    // Perform actions, e.g., updating the UI, redirecting, etc.
  }
});



const { isLoggedIn, logout } = useAuth();



async function logoutUser() {
  try {
    if (!userData) {
      throw new Error("No user data found in localStorage.");
    }
    const token = JSON.parse(userData).token;

    const response = await axios.post(
      "http://127.0.0.1:8000/accounts/logout/",
      {},
      {
        headers: {
          Authorization: `Token ${token}`, // Include the token in the Authorization header
        },
      }
    );

    // console.log(response);
    

    logout();

    return;
  } catch (error) {
    console.error("error logging out", error);
  }
}

async function getMemberCount(){
  try{
    const response = await axios.get("http://127.0.0.1:8000/accounts/users/all/");
    console.log(response.data);
    userCount.value =  response.data;
    return response.data
  }
  catch(error){
    console.error("error getting count", error);
  }
}
async function getTopicCount(){
  try{
    const response = await axios.get("http://127.0.0.1:8000/api/topics/all/");
    console.log(response.data);
    topicCount.value =  response.data;
    return response.data
  }
  catch(error){
    console.error("error getting count", error);
  }
}

getMemberCount();
getTopicCount();
// const { isLoggedIn, user, login, logout } = useAuth();
</script>

<template>
  <div class="flex justify-center items-center flex-col gap-5 mx-1.5">
    <div
      class="bg-[#F6F6EC] lg:w-[70em] md:mx-1.5   shadow-lg border border-gray-300 p-2 rounded-lg flex flex-col justify-center items-center w-full gap-1"
    >
      <RouterLink
        :to="{ name: 'Index' }"
        class="text-[#175616] text-4xl font-bold capitalize hover:underline cursor-pointer"
      >
        Firekat forum
      </RouterLink>
      <div v-if="isLoggedIn" class="text-center">
        Welcome,
        <!-- <span v-if="userInfo" class="font-semibold"
          ><RouterLink class="hover:underline" :to="{name:'User',params:{username:userInfo.username}}">{{ userInfo?.username }} </RouterLink>
        </span> -->
        <span  class="font-semibold">
          {{ userInfo?.username }}
        </span>
        <RouterLink class="text-[#181870] hover:underline" :to="{name:'EditUserProfile'}"> Edit Profile</RouterLink> /<RouterLink class="text-[#181870] hover:underline" to=""> SH </RouterLink
        >/<RouterLink class="text-[#181870] hover:underline" to=""> FT </RouterLink>/ <RouterLink class="text-[#181870] hover:underline" to="">FB</RouterLink> /
        <RouterLink class="text-[#181870] hover:underline" to="">L&S </RouterLink>/ <RouterLink class="text-[#181870] hover:underline" to="">MT</RouterLink> /<RouterLink class="text-[#181870] hover:underline" to="">
          FG</RouterLink
        >
        / <RouterLink class="text-[#181870] hover:underline" to="">FS</RouterLink> / <RouterLink class="text-[#181870] hover:underline" to=""
          >Trending </RouterLink
        >/
        <RouterLink class="text-[#181870] hover:underline" to=""
          >Recent </RouterLink
        >/
        <RouterLink class="text-[#181870] hover:underline" to=""
          >New</RouterLink
        >
      </div>
      <div v-else class="text-center">
        Welcome, <span class="font-semibold">Guest: </span
        ><RouterLink
          :to="{ name: 'Signup' }"
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

      <div class="text-center">
        <span class="font-bold">Stats:</span> {{ userCount }} members, {{ topicCount }}
        topics <span class="font-bold">Date: </span> {{formatPostedAt(currentDateTime)}}
        <!-- Wednesday, 14 August 2024 at
        10:30 PM -->
        <span v-if="isLoggedIn"
          ><button
            @click="logoutUser"
            class="text-[#181870] hover:underline cursor-pointer"
          >
            (logout)All
          </button></span
        >
      </div>
      <div class="flex gap-2 ">
        <input
        v-model="queryString"
          type="text"
          class="rounded-2xl border border-gray-400 md:w-[500px] sm:w-[400px]"
        />
        <button
          class="bg-white cursor-pointer border text-black border-gray-400 p-1 px-2 rounded-2xl "
          @click="takeToSearch"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>
