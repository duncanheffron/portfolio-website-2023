<template>
  <div class="inner-container">
    <div class="about-me">
      <div class="about-me__content">
        <h2 class="like-h1 title" v-html="props.title"></h2>
        <div class="body" v-html="props.body"></div>

        <div class="skill-levels">
          <ul class="levels-list">
            <li class="level-item level-item--beginner" data-highlight-skill-level="beginner">
              <span></span>
              Beginner
            </li>
            <li class="level-item level-item--intermediate" data-highlight-skill-level="intermediate">
              <span></span>
              Intermediate
            </li>
            <li class="level-item level-item--proficient" data-highlight-skill-level="proficient">
              <span></span>
              Proficient
            </li>
            <li class="level-item level-item--expert" data-highlight-skill-level="expert">
              <span></span>
              Expert
            </li>
          </ul>
        </div>
      </div>

      <div class="about-me__skills">
        <div class="skill-row" v-for="(row, index) in splitSkills" :key="index">
          <div class="inner-wrapper">
            <BlockSkillLoopItem v-for="(skill, skillIndex) in row" :key="skillIndex" :skill="skill" />
            <BlockSkillLoopItem v-for="(skill, skillIndex) in row" :key="skillIndex + 7" :skill="skill" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { props } = defineProps(['props']);

const shuffledSkills = props.skills.slice().sort(() => Math.random() - 0.5);

const numRows = 7;
const numItemsPerRow = Math.ceil(shuffledSkills.length / numRows);

const splitSkills = Array.from({ length: numRows }, (_, i) => {
  const startIndex = i * numItemsPerRow;
  const endIndex = Math.min((i + 1) * numItemsPerRow, shuffledSkills.length);
  return shuffledSkills.slice(startIndex, endIndex);
});
</script>
