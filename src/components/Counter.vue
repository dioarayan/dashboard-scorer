<template>
  <div class="flex flex-col items-center">
    <TeamName v-model="teamName" />
    <div>
      <p class="text-center bg-brand text-white text-[10rem] score-output">
        {{ count }} 
      </p>
    </div>
    <div class="grid grid-cols-[minmax(80px,_2fr)_minmax(80px,_2fr)] grid-row-2">
      <button class="scoreController" @click="counterPlus">+1</button>
      <button class="scoreController" @click="addThree">+3</button>
      <button class="scoreController" @click="counterMinus">Delete</button>
      <button class="scoreController" @click="clearScore">Clear!</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TeamName from './TeamName.vue';

const props = defineProps(["team"])

const teamName = ref(props.team)
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