<template>
  <button
    class="py-[18px] px-8 bg-blue text-white rounded-[32px] text-[17px] font-bold"
  >
    <slot></slot>
  </button>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
});
</script>

<style scoped></style>
