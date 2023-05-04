<template>
    <div class="skill-loop-item">
        <p :class="`level level--${levelString}`" :data-skill-level="levelString"><span></span>{{ levelString }}</p>
        <p class="name">{{ skill.name }}</p>
    </div>
</template>

<script setup>
const {skill} = defineProps(['skill']);

const levelString = computed(() => {
  if (skill.level === 0) {
    return 'beginner';
  } else if (skill.level === 1) {
    return 'intermediate';
  } else if (skill.level === 2) {
    return 'proficient';
  } else if (skill.level === 3) {
    return 'expert';
  } else {
    return 'Unknown';
  }
});
</script>
