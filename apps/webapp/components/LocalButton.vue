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
    class="btn ar"
    :disabled="disabled"
    @click="$emit('click:myButton', 'hello from button')"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {
  &.ar {
    padding: 1rem;
    border: none;
    background-color: rebeccapurple;
    color: white;
    font-family: sans-serif;
  }
}
</style>
