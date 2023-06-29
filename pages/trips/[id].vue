<template>
    <div>
        <Head>
            <Title>{{ content.title }} — Duncan Heffron</Title>
        </Head>

        <ExperienceHeader :props="content.header" />

        <main id="main" v-for="(item, index) in content.blocks" :key="index">
            <div class="inner-container">
                <component :is="item.componentName" :props="item.props"></component>
            </div>
        </main>
    </div>
</template>

<script setup>
const route = useRoute();
const { data: content } = await useAsyncData('Trip', () => queryContent(`/trips/${route.params.id}`).findOne());
</script>

<script>
import ExperienceSlider from '@/components/Experience/Slider.vue';
import BlockContentWithImage from '@/components/Block/ContentWithImage.vue';
import BlockAboutMe from '@/components/Block/AboutMe.vue';
import BlockProjectsHighlight from '@/components/Block/ProjectsHighlight';
import BlockPhotoBook from '@/components/Block/PhotoBook';

export default {
  components: {
    ExperienceSlider,
    BlockContentWithImage,
    BlockAboutMe,
    BlockProjectsHighlight,
    BlockPhotoBook,
  }
}
</script>
