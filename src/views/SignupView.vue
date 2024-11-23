<script setup lang="ts">
import { ref,onBeforeMount, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const router = useRouter();
const error = ref<boolean>(false);
const errorMessage  = ref<string>("");


function validateForm(input:string){
  if (input.trim() == ""){
    error.value = true;
    errorMessage.value = "fill in all spaces"

    setTimeout(()=>{
      error.value = false;
    },5000)
    return error.value;
  }
}


async function register(){
 
  for(let item of [username.value,email.value,password.value]){
    validateForm(item);
    if (!validateForm(item)){
      console.log("it was wrong");
      
        return;
    }
  }
  // validateForm(username.value);
  // validateForm(email.value);
  // validateForm(password.value);


    const formData = {
        username:username.value,
        email:email.value,
        password:password.value
    }

    try {
        const response = await axios.post("http://127.0.0.1:8000/accounts/register/", formData);
        router.push({name:"Login"});
        return response.data;
    } catch (error) {
        console.error("An error occurred during registration:", error);
        // Handle the error as needed, e.g., return an error message or null
        return null;
    }
}

// onMounted(async()=>{
//     register();
// }) 


</script>

<template>
  <div
    class="text-3xl flex justify-center font-bold place-self-center capitalize"
  >
    join firekat
  </div>

  <div v-if="error" class="text-2xl text-center text-red-600">{{ errorMessage }}</div>
  <div
    class="bg-[#e8ece0] rounded-lg lg:w-[70em] md:w[99%] w-[95%] place-self-center flex flex-col border border-gray-300 shadow-lg"
  >
    <div
      class="bg-[#F6F6EC] p-2 flex justify-center gap-2 border border-gray-300 rounded-t-lg"
    >
      <div class="flex items-center gap-1">
        <span>Email: </span>
        <input
          type="email"
          v-model="email"
          class="p-1 rounded-xl bg-white border-gray-300"
        />
      </div>
    </div>
    <div
      class="bg-[#e8ece0] p-2 flex justify-center gap-2 border border-gray-300"
    >
      <div class="flex items-center gap-1">
        <span>Username: </span>
        <input
          type="text"
          v-model="username"
          class="p-1 rounded-xl bg-white border-gray-300"
        />
      </div>
    </div>
    <div class="bg-[#F6F6EC] p-2 flex justify-center gap-2">
      <div class="flex items-center gap-1">
        <span>Password: </span>
        <input
          type="password"
          v-model="password"
          class="p-1 rounded-xl bg-white border-gray-300"
        />
      </div>
    </div>
    <div
      class="bg-[#e8ece0] p-2 flex justify-center gap-2 rounded-b-lg border border-gray-300"
    >
      <button class="bg-white rounded-2xl p-2 cursor-pointer" @click="register">
        join firekat
      </button>
    </div>
  </div>
</template>
