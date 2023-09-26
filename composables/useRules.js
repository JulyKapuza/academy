import { computed } from "vue";
import {
  required,
  email,
  helpers,
  minLength,
  maxLength,
} from "@vuelidate/validators";

export const useRules = () => {
  const rules = computed(() => {
    return {
      required: {
        required: helpers.withMessage("Заповніть поле", required),
      },
      name: {
        required: helpers.withMessage("Заповніть поле", required),
        min: helpers.withMessage(`Введіть коректне ім’я`, minLength(2)),
      },
      phone: {
        required: helpers.withMessage("Введіть коректний номер", required),
      },
      email: {
        required: helpers.withMessage("Заповніть поле", required),
        email: helpers.withMessage("Введіть коректний e-mail", email),
      },
    };
  });

  return { rules };
};
