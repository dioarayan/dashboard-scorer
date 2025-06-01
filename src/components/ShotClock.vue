<template>
  <div class="p-4">
    <p class="shotClockTimer pb-8 text-3xl">{{ formattedTime }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onUpdated, ref } from 'vue';

const props = defineProps(['timerStarts', 'timerReset'])
const seconds = ref(24)
const milliseconds = ref(0)

let shotInterval:ReturnType<typeof setInterval> | undefined

const formattedTime = computed(() => {
  const ss = seconds.value.toString().padStart(2, '0')
  const ms = milliseconds.value.toString().padStart(2, '0')
  return `${ss}:${ms}`
})

onUpdated(() => {
  if(props.timerStarts == true && props.timerReset == false) {
    startShotClockTimer()
  } else if(props.timerStarts == false && props.timerReset == false) {
    pauseTimer()
  } else if(props.timerStarts == false && props.timerReset == true) {
    resetTimer()
  }
})

function startShotClockTimer() {
  if (shotInterval) return;

  shotInterval = setInterval(() => {
    if (milliseconds.value > 0) {
      milliseconds.value--;
    } else {
      if (seconds.value > 0) {
        seconds.value--;
        milliseconds.value = 9;
      } else {
        clearInterval(shotInterval);
        shotInterval = undefined;
        resetTimer()
      }
    }
  }, 100);
}


function pauseTimer() {
  clearInterval(shotInterval)
  shotInterval = undefined
}

function resetTimer() {
  pauseTimer()
  seconds.value = 24
  milliseconds.value = 0
}

function resetAndStartTimer() {
  resetTimer()
  startShotClockTimer()
}
</script>