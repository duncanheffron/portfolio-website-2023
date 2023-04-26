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
          <SwiperSlide v-for="(item, index) in items" :key="index">
            <ExperienceLoopItem :experience="item" />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  </div>
</template>

<script setup>
  const items = [
    {
      'company': 'Wauw Agency',
      'title': 'Frontend Developer',
      'description': 'Here I work on a diversity of Wordpress websites, build with custom and pre build plug-ins to server our needs. All websites where hand build from a skeleton theme developed in house.',
      'start_date': '2021-02-01',
      'end_date': null,
    },
    {
      'company': 'De Boterlap',
      'title': 'Bartender',
      'description': 'On Saturday nights, I work as a bartender at De Boterlap in Harderwijk. I took up this job to meet more people after moving to this new city, and also because I enjoy working with a diverse group of individuals.',
      'start_date': '2022-09-01',
      'end_date': null,
    },
    {
      'company': 'Merkmeester',
      'title': 'Frontend Developer',
      'description': 'Here I worked on diverse Wordpress websites, build with custom and pre build plug-ins to server our needs. All websites where hand build from a skeleton theme developed in house.',
      'start_date': '2021-02-01',
      'end_date': '2022-01-01',
    },
    {
      'company': 'ShareValue',
      'title': 'Frontend Developer',
      'description': 'At ShareValue, I work as a front-end developer on a secondment basis. Additionally, I also worked with the internal web team to bring the website up to the new standard.',
      'start_date': '2020-02-01',
      'end_date': '2022-01-01',
    },
    {
      'company': 'Jobs & Media Group',
      'title': 'Frontend Developer',
      'description': 'At ShareValue, I work as a front-end developer on a secondment basis. Additionally, I also worked with the internal web team to bring the website up to the new standard.',
      'start_date': '2019-09-01',
      'end_date': '2020-01-01',
    }
  ]
</script>