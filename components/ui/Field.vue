<template>
    <label class="flex items-center px-1">
        <span class="text-base mb-[7px] text-black/[.2]">{{ label }}</span>
    </label>
    <div :class="{ '!border-blue/[.2]': isFocused }"
        class="flex w-full border border-black/[.1] rounded-[32px] mb-4 transition">
        <input :value="modelValue"
            class="block w-full px-4 py-3 h-full !bg-transparent !outline-none transition text-start text-base" :type="type"
            :placeholder="placeholder" ref="input" @focus="isFocused = true" @blur="isFocused = false" @input="emitValue" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
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
    modelValue: {
        type: String,
    },
});
const isFocused = ref(false);
const input = ref(null);

const emits = defineEmits(["update:modelValue"]);

const emitValue = (e) => {
    emits("update:modelValue", e.target.value);
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
