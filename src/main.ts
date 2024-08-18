import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { router } from '@/router';
import HeaderView from "@/views/HeaderView.vue";
import FooterView from "@/views/FooterView.vue";
import Ads from "@/components/Ads.vue";



const app = createApp(App);
app.component('HeaderView',HeaderView);
app.component('FooterView',FooterView);
app.component("Ads",Ads);
app.use(router);
app.mount("#app");
