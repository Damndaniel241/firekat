// src/composables/useAuth.ts

import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();

export function

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
