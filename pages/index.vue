<template>
  <div>
    <HeaderHomepage :props="content.header" />

    <div v-for="(item, index) in content.blocks" :key="index">
      <component :is="item.componentName" :props="item.props"></component>
    </div>
  </div>
</template>

<script setup>
useServerSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
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
