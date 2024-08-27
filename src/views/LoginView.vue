<script setup lang="ts">
import { ref,computed,watch } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useAuth } from '@/composables/useAuth';


const router = useRouter();
const username = ref<string>("");
const password = ref<string>("");

const { isLoggedIn,login } = useAuth();

watch(isLoggedIn,(newValue)=> {
  if (!newValue){
    router.push({name:"Index"});
  }
});


async function loginUser() {
  const formData = {
    username:username.value,
    password:password.value
  }

  try{
  const response = await axios.post("http://127.0.0.1:8000/accounts/login/",formData);
  // localStorage.setItem('user',JSON.stringify(response.data));
  console.log(response.data);
  login(response.data);
  // isLoggedIn.value = true;
  router.push({name:"Index"});
  return response.data;
 
}catch(error){
  console.error("did not login",error);
}
}

</script>

<template>
    <div class="text-3xl flex justify-center font-bold place-self-center capitalize">login to firekat</div>
  <div
    class="bg-[#e8ece0] rounded-lg w-[70em] place-self-center flex flex-col border-gray-300 shadow-lg"
  >
    <div class="bg-[#e8ece0] p-2 text-center rounded-t-lg text-xl font-semibold">
      Login With Password
    </div>
    <div class="bg-[#F6F6EC] p-2 flex justify-center gap-2 rounded-b-lg">
      <div class="flex items-center">
        <span>Username: </span>
        <input type="text" v-model="username" class="p-1 rounded-xl bg-white border-gray-300" />
      </div>
   
      <div class="flex items-center gap-2">
        <span>Password:</span>
        <input type="password" v-model="password" class="p-1 rounded-lg" />
        <button type="button" @click="loginUser" class="rounded-xl bg-white text-center p-1 border-gray-300 px-2 cursor-pointer"> login</button>
      </div>
    </div>
  </div>
</template>







<!-- <div v-if="user?.name">
  <p>Welcome, {{ user?.name }}!</p>
  <button @click="logout">Logout</button>
</div>
<div v-else>
  <p>You are not logged in.</p>
  <button @click="login">Login</button>
</div> -->