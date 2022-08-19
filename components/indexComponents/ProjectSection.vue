<template>
  <section class="my-40">
    <div class="container mx-auto">
      <div>
        <h1 class="text-3xl font-bold tracking-wide my-10">Projects</h1>
      </div>
      <ul
        class="flex items-center gap-10 lg:space-y-0 flex-wrap justify-center"
      >
        <project-card
          v-for="project in projects"
          :key="project.id"
          :project="project"
        >
        </project-card>
      </ul>
      <div class="flex justify-center mt-16">
        <the-button rounded class="bg-primary-blue text-white mx-auto"
          >See more</the-button
        >
      </div>
      <!----Follow me on social media component--->
      <div class="bg-black bg-opacity-10 rounded-lg py-10 mt-20">
        <project-follow></project-follow>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapGetters('data', ['projects']),
  },
})
</script>