<template>
  <div class="text-center">
    <h1 class="text-4xl mb-4 timer">{{ formattedTime }}</h1>
    <ShotClock :timerStarts="timerStarts" :timerReset="timerReset" />

    <div class="space-x-2">
      <button id="startTimerBtn" @click="startTimer">Start</button>
      <button id="pauseTimerBtn" @click="pauseTimer">Pause</button>
      <button id="resetTimerBtn" @click="resetTimer">Reset</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ShotClock from './ShotClock.vue'

const minutes = ref(10) // starting at 10:00 minutes
const seconds = ref(0)
const timerStarts = ref(false)
const timerReset = ref(false)

let timerInterval: ReturnType<typeof setInterval> | undefined

const formattedTime = computed(() => {
  const mm = minutes.value.toString().padStart(2, '0')
  const ss = seconds.value.toString().padStart(2, '0')
  return `${mm}:${ss}`
})

function startTimer() {
  timerStarts.value = true
  timerReset.value = false
  if (timerInterval) return // prevent multiple intervals
  timerInterval = setInterval(() => {
    if (seconds.value === 0) {
      if (minutes.value === 0) {
        clearInterval(timerInterval)
        timerInterval = undefined
        alert('Time is up!') // or play a sound!
      } else {
        minutes.value--
        seconds.value = 59
      }
    } else {
      seconds.value--
    }
  }, 1000)
}

function pauseTimer() {
  timerStarts.value = false
  timerReset.value = false
  clearInterval(timerInterval)
  timerInterval = undefined
}

function resetTimer() {
  pauseTimer()
  timerStarts.value = false
  timerReset.value = true
  minutes.value = 10
  seconds.value = 0
}
</script>
