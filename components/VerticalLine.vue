<template>
    <div class="sm:hidden">
    <vue-slider
            v-model="currentDate"
            :max="period"
            :marks="marks"
            tooltip="none"
            direction="ttb"
            :height="300"
            class="horisontal"
          ></vue-slider>
    </div>
</template>

<script setup>
import VueSlider from "vue-slider-component/dist-css/vue-slider-component.umd.min.js";
import "vue-slider-component/dist-css/vue-slider-component.css";
import "vue-slider-component/theme/default.css";
import { DateTime } from "luxon";
const value = 0;
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
    let actualPeriod = DateTime.now().diff(startDate, "days").toObject().days;
    return Math.floor(actualPeriod);
});
</script>

<style lang="scss">
.vertical.vue-slider-dot {
  @apply h-7  #{!important};
}

</style>