<template>
  <div>
    <div v-for="experience in experiences" :key="experience.id">
      <div class="mb-6 text-sm sm:text-base">
        <h2 class="text-sm text-red-500 font-semibold">
          {{ experience.start }} - {{ experience.end }}
        </h2>
        <p>{{ experience.company }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['experiences'],
})
</script>