<template>
  <div>
    <div v-for="education in educations" :key="education.id">
      <div class="text-sm sm:text-base">
        <h3 class="text-red-500 text-sm font-bold">{{ education.year }}</h3>
        <p>
          {{ education.discipline
          }}<span v-if="education.title"> - {{ education.title }}</span>
        </p>
        <h3>{{ education.school }}</h3>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['educations'],
})
</script>