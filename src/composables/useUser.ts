import axios
 from "axios";
 import { onMounted,ref,watch} from "vue";


 const userData = localStorage.getItem("user");

type Data = {
  id:string,
  username: string,
  email:string

}

const userInfo =  ref<Data| null>(null)

async function getUserData() {
    if (!userData) {
      console.error("No user data found.");
      return;
    }
  
    const token = JSON.parse(userData).token;
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/accounts/users/me/",
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      console.log("User Details:", response.data);
      userInfo.value = response.data;
      console.log(userInfo.value);
      return response.data;
    } catch (error) {
      console.error("error fetching userData", error);
    }
  }

  getUserData();

// onMounted(async()=>{
//   const data = await getUserData();
//   if (data) {
//     userInfo.value = data;
//   }
  
  
// })



export function useUser() {
    // Function to set user info
    function setUserData(data: Data | null) {
      userInfo.value = data;
    }
    watch(userInfo, (newVal, oldVal) => {
        console.log('userInfo changed:', newVal);
      });
    
      return {
        userInfo,
        setUserData,
      };
    }
