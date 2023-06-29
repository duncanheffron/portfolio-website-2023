<template>
  <div class="photo-book">

    <div class="photo-book-loop-item" v-for="(image, index) in props.images" :key="index">
      <picture class="image-holder">
        <nuxt-img :src="image.url" :alt="image.alt" sizes="xs:200px md:350px xl:400px xxl:800px" quality="100" loading="lazy" />
      </picture>
      <div class="image-caption">
        <p v-html="image.alt"></p>
      </div>
    </div>

  </div>
</template>

<script setup>
const { props } = defineProps(['props']);
</script>
