<template>
  <div id="404-layout">
    <Title v-if="error.statusCode === 404">404 Page not found — Duncan Heffron</Title>
    <Title v-else>An error occurred — Duncan Heffron</Title>
    <header class="header-experience">
      <div class="header-experience__image">
        <div class="image-holder">
<!--          <nuxt-img :src="props.image.url" :alt="props.image.alt" sizes="xs:640px md:720px xl:1280px xxl:1900px" quality="100" loading="lazy" />-->
        </div>
      </div>
      <div class="header-experience__content">
        <div class="inner-container">
          <h1 v-if="error.statusCode === 404"><span>{{error.statusCode}}</span> Page snapped out of existence</h1>
          <h1 v-else>An error occurred</h1>
          <p>Sometimes, even the mightiest pages can fall victim to cosmic forces. Don't worry, it happens to the best of us. Embrace the unpredictability of the digital universe!</p>
          <br>
          <br>
          <button @click="handleError" class="main-btn main-btn--diap">Seek Sanctuary in the Homepage</button>
        </div>
      </div>
    </header>
    <div class="inner-container">
      <BlockCallToAction :props="content.call_to_action" />
    </div>
    <footer class="footer">
      <div class="inner-container">

        <div class="footer__brand">
          <NuxtLink to="/"><span class="text-highlight">Duncan</span> Heffron</NuxtLink>
        </div>

        <div class="footer__nav">
          <ul>
            <li><NuxtLink to="/projects">Projects</NuxtLink></li>
            <li><NuxtLink to="/trips">Trips</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>

      </div>
    </footer>
  </div>
</template>

<script setup>
import Header from '~/components/Experience/Header.vue';

const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })

</script>

<script>
import footerContent from '~/content/footer.json'

export default {
  data() {
    return {
      content: footerContent
    }
  }
}
</script>
