

import { ref,watchEffect,watch } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();

const isLoggedIn = ref(false);


function updateAuthState(){
  const userData = localStorage.getItem('user');
  isLoggedIn.value = !!userData;
}

updateAuthState();

watchEffect(()=>{
 window.addEventListener('storage',updateAuthState);
});

export function useAuth(){
  function login(userData:any){
    localStorage.setItem('user',JSON.stringify(userData));
    updateAuthState();
  }

  function logout(){
    localStorage.removeItem('user');
    updateAuthState();
    router.push({name:"Index"});
  }

  return {isLoggedIn,login,logout}
}







// export function useAuth(){
//   const userData = localStorage.getItem('user');
//   const isLoggedIn = ref(false);

//   if (userData){
//     isLoggedIn.value = true;
//   }
//   return {isLoggedIn}
  
// }






















// watchEffect(()=>{
//   const userData = localStorage.getItem('user');
//   isLoggedIn.value = !!userData;
// })


// const setLoggedIn = (value:boolean)=>{
//   if (!value){
//     localStorage.removeItem('user');
//   }
// }

// const getUserData = () => {
//   const userData = localStorage.getItem('user');
//   return userData ? JSON.parse(userData) : null;
// }
 
























  // watchEffect(()=>{
  //   const newUserData = localStorage.getItem('user');
  //   isLoggedIn.value = newUserData !== null;

    // if (!isLoggedIn.value){
    //   router.push({name:'Index'});
    // }


  // })

  // watch(isLoggedIn, (newValue) => {
  //   if (!newValue) {
  //     router.push({ name: 'Index' });
  //   }
  // });
  

// export function useAuth() {
//   // Simulate authentication state
//   const isLoggedIn = ref<boolean>(false)
//   const user = ref<{ name: string } | null>(null)

//   // Simulate a login action (e.g., entering credentials)
//   function login(username: string) {
//     isLoggedIn.value = true
//     user.value = { name: username }
//     // You can add more user data here, like tokens, roles, etc.
//     console.log(`User ${username} logged in`)
    
//   }

//   // Simulate a logout action
//   function logout() {
//     isLoggedIn.value = false
//     user.value = null
//     console.log('User logged out')
//   }

//   return {
//     isLoggedIn,
//     user,
//     login,
//     logout,
//   }
// }
