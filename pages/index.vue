<template>
  <main>
    <teleport to="body">
      <the-message v-if="message"></the-message>
    </teleport>
    <the-jumbotron></the-jumbotron>
    <div>
      <about-section id="about"></about-section>
    </div>
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
  computed: {
    message() {
      return this.$route.query.message
    },
  },
})
</script>
