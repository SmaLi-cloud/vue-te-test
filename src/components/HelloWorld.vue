<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  watchEffect,
  defineEmits,
  inject,
  toRefs,
} from "vue";
import type { Ref } from "vue";
interface defineProps {
  msg: string;
  modelValue: string;
  modelModifiers?: {
    capitalize: boolean
  };
  staff: {
    name: string;
    sex?: string;
  };
}
const props = defineProps<defineProps>();
  type test = Partial<defineProps>

const emit = defineEmits<{
  (e: "change", val: number): void;
  (e: "update:modelValue", val: string): void;
}>();

const a = ref(1);
const b = ref(2);
// const HelloRef = ref<InstanceType<MyBanner> | null>()

const injectName = inject<Ref<string>>("count");

let addSum = computed<string | Ref<number>>(() => {
  if (a.value > 1) {
    return "ss";
  }
  return ref(a.value + b.value);
});
const TFun = () => {

}
watch(a, (newValue, oldValue) => {
  console.log(`a从${oldValue}变成了${newValue}`);
});
watchEffect(() => {
  console.log(addSum.value);
  if (injectName) {
    console.log("inject", injectName.value);
  }
});
const addA = () => {
  a.value++;
};
const emitClick = () => {
  emit("change", 3);
};
const emitModel = () => {
  if (props.modelModifiers) {
    let value =
      props.modelValue.charAt(0).toUpperCase() + props.modelValue.slice(1);
    emit("update:modelValue", value+"s ");
  }
};
defineExpose({
  a,
  b,
});
</script>

<template>
  <div class="greetings">
    <h1>{{ $translate('greetings.hello') }}</h1>
    <div style="{ '--bg-color': 'blue' }">
      <my-banner></my-banner>
    
    </div>
    <h1 class="green">{{ props.msg }}</h1>
    <h1 class="green">{{ props.staff.name }}</h1>
    <h1 class="green" v-if="props.staff.sex">{{ staff.sex }}</h1>
    <h3>你成功创建了一个项目</h3>
    <div>
      <div>{{ a }}</div>
      <div>{{ b }}</div>
      <div>{{ addSum }}</div>
      <div @click="addA">a相加</div>
      <div @click="emitClick">Emit点击</div>
      <div>{{ props.modelValue }}</div>
      <div @click="emitModel">v-model点击</div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
