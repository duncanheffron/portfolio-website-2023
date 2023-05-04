<template>
    <div class="project-loop-item">

        <div class="project-loop-item__image">
            <div class="image-holder">
                <img :src="project.image.url" :alt="project.image.alt">
            </div>
        </div>

        <div class="project-loop-item__header">
            <p class="title">{{ project.title }}</p>
            <p class="short">{{ project.short }}</p>
        </div>

    </div>
</template>

<script setup>
const {project} = defineProps(['project']);
</script>
