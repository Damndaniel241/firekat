import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/",
            name:"Index",
            component: () => import("@/views/IndexView.vue"),
            meta: {
                public: true,
                redirect_if_authenticated: true,
              },
        },
        {
            path:"/header",
            name:"Header",
            component: () => import("@/views/HeaderView.vue")
        },
        {
            path:"/footer",
            name:"Footer",
            component: () => import("@/views/FooterView.vue")
        }
    ]
})



// router.beforeEach((to, from, next) => {
//     const isAuthenticated = //... check if the user is authenticated
  
//     if (to.meta.redirect_if_authenticated && isAuthenticated) {
//       next({ name: 'Dashboard' }); // Redirect to dashboard if logged in
//     } else {
//       next(); // Proceed to the route
//     }
//   });
  