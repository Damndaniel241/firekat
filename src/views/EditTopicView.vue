<script setup lang="ts">
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { useUser } from "@/composables/useUser";
import { onMounted, ref, computed, onUnmounted } from "vue";
import { TopicSchema } from "@/schemas/schemas";
const route = useRoute();
const router = useRouter();
const userData = localStorage.getItem("user");
const topicData = ref<TopicSchema | null>(null);
const topicID = route.query.topic;

const title = ref("");
const content = ref("");
const selectedFiles = ref<File[]>([]);
const imageUrl = ref<string | null>(null);
const formErrors = ref<{ title?: string }>({});
const removedImages = ref<string[]>([]); // To track which images are removed

async function getComment() {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/topics/${topicID}`
    );
    console.log(response.data);

    topicData.value = response.data;
    // content.value = topicData.value?.content;
    title.value = topicData.value?.title || "";
    content.value = topicData.value?.content || "";

    // Reset selectedFiles
    selectedFiles.value = [];

    // Populate selectedFiles with the existing images from topicData

    ["image_1", "image_2", "image_3", "image_4"].forEach((imageField) => {
      if (topicData.value[imageField]) {
        // Convert the URL to a Blob (mock file-like object)
        const existingImage = topicData.value[imageField];
        selectedFiles.value.push(existingImage); // Add existing image URL directly
      }
    });

    return response.data;
  } catch (error) {
    console.error("couldn't load comment", error);
  }
}

onMounted(() => {
  getComment();
});

function validateForm() {
  formErrors.value = {};

  if (!title.value.trim()) {
    formErrors.value.title = "Title is required";
    return false;
  }

  return true;
}

async function postEditToTopic() {
  if (!validateForm()) {
    return;
  }
  const currentDateTime = new Date().toISOString();
  // const editCommentData = {
  //     title:title.value,
  //     content:content.value,
  //     posted_at:currentDateTime,
  // }
  const editCommentData = new FormData();
  editCommentData.append("title", title.value);
  editCommentData.append("content", content.value);
  editCommentData.append("posted_at", currentDateTime);
  selectedFiles.value.forEach((file, index) => {
    if (file instanceof File) {
      editCommentData.append(`image_${index + 1}`, file); // Append each image
    } else if (typeof file === 'string' && file) {
      // For existing images, we'll send the URL
      editCommentData.append(`existing_image_${index + 1}`, file);
    }
    
  
  });

 // Append removed images
 if (removedImages.value.length > 0) {
    editCommentData.append("removed_images", JSON.stringify(removedImages.value));
  }

 

  
  try {
    if (!userData) {
      throw new Error("No user data found in localStorage.");
    }
    const token = JSON.parse(userData).token;
    const response = await axios.patch(
      `http://127.0.0.1:8000/api/topics/${topicID}/`,
      editCommentData,
      {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    router.go(-1);
  } catch (error) {
    console.error("error posting edit", error);
  }
}



const imageUrls = computed(() => {
  return selectedFiles.value.map((file) => {
    if (typeof file === "string") {
      // If it's a URL (existing image), return it directly
      return file;
    } else {
      // If it's a File object (newly selected), create an object URL
      return URL.createObjectURL(file);
    }
  });
});


function removeFile(index: number) {
  const fileToRemove = selectedFiles.value[index];

  if (typeof fileToRemove === "string") {
    removedImages.value.push(fileToRemove); // Track removed existing image
  }

  // Remove from selectedFiles
  selectedFiles.value = selectedFiles.value.filter((_, i) => i !== index);
}

onUnmounted(() => {
  imageUrls.value.forEach(URL.revokeObjectURL);
});

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
</script>

<template>
  <div class="place-self-center w-[70em] bg-[#E8ECE0] rounded-lg p-3">
    <h1 class="font-bold">edit topic</h1>
    <div class="flex flex-col">
      <label for="">title</label>
      <input type="text" v-model="title" class="rounded-xl" />
    </div>

    <div class="flex flex-col">
      <label for="">content</label>
      <textarea v-model="content" type="text" class="rounded-xl w-[100%]">
      </textarea>
    </div>

    <div class="flex">
      <!-- <div>{{ topicData?.image_1 }}</div> -->
      <!-- <img v-if="topicData?.image_1" :src="topicData?.image_1" alt="postpic" class="w-24 h-24 p-4"> -->
      <input
        type="file"
        @change="handleFileChange"
        accept="image/*"
        :disabled="selectedFiles.length >= 4"
      />
    </div>

    <div
      v-for="(url, index) in imageUrls"
      :key="index"
      class="relative inline-block m-2"
    >
      <img
        :src="url"
        alt="Selected image"
        class="w-24 h-24 object-cover rounded"
      />
      <input
        type="file"
        @change="(e) => handleFileChange(e, index)"
        accept="image/*"
        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <button
        @click="removeFile(index)"
        class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
      >
        X
      </button>
    </div>
    <p v-if="selectedFiles.length >= 4" class="text-red-500">
      You can only select a maximum of 4 files.
    </p>
    <!-- <div class="flex ">
      <div>{{ topicData?.image_1 }}</div>
      <input type="file" @change="handleFileChange"  accept="image/*" />
    </div>
    <div class="flex ">
      <div>{{ topicData?.image_1 }}</div>
      <input type="file" @change="handleFileChange"  accept="image/*" />
    </div>
    <div class="flex ">
      <div>{{ topicData?.image_1 }}</div>
      <input type="file" @change="handleFileChange"  accept="image/*" />
    </div> -->
    <div></div>
    <button
      type="button"
      class="bg-white rounded-2xl p-2 mt-1 cursor-pointer"
      @click="postEditToTopic()"
    >
      edit topic
    </button>
  </div>
</template>
