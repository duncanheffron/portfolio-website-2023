<template>
  <div>
    <HeaderHomepage :props="content.header" />

    <div v-for="(item, index) in content.blocks" :key="index">
      <component :is="item.componentName" :props="item.props"></component>
    </div>
  </div>
</template>

<script>
import BlockContentWithImage from '@/components/Block/ContentWithImage.vue';
import pageContent from '~/content/trips/index.json'

export default {
  data() {
    return {
      content: pageContent
    }
  },
  components: {
    BlockContentWithImage,
  }
}
</script>
