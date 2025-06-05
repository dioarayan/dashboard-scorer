<template>
  <div>
    <div v-if="isEditing">
      <input
        ref="inputRef"
        type="text"
        v-model="localName"
        @blur="saveEdit"
        @keyup.enter="saveEdit"
        class="teamNameBase teamNameInput"
        placeholder="Enter team name" 
      />
    </div>
    <h3
      v-else
      class="teamNameBase cursor-editable"
      @click="startEditing"
    >
      {{ localName }}
    </h3>
  </div>
</template>

<style scoped>
.teamNameBase {
  text-align: center;
  padding-top: 2.5rem; /* py-10 */
  padding-bottom: 2.5rem;
  font-size: 1.5rem; /* text-2xl */
  font-weight: bold;
}

.teamNameInput {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
}
</style>


<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const isEditing = ref(false)
const localName = ref(props.modelValue)
const inputRef = ref<HTMLInputElement | null>(null)

watch(() => props.modelValue, (newVal) => {
  localName.value = newVal
})

function startEditing() {
  isEditing.value = true
  nextTick(() => {
    if (inputRef.value) {
      inputRef.value.focus()
      inputRef.value.select()
    }
  })
}

function saveEdit() {
  isEditing.value = false
  emit('update:modelValue', localName.value)
}
</script>
