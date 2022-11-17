// 正常工作。
import MyBanner from "./src/plugins/PluginCompment.vue";

export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: (key: string) => string
    isbool: boolean
  }
}

declare module 'vue' {
  interface CSSProperties {
    [key: `--${string}`]: string
  }
}
