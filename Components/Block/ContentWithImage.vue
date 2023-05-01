<template>
  <div class="inner-container">
    <div class="content-with-image content-with-image--light content-with-image--reversed">

      <div class="content-with-image__image">
        <div class="image-holder">
          <img :src="props.image.url" :alt="props.image.alt">
        </div>
      </div>

      <div class="content-with-image__content">
        <h2 class="like-h1 title" v-html="props.title"></h2>
        <div class="body">
          <p>{{ props.body }}</p>
        </div>
        <div class="buttons">
          <NuxtLink v-for="(button, index) in props.buttons" :key="index" :to="button.url" :class="button.class">{{ button.title }}</NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const { props } = defineProps(['props']);
</script>
