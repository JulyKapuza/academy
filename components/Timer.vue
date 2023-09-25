<template>
  <div>
    <p v-if="time <= 0">00:00:00</p>
    <div v-else class="flex gap-1">
      <div class="flex items-center flex-col gap-1">
        <span class="text-[29px] text-blue/[.3]">{{ formatHour(time) }}:</span>
        <span class="text-[15px] text-blue/[.3]">год</span>
      </div>
      <div class="flex items-center flex-col gap-1">
        <span class="text-[29px] text-blue/[.3]">{{ formatMinute(time) }}:</span>
        <span class="text-[15px] text-blue/[.3]">хв</span>
      </div>
      <div class="flex items-center flex-col gap-1">
        <span class="text-[29px] text-blue">{{ formatSecond(time) }}</span>
        <span class="text-[15px] text-blue">сек</span>
      </div>
    </div>
  </div>
</template>
<script setup>

import { DateTime } from "luxon";

const date = DateTime.fromObject({
  year: 2023,
  month: 10,
  day: 3,
  hour: 17,
  minute: 0,
});

const time = ref(date.diffNow());

const formatHour = (duration) => {
  const hours = Math.floor(duration.as("hours"));
  return `${hours < 10 ? "0" : ""}${hours}`;
};

const formatMinute = (duration) => {
  const minutes = Math.floor(duration.as("minutes") % 60);
  return `${minutes < 10 ? "0" : ""}${minutes}`;
};

const formatSecond = (duration) => {
  const seconds = Math.floor(duration.as("seconds") % 60);
  return `${seconds < 10 ? "0" : ""}${seconds}`;
};

const updateTimer = () => {
  time.value = date.diffNow();
  if (time.value <= 0) {
    clearInterval(timerInterval);
    time.value = DateTime.fromObject({ hour: 0, minute: 0, second: 0 });
  }
};

const timerInterval = setInterval(updateTimer, 1000);

onMounted(() => {
  updateTimer();
});
</script>



<style scoped></style>
