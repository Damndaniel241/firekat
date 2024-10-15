import axios from "axios";
import { allTopicsSchema } from "@/schemas/schemas";
import { ref } from "vue";

const topics = ref<allTopicsSchema|[]>([]);


export function useSubjectTopic(id:number){
async function getTopics() {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/subjects/${id}/topics/`
      );
      console.log(response.data);
      topics.value = response.data;
    } catch (error) {
      console.error("Error retrieving subjects", error);
    }
  }


  return {getTopics}

}