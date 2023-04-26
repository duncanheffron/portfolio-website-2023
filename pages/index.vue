
import ContentWithImage from '~/Components/ContentWithImage.vue';

<template>
  <div>
    <HeaderHomepage />
    <ExperienceSlider />
    <ContentWithImage :content="contentBlock" />
  </div>
</template>

<script setup>
const contentBlock = {
  'title': '<span class="text-highlight">Disneyland</span><br> Paris 2023',
  'body': 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor.',
  'image': 'https://picsum.photos/1250/800',
  'image_alt': 'Example image'
}
</script>
