<script setup lang="ts">
import { ref } from 'vue';
import { useUser } from '@/composables/useUser';
import { userSchema } from '@/schemas/schemas';
import axios from 'axios';
import { useRouter,useRoute } from 'vue-router';





const router = useRouter();
const route = useRoute();
const {userInfo} = useUser();
const userData = localStorage.getItem("user");
const title= ref("");
const content = ref("");
console.log(userInfo.value);
const facultyID = route.query.faculty;
const subjectID = route.query.subject;
const selectedFiles = ref<File[]>([]);

console.log(facultyID,subjectID);

// Function to handle file selection
function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input?.files) {
    selectedFiles.value = Array.from(input.files);  // Convert to an array of files
  }
}

//

async function postTopic(){
    const currentDateTime = new Date().toISOString();
    
 console.log(userInfo.value?.id);
    // if (userInfo.value) return;
    const topicData = {
        title:title.value,
        content:content.value,
        posted_at:currentDateTime,
        author: userInfo.value?.id,
        faculty:facultyID,
        subject:subjectID,
    }

  //   const formData = new FormData();
  // formData.append('title', title.value);
  // formData.append('content', content.value);
  // formData.append('posted_at', currentDateTime);
  // formData.append('author', String(userInfo.value?.id));
  // if (facultyID) formData.append('faculty', String(facultyID));
  // if (subjectID) formData.append('subject', String(subjectID));

  // // Append the selected images to the FormData
  // selectedFiles.value.forEach((file, index) => {
  //   formData.append('images', file); // Append each image
  // });

  
    try{
        if (!userData) {
      throw new Error("No user data found in localStorage.");
    }
    const token = JSON.parse(userData).token;
    const response = await axios.post("http://127.0.0.1:8000/api/topics/",
        topicData,{
        headers: {
          Authorization: `Token ${token}`, // Include the token in the Authorization header
          'Content-Type': 'multipart/form-data', 
        },
      }
    )
    router.go(-1);
    }
    catch (error){
        console.error("error posting topic",error)
    }
}
</script>

<template>
  <div class="font-bold text-3xl place-self-center">
    New Topic - Firekat / General, Firekat Forum
  </div>
  <div class="place-self-center w-[70em] bg-[#E8ECE0] rounded-lg p-3">
    <div class="flex flex-col">
        <label for="">title</label>
      <input type="text" class="rounded-xl" v-model="title"/>
    </div>
    <div class="flex flex-col">
        <label for="">content</label>
      <textarea cols="10" class="rounded-xl" v-model="content" ></textarea>
    </div>
    <!-- {{ userInfo?.id }} -->
    <!-- <div>
      <input type="file" multiple @change="handleFileChange" />
    </div> -->
    <button type="button" @click="postTopic()" class="bg-white rounded-2xl p-2 mt-1 cursor-pointer">submit</button>
  </div>
</template>
