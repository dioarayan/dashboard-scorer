<script setup>
import ClockTimer from './components/ClockTimer.vue';
import Counter from './components/Counter.vue'
import ShotClock from './components/ShotClock.vue';
</script>

<template>
  <main class="max-w-full m-auto p-5 font-sans">
    <div class="flex justify-center">
      <ClockTimer />

      <Counter team-name="Home" />
      <Counter team-name="Visitor" />
    </div>
  </main>
</template>
