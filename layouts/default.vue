<template>
  <div class="font-body">
    <div>
      <the-header></the-header>
    </div>
    <Nuxt />
    <the-footer></the-footer>
  </div>
</template>

<script>
export default {}
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