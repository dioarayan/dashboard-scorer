<script setup>
import ClockTimer from './components/ClockTimer.vue';
import Counter from './components/Counter.vue'
</script>

<template>
  <main>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Counter team="Home" />
        <ClockTimer />
        <Counter team="Visitor" />
    </div>
  </main>
</template>
