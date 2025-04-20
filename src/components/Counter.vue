<template>
  <h2>{{ count }} </h2>
  <button @click="counterPlus">+1</button>
  <button @click="addThree">+3</button>
  <button @click="counterMinus">Delete</button>
  <button @click="clearScore">Clear!</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ActionButtons from './ActionButtons.vue';

const count = ref(0)

function counterPlus() {
  count.value += 1
}

function addThree() {
  count.value += 3
}

function counterMinus() {
  if (count.value <= 0) {
    alert("Counter should not be negative.")
  } else {
    count.value--
  }
}

function clearScore() {
  count.value = 0
}
</script>