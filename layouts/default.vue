<template>
  <div class="font-body">
    <teleport to="body">
      <the-message
        v-if="message && showMessage"
        :message="message"
        @closeMessage="closeMessage"
      ></the-message>
      <mobile-header @close="closeNav" v-if="navIsVisible"></mobile-header>
    </teleport>
    <the-header @showNav="showNav"></the-header>
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
      showMessage: false,
    }
  },
  computed: {
    message(): any {
      const message = this.$route.query.message
      if (!message) {
        return
      }
      this.showMessage = true
      return {
        title: 'Success',
        message,
      }
    },
  },
  methods: {
    closeNav(): void {
      console.log('closing')
      this.navIsVisible = false
    },
    showNav(): void {
      this.navIsVisible = !this.navIsVisible
    },
    closeMessage() {
      this.showMessage = false
      this.$router.push('/')
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