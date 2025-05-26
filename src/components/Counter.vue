<template>
  <div>
    <TeamName v-model="teamName" />
    <div>
      <h2 class="text-center bg-brand text-white text-xxs score-output">{{ count }} </h2>
    </div>
    <div>
      <button @click="counterPlus">+1</button>
      <button @click="addThree">+3</button>
      <button @click="counterMinus">Delete</button>
      <button @click="clearScore">Clear!</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TeamName from './TeamName.vue';
import ShotClock from './ShotClock.vue';

const teamName = ref("Home")
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