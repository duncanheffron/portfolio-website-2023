<template>
    <div class="skill-loop-item">
        <div :class="`level level--${skill.level}`" :data-skill-level="skill.level">
            <span></span><p v-html="skill.level"></p>
        </div>
        <p class="name" v-html="skill.name"></p>
    </div>
</template>

<script setup>
const {skill} = defineProps(['skill']);
</script>
