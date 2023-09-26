<template>
  <section class="pb-6 sm:pb-12">
    <div class="text-center mb-10">
      <p class="text-[17px] text-black mb-[22px] font-['Raleway']">
        Вища Бухгалтерська Online-академія
      </p>
      <h1 class="text-[24px] md:text-[42px] font-bold mb-[22px] leading-[150%]">
        <span class="block w-[100%]">Підвищення кваліфікації</span>
        та профперепідготовка для бухгалтерів
      </h1>
      <ui-btn> Обрати навчання >> </ui-btn>
    </div>
    <div class="md:hidden">
      <swiper
        :slidesPerView="2"
        :spaceBetween="5"
        :centeredSlides="true"
        :modules="modules"
        class="w-full mb-5 flex !overflow-visible pb-4 pt-5"
      >
        <swiper-slide
          ><img src="../public/file/prof.png" alt="" height="594" width="290"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="../public/file/lec.png"
            alt=""
            height="594"
            width="290"
            class="-mt-[27px] mb-[27px]" /></swiper-slide
        ><swiper-slide>
          <img src="../public/file/increase.png" alt="" height="594" width="290"
        /></swiper-slide>
      </swiper>
    </div>

    <div class="hidden md:flex justify-center gap-[26px] pt-[47px] mb-10">
      <img src="../public/file/prof.png" alt="" height="594" />
      <img  src="../public/file/lec.png" alt="" class="-mt-[47px] mb-[47px]" />
      <img src="../public/file/increase.png" alt="" />
    </div>
    <div class="md:w-[889px] text-center mx-auto px-[60px]">
      <p class="text-4 sm:text-[23px] font-bold leading-[150%]">
        Разом дешевше! Купуйте передплату на Вищу Бухгалтерську Online-Академію
        <span class="text-blue">8 професій за ціною 2</span>
      </p>
    </div>
  </section>
</template>

<script setup>
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

register();
</script>

<style>
.swiper-container {
  width: 100%;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.swiper-slide-active {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
