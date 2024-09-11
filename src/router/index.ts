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
        path: "/:topicId/:topicSlug",
        name: "PostDetail",
        component: () => import("@/views/PostDetailView.vue"),
        props:true
      },
      {
        path:"/-/firekat",
        name: "General",
        component: () => import("@/views/GeneralView.vue"),
      },
      {
        path:"/-/new-topic",
        name: "PostTopic",
        component: () => import("@/views/PostTopicView.vue"),
      },
      {
        // path: "/-/newpost?topic=:topicId&post=:commentId",
        // path: "/-/:topicId/:commentId",
        path: "/-/makecomment",
        name: "MakeComment",
        component: () => import("@/views/MakeCommentView.vue"),
        props: route => ({ topicId: route.query.topic, commentId: route.query.post }),
      },
      {
      path: "/-/login",
      name: "Login",
      component: () => import("@/views/LoginView.vue"),
    },{
      path: "/-/signup",
      name: "Signup",
      component: () => import("@/views/SignupView.vue"),
    },
    {
      path: "/@:username",
      name: "User",
      component: () => import("@/views/UserView.vue"),
    },
    {
      path: "/-/science",
      name: "Science",
      component: () => import("@/views/ScienceView.vue"),
    },
    {
      path: "/-/entertainment",
      name: "Entertainment",
      component: () => import("@/views/EntertainmentView.vue"),
    },
    {
      path: "/-/crime",
      name: "Crime",
      component: () => import("@/falculties/general/Crime.vue"),
    },
    {
      path: "/-/romance",
      name: "Romance",
      component: () => import("@/falculties/general/Romance.vue"),
    },
    {
      path: "/-/career",
      name: "Career",
      component: () => import("@/falculties/general/Career.vue"),
    },
    {
      path: "/-/business",
      name: "Business",
      component: () => import("@/falculties/general/Business.vue"),
    },
    {
      path: "/-/investment",
      name: "Investment",
      component: () => import("@/falculties/general/Investment.vue"),
    },
    {
      path: "/-/nysc",
      name: "NYSC",
      component: () => import("@/falculties/general/Nysc.vue"),
    },
    {
      path: "/-/education",
      name: "Education",
      component: () => import("@/falculties/general/Education.vue"),
    },
    {
      path: "/-/autos",
      name: "Autos",
      component: () => import("@/falculties/general/Autos.vue"),
    },
    {
      path: "/-/properties",
      name: "Properties",
      component: () => import("@/falculties/general/Properties.vue"),
    },
    {
      path: "/-/health",
      name: "Health",
      component: () => import("@/falculties/general/Health.vue"),
    },
    {
      path: "/-/travel",
      name: "Travel",
      component: () => import("@/falculties/general/Travel.vue"),
    },
    {
      path: "/-/family",
      name: "Family",
      component: () => import("@/falculties/general/Family.vue"),
    },
    {
      path: "/-/culture",
      name: "Culture",
      component: () => import("@/falculties/general/Culture.vue"),
    },
    {
      path: "/-/religion",
      name: "Religion",
      component: () => import("@/falculties/general/Religion.vue"),
    },
    {
      path: "/-/food",
      name: "Food",
      component: () => import("@/falculties/general/Food.vue"),
    },
    {
      path: "/-/diaries",
      name: "Diaries",
      component: () => import("@/falculties/general/Diaries.vue"),
    },
    {
      path: "/-/pets",
      name: "Pets",
      component: () => import("@/falculties/general/Pets.vue"),
    },
    {
      path: "/-/politics",
      name: "Politics",
      component: () => import("@/falculties/general/Politics.vue"),
    },
    {
      path: "/-/jobs",
      name: "Jobs/vacancies",
      component: () => import("@/falculties/general/Jobs-vacancies.vue"),
    },
    {
      path: "/-/cars",
      name: "Car talk",
      component: () => import("@/falculties/general/Car-talk.vue"),
    },
    {
      path: "/-/ads",
      name: "Firekat ads",
      component: () => import("@/falculties/general/Firekat-ads.vue"),
    },
    {
      path: "/-/agriculture",
      name: "Agriculture",
      component: () => import("@/falculties/general/Agriculture.vue"),
    },
    {
      path: "/-/celebrities",
      name: "Celebrities",
      component: () => import("@/falculties/entertainment/Celebrities.vue"),
    },
    {
      path: "/-/events",
      name: "Events",
      component: () => import("@/falculties/entertainment/Events.vue"),
    },
    {
      path: "/-/fashion",
      name: "Fashion",
      component: () => import("@/falculties/entertainment/Fashion.vue"),
    },
    {
      path: "/-/forum-games",
      name: "Forum games",
      component: () => import("@/falculties/entertainment/ForumGames.vue"),
    },
    {
      path: "/-/gaming",
      name: "Gaming",
      component: () => import("@/falculties/entertainment/Gaming.vue"),
    },
    {
      path: "/-/jokes",
      name: "Jokes",
      component: () => import("@/falculties/entertainment/Jokes.vue"),
    },
    {
      path: "/-/literature",
      name: "Literature",
      component: () => import("@/falculties/entertainment/Literature.vue"),
    },
    {
      path: "/-/tv-movies",
      name: "Tv/movies",
      component: () => import("@/falculties/entertainment/Movies.vue"),
    },
    {
      path: "/-/music-radio",
      name: "Music/radio",
      component: () => import("@/falculties/entertainment/Music.vue"),
    },
    {
      path: "/-/sports",
      name: "Sports",
      component: () => import("@/falculties/entertainment/Sports.vue"),
    },
    {
      path: "/-/events",
      name: "Art, graphics & video",
      component: () => import("@/falculties/science/Arts.vue"),
    },
    {
      path: "/-/computers",
      name: "Computers",
      component: () => import("@/falculties/science/Computers.vue"),
    },
    {
      path: "/-/phones",
      name: "Phones",
      component: () => import("@/falculties/science/Phones.vue"),
    },
    {
      path: "/-/programming",
      name: "Programming",
      component: () => import("@/falculties/science/Programming.vue"),
    },
    {
      path: "/-/technology-market",
      name: "Technology market",
      component: () => import("@/falculties/science/TechnologyMarket.vue"),
    },
    {
      path: "/-/webmasters",
      name: "Webmasters",
      component: () => import("@/falculties/science/Webmasters.vue"),
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
