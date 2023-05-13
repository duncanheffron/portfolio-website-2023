<template>
    <div class="project-loop-item">

        <div class="project-loop-item__image">
            <picture class="image-holder">
                <nuxt-img :src="project.image.url" :alt="project.image.alt" sizes="xs:100vw md:50vw xl:800px xxl:1600px xxxl:2560px" quality="100" loading="lazy" />
            </picture>
        </div>

        <div class="project-loop-item__header">
            <p class="title">{{ project.title }}</p>
            <p class="short">{{ project.short }}</p>
        </div>

        <div class="project-loop-item__arrow">
            <span class="icon"></span>
        </div>

    </div>
</template>

<script setup>
const {project} = defineProps(['project']);
</script>
