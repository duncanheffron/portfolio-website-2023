<template>
    <div class="projects-highlight">

        <div class="projects-highlight__wrapper">
            <ProjectLoopItem v-for="(project, index) in props.projects" :key="index" :project="project"/>
        </div>

    </div>
</template>

<script setup>
const {props} = defineProps(['props']);
</script>
