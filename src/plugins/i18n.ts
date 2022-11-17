import type { App } from "vue";
import MyBanner from "./PluginCompment.vue";

export default {
  install: (app: App, options: any) => {
    app.component("my-banner", MyBanner);
    app.config.globalProperties.$translate = (key: string) => {
      return key.split(".").reduce((o, i) => {
        if (o) return o[i];
      }, options);
    };

    app.directive("font-size", (el, binding, vnode) => {
      console.log('v-font-size执行',binding.value);
    });
  },
};
