<script setup lang="ts">
import { ref,computed,onUnmounted } from 'vue';
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
const imageUrl = ref<string | null>(null);
    const formErrors = ref<{ title?: string }>({});

console.log(facultyID,subjectID);


function validateForm() {
  // formErrors.value = {};

  if (!title.value.trim()) {
    formErrors.value.title = 'Title is required';
    return false;
  }

  return true;
}


const imageUrls = computed(() => 
  selectedFiles.value.map(file => URL.createObjectURL(file))
);

function removeFile(index: number) {
  selectedFiles.value = selectedFiles.value.filter((_, i) => i !== index);
}

// function handleFileChange(event: Event) {
//   const input = event.target as HTMLInputElement;
//   if (input?.files) {
//     // Get current files
//     const currentFiles = selectedFiles.value || [];
    
//     // Add new files, up to a total of 4
//     const newFiles = Array.from(input.files);
//     const updatedFiles = [...currentFiles, ...newFiles].slice(0, 4);
    
//     // Update selectedFiles
//     selectedFiles.value = updatedFiles;
    
//     // Clear the file input
//     input.value = '';
//     // imageUrl.value = URL.createObjectURL(file);
  
//   }
// }


function handleFileChange(event: Event, index: number) {
  const input = event.target as HTMLInputElement;
  if (input?.files && input.files[0]) {
    const newFile = input.files[0];
    if (index < selectedFiles.value.length) {
      // Replace existing file
      selectedFiles.value[index] = newFile;
    } else {
      // Add new file
      selectedFiles.value.push(newFile);
    }
    selectedFiles.value = [...selectedFiles.value]; // Trigger reactivity
  }
}


async function postTopic(){


   // Validate form before proceeding
   if (!validateForm()) {
    return;
  }
    const currentDateTime = new Date().toISOString();
    
 console.log(userInfo.value?.id);
    // if (userInfo.value) return;
    // const topicData = {
    //     title:title.value,
    //     content:content.value,
    //     posted_at:currentDateTime,
    //     author: userInfo.value?.id,
    //     faculty:facultyID,
    //     subject:subjectID,
    // }



    const formData = new FormData();
  formData.append('title', title.value);
  formData.append('content', content.value);
  formData.append('posted_at', currentDateTime);
  formData.append('author', String(userInfo.value?.id));
  if (facultyID) formData.append('faculty', String(facultyID));
  if (subjectID) formData.append('subject', String(subjectID));

  // // Append the selected images to the FormData
  selectedFiles.value.forEach((file, index) => {
    formData.append(`image_${index+1}`, file); // Append each image
  });

  
    try{
        if (!userData) {
      throw new Error("No user data found in localStorage.");
    }
    const token = JSON.parse(userData).token;
    const response = await axios.post("http://127.0.0.1:8000/api/topics/",
        formData,{
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

onUnmounted(() => {
  imageUrls.value.forEach(URL.revokeObjectURL)
})
</script>

<template>
  <div class="font-bold text-3xl place-self-center">
    New Topic - Firekat / General, Firekat Forum
  </div>
  <div class="place-self-center lg:w-[70em] md:w-[99%] w-[95%] bg-[#E8ECE0] rounded-lg p-3">
    <div class="flex flex-col">
        <label for="">title</label>
      <input type="text" class="rounded-xl" v-model="title"/>
      <p v-if="formErrors.title" class="text-red-500">{{ formErrors.title }}</p> <!-- Error message for title -->

    </div>
    <div class="flex flex-col">
        <label for="">content</label>
      <textarea cols="10" class="rounded-xl" v-model="content" ></textarea>
    </div>
   
    <div>
      <input type="file" @change="handleFileChange"  accept="image/*" :disabled="selectedFiles.length >= 4"/>
     
    </div>
  
<div v-for="(url, index) in imageUrls" :key="index" class="relative inline-block m-2">
  <img :src="url" alt="Selected image" class="w-24 h-24 object-cover rounded" />
  <input type="file" @change="(e) => handleFileChange(e, index)" accept="image/*" 
         class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
  <button @click="removeFile(index)" class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
    X
  </button>
</div>
<p v-if="selectedFiles.length >= 4" class="text-red-500">You can only select a maximum of 4 files.</p>
   
    <div></div>
    <button type="button" @click="postTopic()" class="bg-white rounded-2xl p-2 mt-1 cursor-pointer">post topic</button>
  </div>
</template>
