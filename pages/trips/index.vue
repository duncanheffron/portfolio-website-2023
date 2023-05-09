<template>
  <div>
    <HeaderHomepage :props="content.header" />

    <main id="main" v-for="(item, index) in content.blocks" :key="index">
      <component :is="item.componentName" :props="item.props"></component>
    </main>
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
