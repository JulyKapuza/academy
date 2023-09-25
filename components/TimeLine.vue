<template>
    <div class="py-20">
        <h2 class="text-[42px] font-bold text-center">Навчання, яке працює!</h2>
        <h2 class="text-[42px] font-bold text-center mb-[58px]">
            Відкрийте для себе найпопулярніші курси
        </h2>
        <div class="flex max-w-[1000px] w-[70%] mx-auto mb-12">
            <div class="flex text-[18px] w-[30%]">
                <div class="w-[135px]">Ціни раннього бронювання</div>
            </div>

            <div class="flex text-[18px]">
                <div class="w-[135px] text-center">Подорожчання на 10%</div>
            </div>
            <div class="flex justify-center text-[18px] w-[25%]">
                <div class="w-[135px] text-center">Подорожчання на 15%</div>
            </div>
            <div class="flex w-[30%] justify-end text-[18px] text-end">
                <div class="w-[135px] text-end">Квитки вже закінчаться</div>
            </div>
        </div>
        <div class="w-[70%] max-w-[1000px] mb-10 mx-auto">
            <vue-slider v-model="currentDate" :max="period" :marks="marks" tooltip="none">
                <template #step="{ }">
                    <div style="
              border-left: 1px solid;
              margin-top: -5px;
            "></div>
                </template>
            </vue-slider>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'
import { DateTime } from "luxon";

const marks = {
    0: "",
    18: "21 вересня",
    28: "1 жовтня",
    42: "15 жовтня",
    61: "3 листопада",
};

const startDate = DateTime.fromISO("2023-09-03");
const endDate = DateTime.fromISO("2023-11-03");

const period = endDate.diff(startDate, "days").toObject().days;

const currentDate = computed(() => {

    let actualPeriod = DateTime.now().diff(startDate, "days").toObject().days
    return Math.floor(actualPeriod)
});

</script>

<style lang="scss">
//vue-slider
.vue-slider-rail {
  @apply h-[6px] rounded-none #{!important};
}

.vue-slider-dot {
  @apply h-7  #{!important};
}

.vue-slider-process {
  @apply bg-black rounded-none #{!important};
}

.vue-slider-dot-handle {
  @apply relative w-[33px] h-[33px] bg-yellow rounded-full border  #{!important};
}
.vue-slider-dot-handle::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 13px;
  height: 13px;
  background-color: black;
  border-radius: 50%;
}

.vue-slider-mark{
  @apply w-[3px] bg-black h-[17px] #{!important};
}

</style>