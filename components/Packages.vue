<template>
  <div class="bg-grey">
    <div class="md:w-[800px] mx-auto mb-10">
      <h2 class="text-[24px] text-[42px] font-bold text-center mb-4">
        Переплата На Вищу Бухгалтерську Онлайн-Академію
      </h2>
      <p class="text-[21px] font-bold text-center font-['Raleway']">
        Оберіть свій тарифний пакет:
      </p>
      <div class="sm:hidden flex justify-center">
        <timer />
      </div>
    </div>

    <div class="md:hidden">
      <div class="bg-white rounded-[20px] mb-4">
        <variant
          :top="true"
          :title="`СУПЕРПРОФЕСІОНАЛ`"
          :terms="`8 професійних курсів за ціною 2`"
          :price="1079"
          :currentPrice="679"
        />
        <div
          class="text-[15px] leading-[140%] w-[320px] mx-auto"
          v-for="item in filter"
          :key="item.text"
        >
          <div class="flex items-center justify-center py-2 font-['Raleway']">
            <mdicon name="check" size="16" />
            <div class="w-[320px] ml-2">
              <span
                v-if="item.new"
                class="text-white font-['Raleway'] bg-blue rounded-[3px] py-[3px] px-[5px] me-2"
                >NEW</span
              >
              {{ item.text }}
              <span
                class="text-blue font-['Raleway'] block"
                :class="{ inline: item.inline }"
                >{{ item.period }}</span
              >
            </div>
          </div>
        </div>
        <div class="mx-auto w-[255px]">
          <count />
        </div>
      </div>
      <div class="bg-white rounded-[20px] mb-4">
        <variant
          class="bg-white rounded-tr-[20px] rounded-tl-[20px]"
          :title="`ПРЕМІУМ`"
          :terms="`8 професійних курсів за ціною 2 + Бухгалтерська Відеоплатформа №1`"
          :price="1079"
          :currentPrice="679"
        />
        <div
          class="text-[15px] leading-[140%] w-[320px] mx-auto"
          v-for="item in data"
          :key="item.text"
        >
          <div
            class="flex items-center justify-center w-[320px] bg-white py-2 font-['Raleway']"
          >
            <mdicon name="check" size="16" />
            <div class="w-[320px] ml-2">
              <span
                v-if="item.new"
                class="text-white font-['Raleway'] bg-blue rounded-[3px] py-[3px] px-[5px] me-2"
                >NEW</span
              >
              {{ item.text }}
              <span class="text-blue block" :class="{ inline: item.inline }">{{
                item.period
              }}</span>
            </div>
          </div>
        </div>
        <div class="mx-auto w-[255px]">
          <count />
        </div>
      </div>
    </div>

    <div class="hidden md:block px-[32px] max-w-[1140px] mx-auto">
      <div class="flex text-sm font-['Raleway']">
        <div class="flex flex-col gap-[14px] w-1/3 items-center justify-center">
          <timer />
          <div
            class="w-[225px] text-center text-[15px] text-[#15154] font-['Raleway']"
          >
            (для діючих передплатників додаткова знижка 10%)
          </div>
        </div>
        <div class="flex w-1/3 items-center justify-center">
          <variant
            :top="true"
            :title="`СУПЕРПРОФЕСІОНАЛ`"
            :terms="`8 професійних курсів за ціною 2`"
            :price="1079"
            :currentPrice="679"
          />
        </div>
        <div
          class="flex w-1/3 items-center justify-center bg-blue/[.1] rounded-tl-[20px] rounded-tr-[20px]"
        >
          <variant
            :title="`ПРЕМІУМ`"
            :terms="`8 професійних курсів за ціною 2 + Бухгалтерська Відеоплатформа №1`"
            :price="1079"
            :currentPrice="679"
          />
        </div>
      </div>

      <div
        class="flex text-xs font-['Raleway'] text-[15px] leading-[140%] border-b border-black/[.1] max-w-[1140px]"
        v-for="item in data"
        :key="item.text"
      >
        <div class="w-1/3 items-center justify-center py-2">
          <div class="320px">
            <span
              v-if="item.new"
              class="text-white bg-blue rounded-[3px] py-[3px] px-[5px] me-2"
              >NEW</span
            >
            {{ item.text }}
            <span class="text-blue block" :class="{ inline: item.inline }">{{
              item.period
            }}</span>
          </div>
        </div>
        <div class="flex w-1/3 items-center justify-center text-green">
          <mdicon v-if="item.standart" name="check" size="32" />
          <mdicon v-else name="close" size="32" />
        </div>
        <div class="flex w-1/3 items-center justify-center bg-blue/[.1]">
          <mdicon v-if="item.premium" name="check" size="32" />
          <mdicon v-else name="close" size="32" />
        </div>
      </div>
      <div class="flex">
        <div
          class="flex flex-col gap-[14px] w-1/3 items-center justify-center"
        ></div>
        <div class="flex flex-col w-1/3 items-center justify-center">
          <count />
        </div>
        <div
          class="flex flex-col items-center w-1/3 bg-blue/[.1] rounded-bl-[20px] rounded-br-[20px]"
        >
          <count />
        </div>
      </div>
    </div>
    <div
      class="mx-auto mt-[22px] md:w-[740px] text-center font-['Raleway'] text-[17px] leading-[150%]"
    >
      <p>
        Оплачуйте пакети<span class="font-bold"> частинами без комісії!</span>
      </p>
      <p>
        Натискайте на кнопку <span class="font-bold">Оплатити карткою</span> та
        оформлюйте розстрочку
      </p>
      <p>через PrivatBank або Monobank</p>
    </div>
  </div>
</template>
<script setup>
const data = [
  {
    text: "Поглиблені професійні курси підвищення кваліфікації",
    period: "(8 курсів/рік)",
    new: false,
    standart: true,
    premium: true,
    inline: true,
  },
  {
    text: "Практичні курси автоматизації (робота в BAS, Medoc, Excel, ЕК)",
    new: true,
    standart: true,
    premium: true,
  },
  {
    text: "Закриті клубні лекції з експертами",
    period: "(1 р./ міс.)",
    new: true,
    standart: true,
    premium: true,
  },
  {
    text: "Майстер-класи зі змін у законодавстві",
    period: "(4 + р./ міс.)",
    standart: true,
    premium: true,
  },
  {
    text: "Безлімітні відповіді на запитання під час онлайн-навчання",
    standart: true,
    premium: true,
  },
  {
    text: "Тестові та практичні завдання зі зворотним зв'язком",
    standart: true,
    premium: true,
  },
  {
    text: "Роздатковий матеріал (корисні файли, брошури, презентації)",
    standart: true,
    premium: true,
  },
  {
    text: "Клуб однодумців у Viber та підтримка куратора",
    standart: true,
    premium: true,
  },
  {
    text: "Сертифікати після проходження курсів",
    standart: true,
    premium: true,
  },
  {
    text: "Доступ до",
    period: "Бухгалтерської Відеоплатформи №1:",
    standart: false,
    premium: true,
  },
  {
    text: "Відеокурси і вебінари",
    period: "(1100+ вже та 20+ щомісяця)",
    standart: false,
    premium: true,
  },
  {
    text: "Безлімітні швидкі консультації від експертів (сервіс ОК)",
    standart: false,
    premium: true,
  },
  {
    text: "Бланки та зразки документів",
    period: "(2000+ вже та 30+ щомісяця)",
    standart: false,
    premium: true,
  },
  {
    text: "Консультант з пошуку та підготовки документів ",
    period: "(безлімітно, щодня))",
    standart: false,
    premium: true,
  },
  {
    text: "Калькулятори",
    standart: false,
    premium: true,
  },
  {
    text: "Довідники",
    standart: false,
    premium: true,
  },
];

const filter = data.filter((el) => el.standart === true);
</script>

<style scoped></style>
