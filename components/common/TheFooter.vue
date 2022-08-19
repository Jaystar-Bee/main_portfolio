<template>
  <div class="flex justify-evenly items-center py-10">
    <div>
      <h2>&copy; Jaystar</h2>
    </div>
    <social-media></social-media>
    <p @click="scrollUp" class="font-semibold cursor-pointer">
      scroll up &uarr;
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    scrollUp() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
})
</script>