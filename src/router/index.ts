import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("@/views/IndexView.vue"),
      meta: {
        public: true,
        redirect_if_authenticated: true,
      },
    },
    {
      path: "/header",
      name: "Header",
      component: () => import("@/views/HeaderView.vue"),
    },
    {
      path: "/footer",
      name: "Footer",
      component: () => import("@/views/FooterView.vue"),
    },
    {
        path: "/:postId",
        name: "PostDetail",
        component: () => import("@/views/PostDetailView.vue"),
      },
    {
      path: "/crime",
      name: "Crime",
      component: () => import("@/categories/Crime.vue"),
    },
    {
      path: "/romance",
      name: "Romance",
      component: () => import("@/categories/Romance.vue"),
    },
    {
      path: "/career",
      name: "Career",
      component: () => import("@/categories/Career.vue"),
    },
    {
      path: "/business",
      name: "Business",
      component: () => import("@/categories/Business.vue"),
    },
    {
      path: "/investment",
      name: "Investment",
      component: () => import("@/categories/Investment.vue"),
    },
    {
      path: "/nysc",
      name: "Nysc",
      component: () => import("@/categories/Nysc.vue"),
    },
    {
      path: "/education",
      name: "Education",
      component: () => import("@/categories/Education.vue"),
    },
    {
      path: "/autos",
      name: "Autos",
      component: () => import("@/categories/Autos.vue"),
    },
    {
      path: "/properties",
      name: "Properties",
      component: () => import("@/categories/Properties.vue"),
    },
    {
      path: "/health",
      name: "Health",
      component: () => import("@/categories/Health.vue"),
    },
    {
      path: "/travel",
      name: "Travel",
      component: () => import("@/categories/Travel.vue"),
    },
    {
      path: "/family",
      name: "Family",
      component: () => import("@/categories/Family.vue"),
    },
    {
      path: "/culture",
      name: "Culture",
      component: () => import("@/categories/Culture.vue"),
    },
    {
      path: "/religion",
      name: "Religion",
      component: () => import("@/categories/Religion.vue"),
    },
    {
      path: "/food",
      name: "Food",
      component: () => import("@/categories/Food.vue"),
    },
    {
      path: "/diaries",
      name: "Diaries",
      component: () => import("@/categories/Diaries.vue"),
    },
    {
      path: "/pets",
      name: "Pets",
      component: () => import("@/categories/Pets.vue"),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//     const isAuthenticated = //... check if the user is authenticated

//     if (to.meta.redirect_if_authenticated && isAuthenticated) {
//       next({ name: 'Dashboard' }); // Redirect to dashboard if logged in
//     } else {
//       next(); // Proceed to the route
//     }
//   });
