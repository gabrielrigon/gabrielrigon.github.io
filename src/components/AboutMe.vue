<template>
  <div class="about-me">
    <h1>Gabriel Rigon</h1>
    <h2>About me</h2>
    <p>
      <strong>"I'm <a
        href="http://batman.com"
        target="_blank"
        tabindex="-1"
        class="normal-text"
      >Batman</a>!"</strong> hahaha, I'm kidding... or not!?
      <br>
      <br>Currently working as
      <strong>Software Engineer and Technical Leader</strong> at
      <strong>Kazap Tecnologia</strong>. I love to code, technology, pizza and
      <a
        href="https://www.youtube.com/watch?v=TRqiFPpw2fY"
        target="_blank"
        tabindex="-1"
        class="normal-text"
      >rock and roll</a> 🤘🏼
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutMe"
};
</script>

<style scoped>
h1 {
  background-color: #bad5e2;
  color: white;
}

a.normal-text {
  text-decoration: none;
  cursor: text;
  outline: none;
}
</style>
