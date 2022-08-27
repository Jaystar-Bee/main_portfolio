<template>
  <main>
    <teleport to="body">
      <the-message v-if="message"></the-message>
    </teleport>
    <the-jumbotron></the-jumbotron>
    <section class="bg-gray-300 py-40" id="about">
      <div class="flex flex-col-reverse md:flex-row relative container mx-auto">
        <div class="flex-1 mt-20 md:mt-0">
          <about-picture></about-picture>
        </div>
        <div class="flex-1 md:mt-20 lg:mt-40 2xl:mt-80">
          <about-text></about-text>
        </div>
      </div>
    </section>
    <!-- <about-section id="about"></about-section>
    </div> -->
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
