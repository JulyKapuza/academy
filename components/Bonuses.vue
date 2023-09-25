<template>
  <div class="w-[500px]">
    <h4 class="text-[23px] font-bold mb-6">
      З передплатою Академії ви отримаєте:
    </h4>
    <div class="flex gap-10">
      <div>
        <span class="text-[63px] text-blue">8+</span>
        <p class="text-[17px]">професійних курсів</p>
      </div>
      <div>
        <span class="text-[63px] text-blue">12</span>
        <p class="text-[17px]">закритих клубних лекцій</p>
      </div>
    </div>
    <div class="flex gap-10">
      <div>
        <span class="text-[63px] text-blue">48</span>
        <p class="text-[17px]">нових вебінарів та тренінгів</p>
      </div>
      <div>
        <span class="text-[63px] text-blue">{{ infinity }}</span>
        <p class="text-[17px]">
          Безлімітні відповіді на запитання протягом навчання
        </p>
      </div>
    </div>
    <div>
      <span class="text-[39px] text-blue">Тестові та практичні </span>
      <p class="text-[17px]">завдання зі зворотним зв'язком</p>
    </div>
  </div>
</template>
<script setup>
const infinity = '∞';
</script>

<style scoped>
</style>
