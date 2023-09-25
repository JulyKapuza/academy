<template>
  <div class="w-[500px] mr-[91px]">
    <h4 class="text-[23px] font-bold mb-6">
      Залиште заявку, і ми підберемо для вас умови зі знижкою
    </h4>
    <form class="w-full">
      <Field v-model="name" :label="`Ваше ім’я`" :placeholder="`Ваше ім’я`" :type="text" />
      <Field v-model="phone" :label="`Номер телефону`" :placeholder="`Введіть Ваш номер телефону`" :type="phone" />
      <Field v-model="mail" :label="`Ваш e-mail`" :placeholder="`Введіть Ваш e-mail`" :type="text" />
      <Btn>Зареєструватись</Btn>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Field from "@/components/ui/Field.vue";
import Btn from '@/components/ui/Btn.vue'
const name = ref("");
const phone = ref("");
const mail = ref("");
</script>


<style scoped></style>
