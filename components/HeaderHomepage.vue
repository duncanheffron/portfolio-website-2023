<template>
    <div class="header-homepage">
        <div class="header-homepage__image-carousel">
            <div class="scrolling-image-carousel">
                <div class="inner-wrapper">
                    <div class="column" v-for="column in columns" :key="column">
                        <div class="image-holder" v-for="(image, index) in column" :key="index">
                            <img :src="image.url" :alt="image.alt" />
                        </div>
                        <div class="image-holder" v-for="(image, index) in column" :key="index + 80">
                            <img :src="image.url" :alt="image.alt" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-homepage__content">
            <div class="inner-container">
                <h1 v-html="props.title"></h1>
                <p>{{ props.introduction }}</p>
                <div class="scroll-down">
                    <a href="#" class="btn"><span></span></a>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import galleryContent from '~/content/image-gallery.json'
import { shuffle } from 'lodash'

const { props } = defineProps(['props'])

const gallery = shuffle(galleryContent.images) // shuffle the array

const columns = [[], [], [], []] // create 4 empty columns

// divide images into 4 equal parts
for (let i = 0; i < gallery.length; i++) {
  columns[i % 4].push(gallery[i])
}
</script>

<script>
export default {
  setup() {
    return { columns, props }
  },
}
</script>

