<template>
  <div>
    <h1><a href="http://www.javaboy.org" v-font-size="size">javaboy</a></h1>
    <h1 @click="click">点击</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let size = ref(10);
const click = () => {
  size.value = size.value + 1;
};
</script>
