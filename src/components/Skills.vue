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
        { name: "DevOps on AWS" },
        { name: "Docker" },
        { name: "Ruby on Rails" },
        { name: "Node" },
        { name: "React" },
        { name: "React Native" },
        { name: "VueJS" },
        { name: "MongoDB" },
      ]
    };
  }
};
</script>

<style scoped>
</style>
