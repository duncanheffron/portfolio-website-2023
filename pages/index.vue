<template>
  <div>
    <HeaderHomepage :props="content.header" />

    <main id="main" v-for="(item, index) in content.blocks" :key="index">
      <div class="inner-container">
          <component :is="item.componentName" :props="item.props"></component>
      </div>
    </main>
  </div>
</template>

<script setup>
useServerSeoMeta({
    title: 'Duncan Heffron — Personal portfolio',
    ogTitle: 'Duncan Heffron — Personal portfolio',
    description: 'A frontend web developer based in the Netherlands with roughly 5 years of experience. Who\'s driven to meet new people, which is why I spend most of my Saturday nights bartending.',
    ogDescription: 'A frontend web developer based in the Netherlands with roughly 5 years of experience. Who\'s driven to meet new people, which is why I spend most of my Saturday nights bartending.',
    ogImage: '',
    twitterCard: ''
});
</script>

<script>
import ExperienceSlider from '@/components/Experience/Slider.vue';
import BlockContentWithImage from '@/components/Block/ContentWithImage.vue';
import BlockAboutMe from '@/components/Block/AboutMe.vue';
import BlockProjectsHighlight from '@/components/Block/ProjectsHighlight';
import pageContent from '~/content/index.json'

export default {
  data() {
    return {
      content: pageContent
    }
  },
  components: {
    ExperienceSlider,
    BlockContentWithImage,
    BlockAboutMe,
    BlockProjectsHighlight
  }
}
</script>
