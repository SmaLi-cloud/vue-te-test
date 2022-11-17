import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import i18nPlugin from "./plugins/i18n";
import '../translate'

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(i18nPlugin, {
  greetings: {
    hello: "这是一个插件的翻译",
  },
});

app.mount("#app");
