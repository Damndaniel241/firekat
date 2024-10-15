<script setup lang="ts">
import HeaderView from "./HeaderView.vue";
import Ads from "@/components/Ads.vue";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref,watch } from "vue";
import postpic from "@/assets/files.png";
import FooterView from "./FooterView.vue";
import { contents } from "@/Fakedb";
import axios from "axios";
import { TopicSchema, TopicscommentSchema,LikeStatusSchema, CommentSchema } from "@/schemas/schemas";
import { useAuth } from "@/composables/useAuth";
import { formatPostedAt } from "@/utils/Dateutils";
import { useUser } from "@/composables/useUser";


const topicData = ref<TopicSchema | null>(null);
const commentsList = ref<TopicscommentSchema>([]);
const { isLoggedIn} = useAuth();
const {userInfo} = useUser();
const userData = localStorage.getItem("user");
const likeText = ref(false); 
const commentLikeText = ref(false);
const count = ref(0);
const route = useRoute();
const router = useRouter();
const like_status = ref<LikeStatusSchema>(null);
const comment_like_status = ref<LikeStatusSchema>(null);
const topicId = computed(() => route.params?.topicId as string);
console.log(topicId);


async function get_like_status(){
  try{
    if (!userData) {
      throw new Error("No user data found in localStorage.");
    }
    const token = JSON.parse(userData).token;
  const  response = await axios.get(`http://127.0.0.1:8000/api/topics/${topicId.value}/get_like_status/`,
    {headers:{
      Authorization:`Token ${token}`
    },
  }
  );
  console.log(response.data);
  like_status.value = response.data;
  likeText.value = response.data.like_status;
}catch(error){
  console.error("error retrieving like status",error);
}
}


async function get_comment_like_status(commentID:number){
  try{
    if (!userData) {
      throw new Error("No user data found in localStorage.");
    }
    const token = JSON.parse(userData).token;
  const response = await axios.get(`http://127.0.0.1:8000/api/comments/${commentID}/get_comment_like_status/`,
    {headers:{
      Authorization:`Token ${token}`
    },
  }
  );
  // console.log(response.data);
  comment_like_status.value = response.data;
  // console.log(comment_like_status.value);
  const comment = commentsList.value.find((c)=>c.id===commentID);
  if (comment){
    comment.comment_like_status = response.data.comment_like_status;
  }

  
  
  // commentLikeText.value = response.data.comment_like_status;
}catch(error){
  console.error("error retrieving like status",error);
}
}

async function likePost(){
  count.value = count.value+1;
  likeText.value = !likeText.value;
  console.log(likeText.value);
  const likeData = {
    user: userInfo.value?.id,
    liked:likeText.value,
    topic:parseInt(topicId.value)
  }
  try{
    if (!userData) {
      throw new Error("No user data found in localStorage.");
    }
    const token = JSON.parse(userData).token;
    const response = await axios.post(`http://127.0.0.1:8000/api/topics/${topicId.value}/like/`,likeData,
    {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    console.log(likeData);
  }catch(error){
    console.log("error liking post", error)
  }
}



async function likeComment(commentID:number){
  count.value = count.value+1;
  commentLikeText.value = !commentLikeText.value;
  console.log(commentLikeText.value);
  const commentLikeData = {
    user: userInfo.value?.id,
    liked:commentLikeText.value,
    comment:commentID,
  }
  try{
    if (!userData) {
      throw new Error("No user data found in localStorage.");
    }
    const token = JSON.parse(userData).token;
    const response = await axios.post(`http://127.0.0.1:8000/api/comments/${commentID}/like_comment/`,commentLikeData,
    {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    console.log(commentLikeData);
    const comment = commentsList.value.find((c)=>c.id===commentID);
    if (comment){
      comment.comment_like_status = !comment.comment_like_status
    }
  }catch(error){
    console.log("error liking comment", error)
  }
  
  

}


async function getTopicData() {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/topics/${topicId.value}`
    );
    console.log(response.data);
    topicData.value = response.data;
    
    // if topicData.value.
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


async function getComments() {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/topics/${topicId.value}/comments/`
    );
    console.log(response.data);
    commentsList.value = response.data.map((comment:CommentSchema)=>({
      ...comment,
      comment_like_status:false,
    }));
    console.log(commentsList.value);
    


   commentsList.value.forEach((comment)=>{
      // console.log("i am working fine");
      // console.log(comment.id);
     get_comment_like_status(comment.id);
    
     
    //  commentLikeText.value = comment_like_status.comment_like_status;
      
  });


    return response.data;
  } catch (error) {
    console.log(error);
  }
}


async function deleteComment(commentID:number){
try{
  if (!userData) {
      throw new Error("No user data found in localStorage.");
    }
    const token = JSON.parse(userData).token;
        const response = await axios.delete(`http://127.0.0.1:8000/api/comments/${commentID}/`,{
            headers:{
                Authorization:`Token ${token}`,
            },
        }
        );
        commentsList.value = commentsList.value.filter((comment) => comment.id !== commentID);
        // router.go(-1);
}catch(error){
console.error("error deleting comment",error);
}
}

getTopicData();
getComments();
get_like_status();

// get_comment_like_status(comment.id)
    commentsList.value.forEach((comment)=>{
      // console.log("i am working fine");
      console.log(comment.id);
      
  });


console.log(topicData);




function goToUser(userId:number,username:string) {
  router.push({ 
    // path: '/-/makecomment', 
    name:'User',
    params:{username:username},
    state: { userId }
  });
}

function goToNewPost(topicId:number, commentId:number) {
  router.push({ 
    path: '/-/makecomment', 
    query: { topic: topicId, post: commentId }
  });
}

function goToEditPost(topicId:number|undefined, commentId:number|undefined) {
  router.push({ 
    path: '/-/editcomment', 
    query: { topic: topicId, post: commentId }
  });
}

function goToEditTopic(topicId:number|undefined) {
  router.push({ 
    path: '/-/edit-topic', 
    query: { topic: topicId }
  });
}
</script>

<template>
  
  <div v-if="topicData" class="text-center text-2xl capitalize font-bold">{{ topicData.title }} - Firekat</div>
  <Ads />
  <div
    class="flex flex-col rounded-lg border border-gray-300 shadow-lg w-[70em] place-self-center"
  >
    <div class="bg-[#E8ECE0] p-2 border-b-gray-300 border-b rounded-t-lg">
      <RouterLink
        :to="{ name: 'PostDetail', params: { topicId: topicId } }"
        class="text-[#181882] font-bold hover:underline"
        v-if="topicData"
      >
        <!-- {{data[0]?.title}} -->
        {{ topicData?.title }}
      </RouterLink>
      by
      <!-- <RouterLink v-if="topicData" :to="{name:'User',params:{username:topicData?.author.username}}" class="text-[#551818] font-bold hover:underline">
        {{ topicData?.author.username }} </RouterLink
      >: -->
      <button @click="goToUser(topicData.author.id,topicData.author.username)" v-if="topicData" class="text-[#551818] font-bold hover:underline cursor-pointer">{{ topicData?.author.username }}<span class="font-normal text-sm">(author)</span> </button>:
      <span class="text-[#555518] font-semibold">{{
        formatPostedAt(topicData?.posted_at ?? '')
      }}</span>
    </div>
    <div class="bg-[#F6F6EC] rounded-lg p-1">
      <!-- <img :src="postpic" alt="postpic" class="w-[400px] h-[400px] p-4" /> -->
      <p>
        {{ topicData?.content }}
        <img v-if="topicData?.image_1" :src="topicData?.image_1" alt="postpic" class="w-[800px] h-[400px] p-4">
        <img v-if="topicData?.image_2" :src="topicData?.image_2" alt="postpic" class="w-[800px] h-[400px] p-4">
        <img v-if="topicData?.image_3" :src="topicData?.image_3" alt="postpic" class="w-[800px] h-[400px] p-4">
        <img v-if="topicData?.image_4" :src="topicData?.image_4" alt="postpic" class="w-[800px] h-[400px] p-4">
      </p>
      <div class="flex gap-1" v-if="isLoggedIn">
      <button v-if="topicData" class="text-[#551818] text-xs cursor-pointer hover:underline" @click="goToNewPost(topicData?.id , 1)">(quote)</button>
        <span class="text-[#555518] text-xs" v-if="topicData && topicData?.like_count>0">{{ topicData.like_count }}likes</span>
        <!-- <span v-if="like_status">{{ like_status.like_status }}</span> -->
      <button @click="likePost" class="text-[#551818] text-xs cursor-pointer hover:underline">({{ likeText ? 'unlike': 'like' }})</button>
      <button v-if="topicData?.author.id == userInfo?.id" @click="goToEditTopic(topicData?.id)" class="text-[#551818] text-xs cursor-pointer hover:underline" >(edit topic)</button>
    </div>
    <div v-else><span class="text-[#555518] text-xs" v-if="topicData && topicData?.like_count>0">{{ topicData.like_count }}likes</span></div>
    </div>
  </div>


  <div
    class="flex flex-col rounded-lg border border-gray-300 shadow-lg w-[70em] place-self-center"
    v-for="comment in commentsList"
  >
  
    <div class="bg-[#E8ECE0] p-2 border-b-gray-300 border-b border-t-rounded-lg">
      <RouterLink to="" class="text-[#181882] font-bold hover:underline">
        RE: {{ topicData?.title }} </RouterLink> by
        <RouterLink :to="{name:'User',params:{username:comment.user?.username}}" class="text-[#551818] font-bold hover:underline">
          {{ comment.user.username }}<span class="font-normal text-sm" v-if="comment.user.id == topicData?.author.id">(author)</span>
        </RouterLink>: 
        <span class="text-[#555518] font-semibold">{{
          formatPostedAt(comment?.posted_at)
        }}</span>
      
    </div>


    <div class="bg-[#F6F6EC] p-1">
      <!-- <img :src="postpic" alt="postpic" class="w-[400px] h-[400px] p-4" /> -->
       <p v-if="comment.quoted_comment" class="bg-[#E8ECE0] rounded-lg p-1">
      <p>  <RouterLink :to="{name:'User',params:{username:comment.quoted_comment.user.username}}" class="text-[#181882] font-bold hover:underline">{{ comment.quoted_comment.user.username  }}:</RouterLink
          ></p>
        {{ comment.quoted_comment?.content }} </p>
      <p>
        {{ comment?.content }}
      </p>
      
      <div class="flex gap-1" v-if="isLoggedIn">
        
      <button v-if="topicData" class="text-[#551818] cursor-pointer hover:underline text-xs" @click="goToNewPost(topicData?.id , comment.id)">(quote)</button>
      <button v-if="comment.user?.id == userInfo?.id" @click="goToEditPost(topicData?.id,comment.id)" class="text-[#551818] text-xs cursor-pointer hover:underline" >(edit)</button>
    <span v-if="comment.comment_like_count>0" class="font-medium text-[#555518] text-xs">{{ comment.comment_like_count }}likes</span>
      <button @click="likeComment(comment.id)" class="text-[#551818] text-xs cursor-pointer hover:underline">({{ comment.comment_like_status ? 'unlike': 'like' }})</button>
      <button v-if="comment.user?.id == userInfo?.id" @click="deleteComment(comment.id)" class="text-[#551818] text-xs cursor-pointer hover:underline" >(delete)</button>
    </div>
    </div>
  </div>
  
 
  <Ads />
</template>


<!-- MWJDGMSP -->