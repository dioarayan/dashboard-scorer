<template>
  <div class="text-center">
    <h1 class="text-4xl mb-4">{{ formattedTime }}</h1>
    <div class="space-x-2">
      <button @click="startTimer">Start</button>
      <button @click="pauseTimer">Pause</button>
      <button @click="resetTimer">Reset</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const minutes = ref(10) // starting at 10:00 minutes
const seconds = ref(0)

let timerInterval: ReturnType<typeof setInterval> | undefined

const formattedTime = computed(() => {
  const mm = minutes.value.toString().padStart(2, '0')
  const ss = seconds.value.toString().padStart(2, '0')
  return `${mm}:${ss}`
})

function startTimer() {
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
  clearInterval(timerInterval)
  timerInterval = undefined
}

function resetTimer() {
  pauseTimer()
  minutes.value = 10
  seconds.value = 0
}
</script>
