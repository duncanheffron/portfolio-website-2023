<template>
  <div class="inner-container">
    <div class="experience-slider">

      <div class="experience-slider__header">
        <p class="title">Experience</p>

        <div class="slider-navigation">
          <div class="slide-nav prev swiper-button-prev" data-slide-nav="prev">
            <div class="icon"></div>
          </div>
          <div class="slide-nav next swiper-button-next" data-slide-nav="next">
            <div class="icon"></div>
          </div>
        </div>
      </div>

      <div class="experience-slider__slider">
        <Swiper 
          :modules="[SwiperNavigation]" 
          :slides-per-view="1" 
          :space-between="20"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :breakpoints="{
            1280: {
              slidesPerView: 3,
              spaceBetween: 45
            },
            1024: {
              slidesPerView: 2.25,
              spaceBetween: 35
            },
            768: {
              slidesPerView: 1.75,
              spaceBetween: 35
            }
          }"
          >
          <SwiperSlide v-for="(item, index) in props.Experiences" :key="index">
            <ExperienceLoopItem :experience="item" />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  </div>
</template>

<script setup>
const { props } = defineProps(['props']);
</script>
