<template>
  <div class="flex flex-col items-center font-['Raleway']">
    <div
      v-if="top"
      class="flex items-center gap-2 bg-yellow h-[26px] rounded-tl-[20px] rounded-tr-[20px] text-black mb-[11px] px-[20px] md:px-[59px] font-['Raleway']"
    >
      <div>
        <img src="../public/file/arrow.png" height="16" />
      </div>
      <p class="text-[12px] md:text-[15px] font-bold leading-[110%]">
        ХІТ ПРОДАЖУ
      </p>

      <div>
        <img src="../public/file/arrow.png" height="16" />
      </div>
    </div>
    <div v-else class="h-[26px] mb-[11px]"></div>
    <div
      class="flex items-center justify-center gap-4 items-center font-['Raleway']"
    >
      <p class="text-[13px] font-bold leading-[150%]">{{ title }}</p>
      <div
        class="flex items-center justify-center text-[10px] font-bold bg-blue rounded-full text-white w-[34px] h-[34px]"
      >
        -75%
      </div>
    </div>
    <div v-if="top" class="flex flex-col text-center text-[13px] font-medium">
      <span>8 професійних курсів</span>
      <span>за ціною 2</span>
    </div>
    <div v-else class="flex flex-col text-center text-[13px]">
      <span>8 професійних курсів за ціною 2 +</span>
      <span>Бухгалтерська Відеоплатформа №1</span>
    </div>
    <p class="text-[13px] text-[#979797] line-through">{{ price }} грн/міс</p>
    <p class="text-[17px] font-bold mb-3">{{ currentPrice }} грн/міс.</p>
    <ui-btn class="mb-3">Оплатити карткою</ui-btn>
    <p class="text-[13px] text-[#979797] underline pb-6">Оплатити частинами</p>
  </div>
</template>

<script setup>
const props = defineProps({
  top: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
  percent: {
    type: String,
  },
  terms: {
    type: String,
  },
  price: {
    type: Number,
  },
  currentPrice: {
    type: Number,
  },
});
</script>

<style scoped></style>
