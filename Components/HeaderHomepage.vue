<template>
  
  <div class="header-homepage">

    <div class="header-homepage__image-carousel">
      <div class="scrolling-image-carousel">
        <div class="inner-wrapper">
          <div class="column">
            <img src="https://picsum.photos/750" alt="alt">
            <img src="https://picsum.photos/740" alt="alt">
            <img src="https://picsum.photos/730" alt="alt">
            <img src="https://picsum.photos/760" alt="alt">
            <img src="https://picsum.photos/750" alt="alt">
            <img src="https://picsum.photos/740" alt="alt">
            <img src="https://picsum.photos/730" alt="alt">
            <img src="https://picsum.photos/760" alt="alt">
          </div>
          <div class="column">
            <img src="https://picsum.photos/950" alt="alt">
            <img src="https://picsum.photos/940" alt="alt">
            <img src="https://picsum.photos/930" alt="alt">
            <img src="https://picsum.photos/960" alt="alt">
            <img src="https://picsum.photos/950" alt="alt">
            <img src="https://picsum.photos/940" alt="alt">
            <img src="https://picsum.photos/930" alt="alt">
            <img src="https://picsum.photos/960" alt="alt">
          </div>
          <div class="column">
            <img src="https://picsum.photos/650" alt="alt">
            <img src="https://picsum.photos/640" alt="alt">
            <img src="https://picsum.photos/630" alt="alt">
            <img src="https://picsum.photos/660" alt="alt">
            <img src="https://picsum.photos/650" alt="alt">
            <img src="https://picsum.photos/640" alt="alt">
            <img src="https://picsum.photos/630" alt="alt">
            <img src="https://picsum.photos/660" alt="alt">
          </div>
          <div class="column">
            <img src="https://picsum.photos/850" alt="alt">
            <img src="https://picsum.photos/840" alt="alt">
            <img src="https://picsum.photos/830" alt="alt">
            <img src="https://picsum.photos/860" alt="alt">
            <img src="https://picsum.photos/850" alt="alt">
            <img src="https://picsum.photos/840" alt="alt">
            <img src="https://picsum.photos/830" alt="alt">
            <img src="https://picsum.photos/860" alt="alt">
          </div>
        </div>
      </div>
    </div>

    <div class="header-homepage__content">
      <div class="inner-container">

        <h1 v-html="props.title"></h1>
        <p>{{ props.introduction }}</p>

        <div class="scroll-down">
          <a href="#" class="btn"><span></span></a>
        </div>

      </div>
    </div>

  </div>

</template>

<script setup>
const { props } = defineProps(['props']);
</script>
