<template>
  <div>
    <label class="flex items-center px-1">
      <span class="text-base mb-[7px] text-black">{{ label }}</span>
    </label>
    <div
      :class="{ '!border-red': error }"
      class="flex relative w-full border border-black rounded-[32px] mb-4 transition"
    >
      <input
        :value="modelValue"
        class="block relative w-full px-4 py-3 h-full rounded-[32px] !bg-grey !outline-none transition text-start text-base"
        :type="type"
        :placeholder="placeholder"
        ref="input"
        @focus="isFocused = true"
        @blur="emits('blur'), (isFocused = false)"
        @input="emitValue"
      />
      <div class="absolute text-xs text-red top-[110%] start-0">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },

  error: {
    type: String,
  },
  modelModifiers: { default: () => {} },
  type: {
    type: String,
    default: "text",
  },
});
const isFocused = ref(false);
const input = ref(null);

const emits = defineEmits(["update:modelValue", "blur"]);

const emitValue = (e) => {
  let value = e.target.value;
  if (!value.length) emits("update:modelValue", "");
  if (props.modelModifiers?.phone) {
    value = value.replace(/[^\d]/g, "");
    value = value.length > 0 ? "+" + value : value;
  }
  e.target.value = value;
  emits("update:modelValue", `${value.trim()}`);
};
</script>

<style lang="scss" scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"],
input[type="number"]:hover,
input[type="number"]:focus {
  appearance: none;
  -moz-appearance: textfield;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button {
  display: none;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
