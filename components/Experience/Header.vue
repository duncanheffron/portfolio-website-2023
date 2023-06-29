<template>
    <header class="header-experience">
        <div class="header-experience__image">
          <div class="image-holder">
            <nuxt-img :src="props.image.url" :alt="props.image.alt" sizes="xs:640px md:720px xl:1280px xxl:1900px" quality="100" loading="lazy" />
          </div>
        </div>
        <div class="header-experience__content">
            <div class="inner-container">
                <h1 v-html="props.title"></h1>
                <p v-html="props.intro"></p>
                <div class="scroll-down">
                    <a href="#goto-main" class="btn" data-scroll-link><span></span></a>
                </div>
            </div>
        </div>
    </header>
</template>


<script setup>
import { onMounted } from 'vue'
import galleryContent from '~/content/image-gallery.json'
import pkg from 'lodash'; 
const { shuffle } = pkg;

const { props } = defineProps(['props'])

const gallery = shuffle(galleryContent.images) // shuffle the array

const columns = [[], [], [], []] // create 4 empty columns

// divide images into 4 equal parts
for (let i = 0; i < gallery.length; i++) {
  columns[i % 4].push(gallery[i])
}

onMounted(() => {
  document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#goto-"]')) {
      e.preventDefault();
      var target = e.target.getAttribute('href');
      var offset = 75;

      if (target.length) {
        target = '#' + target.substring(6, target.length);
        window.scrollTo({
          top: document.querySelector(target).offsetTop - offset,
          behavior: 'smooth'
        });
      }
    }
  });

});
</script>

<script>
export default {
  setup() {
    return { columns, props }
  },
}
</script>


