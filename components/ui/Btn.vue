<template>
  <button
    :type="type"
    class="py-[18px] px-8 bg-blue text-white rounded-[32px] text-[12px] md:text-[17px] font-bold hover:bg-[#3333A7] font-['Raleway']"
    :class="{ 'bg-black/[.5] pointer-events-none': disabled }"
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
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped></style>
