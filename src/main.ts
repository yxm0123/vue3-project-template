import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from '@/i18n'
createApp(App).use(store).use(router).use(VueI18n).mount("#app");
