<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { useUser } from '@/composables/useUser';
const gender = ref("");
const personal_text = ref("");
const signature = ref("");
const profile_picture = ref<File | undefined>(undefined);
const {userInfo} = useUser();
const userData = localStorage.getItem("user");


function uploadImage(event:Event){
  const input = event.target as HTMLInputElement;
  if(input?.files){
  const imageFile = input?.files[0];
  profile_picture.value = imageFile;
  console.log(profile_picture.value);
  }
}

async function updateUserProfile() {
    // const formData = {
    //     user:userInfo.value?.id,
    //     email:userInfo.value?.email,
    //     gender:gender.value,
    //     personal_text:personal_text.value,
    //     signature:signature.value,
    //     profile_picture:profile_picture.value,

    // }
    
    const formData = new FormData();
    formData.append('user',String(userInfo.value?.id));
    formData.append('email',String(userInfo.value?.email));
    formData.append('gender',gender.value);
    formData.append('personal_text',personal_text.value);
    formData.append('signature',signature.value);
    if (profile_picture.value){
    formData.append('profile_picture',profile_picture.value);
    }
    
    try{
        if (!userData) {
      throw new Error("No user data found in localStorage.");
        }
        const token = JSON.parse(userData).token;
        const response = await axios.post("http://127.0.0.1:8000/accounts/users/user/update/",formData,{
            headers:{
                Authorization:`Token ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        })
    }catch(error){
        console.error("error updating data",error);
        
    }

}

</script>

<template>
 <div
      class="first:border-t-0 last:border-b-0 odd:bg-[#e8ece0] rounded-lg bg-[#F6F6EC] border border-gray-300 lg:w-[70em] md:w-[99%] flex flex-col place-self-center  w-[95%]"
    >
<div class="odd:bg-[#e8ece0] text-center p-2 capitalize">email: eberedaniel241@gmail.com</div>
<div class="odd:bg-[#e8ece0] text-center p-2 capitalize"><label for="gender-select">gender:</label><select v-model="gender">
    <option value=""></option>
    <option value="male">male</option>
    <option value="female">female</option>
</select></div>
<div class="odd:bg-[#e8ece0] text-center p-2 capitalize">personal text: <input v-model="personal_text" class="rounded-xl border-gray-300 border" type="text" ></div>
<div class="odd:bg-[#e8ece0] text-center p-2 capitalize">signature: <input v-model="signature" class="rounded-xl border-gray-300 border" type="text" ></div>
<div class="odd:bg-[#e8ece0] text-center p-2 capitalize">profile picture: <input @change="uploadImage" class="" type="file" accept="image/*" ></div>


</div>
<button class="place-self-center rounded-xl p-1 border-black border cursor-pointer" @click="updateUserProfile">update profile</button>

</template>