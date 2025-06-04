<template>
  <div class='flex flex-col items-center'>
    <p class='text-lg'> Quarter </p>
    <p class='text-4xl quarter' @click='incrementQuarter()'> {{ count }} </p>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const count = ref(1)

function incrementQuarter() {
  if(count.value >= 4){
    count.value = 1
  } else {
    count.value++
  }
}
</script>