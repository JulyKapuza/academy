<template>
  <div class="bg-grey">
    <div class="w-[800px] mx-auto mb-10">
      <h2 class="text-[42px] font-bold text-center mb-4">
        Переплата На Вищу Бухгалтерську Онлайн-Академію
      </h2>
      <p class="text-[21px] font-bold text-center">
        Оберіть свій тарифний пакет:
      </p>
    </div>
    <div class="px-[32px] w-[1140px] mx-auto">
      <div class="flex text-sm">
        <div class="flex flex-col gap-[14px] w-1/3 items-center justify-center">
          <timer />
          <div class="w-[225px] text-center text-[15px] text-[#15154]">
            (для діючих передплатників додаткова знижка 10%)
          </div>
        </div>
        <div class="flex w-1/3 items-center justify-center">
          <variant :top="true" :title="`СУПЕРПРОФЕСІОНАЛ`" :terms="`8 професійних курсів за ціною 2`" :price="1079"
            :currentPrice="679" />
        </div>
        <div class="flex w-1/3 items-center justify-center bg-blue/[.1] rounded-tl-[20px] rounded-tr-[20px]">
          <variant :title="`ПРЕМІУМ`" :terms="`8 професійних курсів за ціною 2 + Бухгалтерська Відеоплатформа №1`"
            :price="1079" :currentPrice="679" />
        </div>
      </div>

      <div class="flex text-xs text-[15px] leading-[140%] border-b border-black/[.1]" v-for="item in data" :key="item.id">
        <div class="w-1/3 items-center justify-center py-2">
          <div class="320px">
            <span v-if="item.new" class="text-white bg-blue rounded-[3px] py-[3px] px-[5px] me-2">NEW</span>
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
        <div class="flex w-1/3 items-center justify-center text-red bg-blue/[.1]">
          <mdicon v-if="item.premium" name="check" size="32" />
          <mdicon v-else name="close" size="32" />
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col gap-[14px] w-1/3 items-center justify-center"></div>
        <div class="flex flex-col items-center w-1/3 items-center justify-center pt-6 pb-3">
          <div class="flex items-center justify-center mb-3">
            <div class="mr-[26px]">
              <p class="text-[13px] text-[#979797] line-through">
                1079 грн/міс
              </p>
              <p class="text-[17px] font-bold">679 грн/міс.</p>
            </div>
            <div
              class="flex items-center justify-center text-[10px] font-bold bg-blue rounded-full text-white w-[34px] h-[34px]">
              -75%
            </div>
          </div>
          <ui-btn>Завантажити рахунок</ui-btn>
        </div>
        <div class="flex flex-col items-center w-1/3 bg-blue/[.1] rounded-bl-[20px] rounded-br-[20px] pt-6 pb-3">
          <div class="flex items-center justify-center mb-3">
            <div class="mr-[26px]">
              <p class="text-[13px] text-[#979797] line-through">
                1079 грн/міс
              </p>
              <p class="text-[17px] font-bold">679 грн/міс.</p>
            </div>
            <div
              class="flex items-center justify-center text-[10px] font-bold bg-blue rounded-full text-white w-[34px] h-[34px]">
              -75%
            </div>
          </div>
          <ui-btn>Завантажити рахунок</ui-btn>
        </div>
      </div>
    </div>
    <div class="mx-auto mt-[22px] w-[740px] text-center text-[17px] leading-[150%]">
      <p>Оплачуйте пакети<span class="font-bold">частинами без комісії!</span> </p>
      <p>Натискайте на кнопку <span class="font-bold">Оплатити карткою</span> та оформлюйте розстрочку</p>
      <p>
        через PrivatBank або Monobank</p>

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
</script>



<style scoped></style>
