<template>
    <div class="inner-container">
        <div class="projects-highlight">

            <div class="projects-highlight__wrapper">
                <ProjectLoopItem v-for="(project, index) in props.projects" :key="index" :project="project"/>
            </div>

        </div>
    </div>
</template>

<script setup>
const {props} = defineProps(['props']);
</script>
