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
useHead({
  title: 'Travel archive — Duncan Heffron',
  ogTitle: 'Travel archive — Duncan Heffron',
})
</script>

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
