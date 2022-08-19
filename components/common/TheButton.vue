<template>
  <button
    class="px-6 py-3 outline-none rounded-lg duration-500"
    :class="rounded ? `rounded-${rounded}` : ''"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    rounded: String,
    roundX: String,
    roundY: String,
  },
  computed: {
    // classRender() {
    //   return this.rounded ? `px-${this.roundX} py-${this.roundY}` : ''
    // },
  },
})
</script>