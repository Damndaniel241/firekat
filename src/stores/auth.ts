import {defineStore} from 'pinia';

export const useAuthStore = defineStore('auth',{
    state: ()=>({
        isLoggedIn: false,
        user: null as {name:string} | null,
    }),
    actions:{
        login(){
            this.isLoggedIn = true
            this.user = {name:'John Doe'}
        },
        logout(){
            this.isLoggedIn = false
            this.user = null
        },
    },
})




// src/composables/useAuth.ts

// import { ref } from 'vue'

// export function useAuth() {
//   // Simulate a logged-in state
//   const isLoggedIn = ref<boolean>(false)
//   const user = ref<{ name: string } | null>(null)

//   // Function to simulate logging in
//   function login() {
//     isLoggedIn.value = true
//     user.value = { name: 'John Doe' }
//   }

//   // Function to simulate logging out
//   function logout() {
//     isLoggedIn.value = false
//     user.value = null
//   }

//   return {
//     isLoggedIn,
//     user,
//     login,
//     logout,
//   }
// }
