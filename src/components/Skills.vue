<template>
  <div class="skills">
    <h2>Skills</h2>
    <ul>
      <li v-for="(skill, index) in skills" :key="index">{{ skill.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data: () => {
    return {
      skills: [
        { name: "Ruby on Rails" },
        { name: "Node.js" },
        { name: "Swift (iOS)" },
        { name: "React" },
        { name: "Vue.js" }
      ]
    };
  }
};
</script>

<style scoped>
</style>
