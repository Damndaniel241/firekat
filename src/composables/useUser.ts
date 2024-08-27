import axios
 from "axios";
 import { onMounted,ref } from "vue";


const userData = ref<any>(null);

const storedData = localStorage.getItem("user");

async function getUserData() {
    if (!storedData) {
      console.error("No user data found.");
      return;
    }
  
    const token = JSON.parse(storedData).token;
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/accounts/users/me/",
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      console.log("User Details:", response.data);
      userData.value = response.data;
    } catch (error) {
      console.error("error fetching userData", error);
    }
  }

export function useUser(){

    onMounted(() => {
        getUserData(); // Fetch user data when component is mounted
    });
   
   return userData;

}