<script setup lang="ts">
import { useUser } from '@/composables/useUser';
import { useRoute,useRouter } from 'vue-router';
import { computed,onBeforeMount,ref,onMounted } from 'vue';
import axios from 'axios';
import { userSchema } from '@/schemas/schemas';

// const {userInfo} = useUser();

const route = useRoute();
// const userId = route.state?.userId;
const userId = route.params.username as string;

const userInfo =  ref<userSchema| null>(null)


const userNumber = ref<string | null>(null);
// const userData = localStorage.getItem("user");
async function getUserNumber() {
   //  if (!userData) {
   //    console.error("No user data found.");
   //    return;
   //  }
  
   //  const token = JSON.parse(userData).token;
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/accounts/users/user/${userId}/`
      );
      console.log("User Details:", response.data);
      userNumber.value = response.data;
      console.log(userNumber.value);
      return response.data;
    } catch (error) {
      console.error("error fetching userNumber", error);
    }
  }

async function getUserData(){
  try {
      const response = await axios.get(
        `http://127.0.0.1:8000/accounts/users/${userNumber}/`
      );
      console.log("User Details:", response.data);
      userInfo.value = response.data;
      console.log(userInfo.value);
      return response.data;
    } catch (error) {
      console.error("error fetching userData", error);
    }
  }


onBeforeMount(()=>{
getUserNumber();
}
)

onMounted(()=>{
   getUserData();
})






</script>

<template>
   <h1>hey there</h1>
   <p>User ID: {{ userNumber }}</p>
</template>