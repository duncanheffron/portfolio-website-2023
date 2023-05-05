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
        <div class="skill-row" v-for="(row, index) in rows" :key="index">
          <div class="inner-wrapper">
            <BlockSkillLoopItem v-for="(skill, index) in row" :key="index" :skill="skill" />
            <BlockSkillLoopItem v-for="(skill, index) in row" :key="index + 7" :skill="skill" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import pkg from 'lodash'; 
const { shuffle } = pkg;

const { props } = defineProps(['props'])

const skills = shuffle(props.skills) // shuffle the array

const rows = [[], [], [], [], [], [], []] // create 7 empty rows

// divide images into 4 equal parts
for (let i = 0; i < skills.length; i++) {
  rows[i % 7].push(skills[i])
}
</script>
