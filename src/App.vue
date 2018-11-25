<template>
  <div id="app">
    <AboutMe/>
    <Skills/>
    <Interests/>
    <Contact/>
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import Contact from "./components/Contact.vue";
import Interests from "./components/Interests.vue";
import Skills from "./components/Skills.vue";

export default {
  name: "app",
  components: {
    AboutMe,
    Contact,
    Interests,
    Skills
  }
};
</script>


<style>
#app {
  width: 420px;
  margin: 0 0 0 auto;

  font-family: 'Source Code Pro', monospace;
  color: #666;
  /* text-align: justify; */
}

@media only screen and (max-width: 540px) {
  #app {
    width: 100%;
  }
}
</style>