<template>
  <main>
    <the-jumbotron></the-jumbotron>
    <about-section id="about"></about-section>
    <project-section id="project"></project-section>
    <contact-section id="contact"></contact-section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  head() {
    return {
      title: 'Home',
    }
  },
})
</script>
