<template>
  <div class="inner-container">
    <div class="content-with-image content-with-image--light content-with-image--reversed">

      <div class="content-with-image__image">
        <div class="image-holder">
          <img :src="content.image" :alt="content.image_alt">
        </div>
      </div>

      <div class="content-with-image__content">
        <h2 class="like-h1 title" v-html="content.title"></h2>
        <div class="body">
          <p>{{ content.body }}</p>
        </div>
        <div class="buttons">
          <a href="#" class="main-btn">More about this trip</a>
          <a href="#" class="clear-btn">Other trips</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const { content } = defineProps(['content']);
</script>