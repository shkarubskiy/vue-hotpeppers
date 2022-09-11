import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SocialBlock from "@/components/SocialBlock.vue";
import PepperCard from "@/components/PepperCard.vue";

const app = createApp(App).use(store).use(router);
app.component("SocialBlock", SocialBlock);
app.component("PepperCard", PepperCard);
app.mount("#app");
