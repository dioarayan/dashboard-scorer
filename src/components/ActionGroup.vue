<template>
  <button @click="counterPlus">Two Points!</button>
  <button @click="addThree">Three Points!</button>
  <button @click="counterMinus">Decrement!</button>
  <button @click="clearScore">Clear!</button>
  <ActionButtons name="Sample" />
</template>

<script setup>
import { ref } from 'vue';
import ActionButtons from './ActionButtons.vue';

const props = defineProps(['count'])
const counter = ref(props.count)


</script>