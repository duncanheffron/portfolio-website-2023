<template>
  <section class="inner-container">
    <div :class="`content-with-image content-with-image--${props.background} content-with-image--${props.order}`">

      <div class="content-with-image__image">
        <div class="image-holder">
          <nuxt-img :src="props.image.url" :alt="props.image.alt" sizes="xs:100vw md:50vw xl:800px xxl:1600px xxxl:2560px" quality="100" loading="lazy" />
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
  </section>
</template>

<script setup>
const { props } = defineProps(['props']);
</script>
