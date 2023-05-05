<template>
  <div class="experience-loop-item">

    <header>
      <p class="company">{{ experience.company }}</p>
    </header>

    <main>
      <h2 class="title">{{ experience.title }}</h2>
      <p class="description">{{ experience.description }}</p>
    </main>

    <footer>
      <p class="date-range">{{ formatDate(experience.start_date) }} — {{ experience.end_date ? formatDate(experience.end_date) : 'Current' }}</p>
    </footer>

  </div>
</template>

<script setup>
  const { experience } = defineProps(['experience']);

  function formatDate(time) {
    const date = new Date(time);
    
    // Get year, month, and day part from the date
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.toLocaleString("default", { day: "2-digit" });
    
    return `${month} ${year}`;
  }
</script>
