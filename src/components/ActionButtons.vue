<template>
  <button @click="perform">
    {{ name }}
  </button>
</template>

<script setup>
  defineProps(['name'])
</script>