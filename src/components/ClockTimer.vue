<template>
  <div class="flex flex-col justify-around items-center
  ">
    <QuarterCount />
    <div class='flex flex-col items-center'>
      <div v-if="isEditing">
        <input
          ref="inputRef"
          v-model="formattedTime"
          @blur="saveClock"
          @keyup.enter="saveClock"
          class="text-center timerInput"
        />
      </div>
      <div v-else>
        <p class="text-6xl timer" @dblclick="startEditing">
          {{ formattedTime }}
        </p>
      </div>
      <ShotClock :timerStarts="timerStarts" :timerReset="timerReset" @pause-timer="pauseTimer" />
    </div>
    <div class="flex place-items-end-safex`">
      <div class="flex flex-row justify-center gap-2">
        <button class="resetShotClock"@click="resetShotClock">Reset</button>
      |
        <button id="startTimerBtn" @click="startTimer">Start</button>
      |
        <button id="pauseTimerBtn" @click="pauseTimer">Pause</button>
      |
        <button id="resetTimerBtn" @click="resetTimer">Clear  </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import ShotClock from './ShotClock.vue'
import QuarterCount from './QuarterCount.vue'

const minutes =  ref<number>(10) // starting at 10:00 minutes
const seconds = ref<number>(0)
const timerStarts = ref(false)
const timerReset = ref(false)
const isEditing = ref(false)
const inputRef = ref(null);

let timerInterval: ReturnType<typeof setInterval> | undefined

const formattedTime = computed({
  get() {
    const mm = minutes.value.toString().padStart(2, '0')
    const ss = seconds.value.toString().padStart(2, '0')
    return `${mm}:${ss}`
  },
  set(val: string) {
    const parts = val.split(':')
    if (parts.length === 2) {
      const mm = parseInt(parts[0])
      const ss = parseInt(parts[1])
      if (!isNaN(mm) && !isNaN(ss)) {
        minutes.value = mm
        seconds.value = ss
      }
    }
  }
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

function resetShotClock() {
  timerReset.value = true
}

function startEditing() {
  isEditing.value = true
  nextTick(() => {
    inputRef.value?.focus();
  });
}

function saveClock() {
  isEditing.value = false
  formattedTime.value //update
}
</script>
