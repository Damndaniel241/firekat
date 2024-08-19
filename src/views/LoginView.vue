<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

// const authStore = useAuthStore();
// const user = authStore.user;
// const login = authStore.login;
// const logout = authStore.logout;
const {user,login,logout} = useAuthStore();

console.log(login);
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
        <input type="text" class="p-1 rounded-xl bg-white border-gray-300" />
      </div>
   
      <div class="flex items-center gap-2">
        <span>Password:</span>
        <input type="password" class="p-1 rounded-lg" />
        <button type="button" @click="login" class="rounded-xl bg-white text-center p-1 border-gray-300 px-2"> login</button>
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