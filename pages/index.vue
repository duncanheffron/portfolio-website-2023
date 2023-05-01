<template>
  <div>
    <HeaderHomepage :props="content.header" />

    <div v-for="(item, index) in content.blocks" :key="index">
      <component :is="item.componentName" :props="item.props"></component>
    </div>
  </div>
</template>

<script>
import ExperienceSlider from '@/components/Experience/Slider.vue';
import BlockContentWithImage from '@/components/Block/ContentWithImage.vue';
import BlockAboutMe from '@/components/Block/AboutMe.vue';
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
    BlockAboutMe
  }
}
</script>
