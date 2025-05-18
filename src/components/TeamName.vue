<template>
  <div>
    <div v-if="isEditing">
      <input
        v-model="localName"
        @blur="saveEdit"
        @keyup.enter="saveEdit"
        class="text-center"
      />
    </div>
    <h3
      v-else
      class="text-center py-10 cursor-pointer"
      @click="startEditing"
    >
      {{ localName }}
    </h3>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const isEditing = ref(false)
const localName = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  localName.value = newVal
})

function startEditing() {
  isEditing.value = true
}

function saveEdit() {
  isEditing.value = false
  emit('update:modelValue', localName.value)
}
</script>
