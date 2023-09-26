<template>
  <div class="md:w-[500px] mx-auto px-4">
    <h4 class="text-[23px] font-bold mb-6">
      З передплатою Академії ви отримаєте:
    </h4>
    <div class="grid grid-cols-2">
      <div>
        <span class="text-[63px] text-blue">8+</span>
        <p class="text-[17px]">професійних курсів</p>
      </div>
      <div>
        <span class="text-[63px] text-blue">12</span>
        <p class="text-[17px]">закритих клубних лекцій</p>
      </div>
      <div>
        <span class="text-[63px] text-blue">48</span>
        <p class="text-[17px]">нових вебінарів та тренінгів</p>
      </div>
      <div>
        <span class="text-[63px] text-blue">{{ infinity }}</span>
        <p class="text-[17px] w-[170px]">
          Безлімітні відповіді на запитання протягом навчання
        </p>
      </div>
    </div>

    <div class="font-['Raleway']">
      <span class="text-[24px] md:text-[39px] text-blue font-bold"
        >Тестові та практичні
      </span>
      <p class="text-[17px]">завдання зі зворотним зв'язком</p>
    </div>
  </div>
</template>
<script setup>
const infinity = "∞";
</script>

<style scoped></style>
