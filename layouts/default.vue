<template>
  <div class="font-body">
    <teleport to="body">
      <mobile-header @close="closeNav" v-if="navIsVisible"></mobile-header>
    </teleport>
    <div>
      <the-header @showNav="showNav"></the-header>
    </div>
    <Nuxt />
    <the-footer></the-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      navIsVisible: false,
    }
  },
  methods: {
    closeNav() {
      console.log('closing')
      this.navIsVisible = false
    },
    showNav() {
      this.navIsVisible = !this.navIsVisible
    },
  },
})
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
@keyframes blink {
  0% {
    background: rgba(0, 0, 0, 0.2);
  }
  50% {
    background: rgba(0, 0, 0, 0.1);
  }
  100% {
    background: rgba(0, 0, 0, 0.2);
  }
}
</style>