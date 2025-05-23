<template>
  <div>
    <h5 class="shotClockTimer">{{ formattedTime }}</h5>
  </div>
  <div class="space-x-2">
      <button class="startShotClock" @click="startShotClockTimer">Start</button>
      <button class="pauseShotClock" @click="pauseTimer">Pause</button>
      <button class="resetShotClock"@click="resetTimer">Reset</button>
      <button class="restartShotClock" @click="resetAndStartTimer">Restart</button>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const seconds = ref(23)
const milliseconds = ref(59)

let shotInterval:ReturnType<typeof setInterval> | undefined
let shotInterval1:ReturnType<typeof setInterval> | undefined

const formattedTime = computed(() => {
  const ss = seconds.value.toString().padStart(2, '0')
  const ms = milliseconds.value.toString().padStart(2, '0')
  return `${ss}:${ms}`
})

function startShotClockTimer() {
  if (shotInterval) return;

  shotInterval = setInterval(() => {
    if (milliseconds.value > 0) {
      milliseconds.value--;
    } else {
      if (seconds.value > 0) {
        seconds.value--;
        milliseconds.value = 59;
      } else {
        clearInterval(shotInterval);
        shotInterval = undefined;
        alert('Shot clock expired!');
      }
    }
  }, 16.66666666666666667);
}


function pauseTimer() {
  clearInterval(shotInterval)
  clearInterval(shotInterval1)
  shotInterval = undefined
  shotInterval1 = undefined
}

function resetTimer() {
  pauseTimer()
  seconds.value = 23
  milliseconds.value = 59
}

function resetAndStartTimer() {
  resetTimer()
  startShotClockTimer()
}
</script>