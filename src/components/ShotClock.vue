<template>
  <div class="text-center">
    <div v-if='isEditing'>
      <input
        ref="inputRef"
        v-model="seconds"
        @blur='saveShotClock'
        @keyup.enter='saveShotClock'
        class='text-center'
      />
    </div>
    <div v-else>
      <p class="text-4xl shotClockTimer" @click="startEditing">{{ seconds }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onUpdated, ref, watch } from 'vue';

const emit = defineEmits(['pauseTimer'])
const props = defineProps(['timerStarts', 'timerReset'])
const seconds = ref(24)
const isEditing = ref(false)
const inputRef = ref(null)

let shotInterval:ReturnType<typeof setInterval> | undefined

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
    if (seconds.value > 0) {
      seconds.value--;
    } else {
      clearInterval(shotInterval);
      shotInterval = undefined;
      pauseTimer()
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(shotInterval)
  shotInterval = undefined
}

function resetTimer() {
  pauseTimer()
  seconds.value = 24
}

function saveShotClock() {
  isEditing.value = false
  seconds.value
}

function startEditing() {
  isEditing.value = true
  nextTick(() => {
    inputRef.value.focus()
  })
}

watch(seconds, (newVal) => {
  if(newVal == 0) {
    emit('pauseTimer')
  }
})
</script>