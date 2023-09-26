<template>
  <div class="w-full  sm:w-[500px] mr-[91px]">
    <h4 class="text-[23px] font-bold mb-6">
      Залиште заявку, і ми підберемо для вас умови зі знижкою
    </h4>
    <form class="w-full" @submit.prevent>
      <ui-field
        v-model="form.name"
        :label="`Ваше ім’я`"
        :placeholder="`Ваше ім’я`"
        :error="v$.name.$errors.map((er) => er.$message || '').join('. ') || ''"
        @blur="v$.name.$validate()"
      />
      <ui-field
        v-model.phone="form.phone"
        :label="`Номер телефону`"
        :placeholder="`Введіть Ваш номер телефону`"
        :error="
          v$.phone.$errors.map((er) => er.$message || '').join('. ') || ''
        "
        @blur="v$.phone.$validate()"
      />
      <ui-field
        v-model="form.email"
        :label="`Ваш e-mail`"
        :placeholder="`Введіть Ваш e-mail`"
        :error="
          v$.email.$errors.map((er) => er.$message || '').join('. ') || ''
        "
        @blur="v$.email.$validate()"
      />
      <div class="mt-5 mb-[64px] md:mb-0">
        <ui-btn
          :disabled="!form.name && !form.phone && !form.email"
          type="submit"
          @click="sendData"
          >Зареєструватись</ui-btn
        >
      </div>
    </form>
  </div>

</template>

<script setup>
import { useRules } from "../composables/useRules";
import { useVuelidate } from "@vuelidate/core";

import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification()

const { rules } = useRules();

const form = reactive({
  name: "",
  phone: "",
  email: "",
});
const v$ = useVuelidate(
  {
    name: rules.value.name,
    email: rules.value.email,
    phone: rules.value.phone,
  },
  form
);

const sendData = async () => {
  v$.value.$validate()
  if (v$.value.$invalid) return

  const dataToSend = {
    name: form.name,
    phone: form.phone,
    email: form.email,
  };

  try {
    const response = await fetch(
      "https://7eminar.ua/api/clients/campaign/test",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      }
    );
    console.log("response", response);
    if (response.ok) {
      notify({
        text: "Дані успішно відправлені на сервер",
        type: "success",
      });

      form.name = "";
      form.phone = "";
      form.email = "";
    } else {
      notify({
        text: "Bиникла помилка, спробуйте ще раз",
        type: "error",
      });
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped></style>
