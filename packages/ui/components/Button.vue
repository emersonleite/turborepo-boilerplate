<script lang="ts" setup>
defineProps<{
  disabled?: boolean;
}>();

defineEmits<{
  (e: "click:myButton", value: string): void;
}>();
</script>

<template>
  <button
    class="btn"
    :disabled="disabled"
    @click="$emit('click:mybutton', 'hello from button')"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {
  padding: 1rem;
  border: none;
  background-color: blue;
  color: white;
  font-family: sans-serif;
}
</style>
