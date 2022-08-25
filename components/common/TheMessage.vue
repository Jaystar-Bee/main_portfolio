<template>
  <section>
    <div
      class="
        fixed
        top-0
        z-30
        h-full
        w-full
        backdrop-blur-lg
        bg-gray-500 bg-opacity-50
      "
    ></div>
    <div
      class="p-6 absolute z-40 message bg-white shadow-lg max-w-xs rounded-lg"
    >
      <div class="mx-auto">
        <div class="mb-6">
          <h2 class="font-bold text-lg text-center">
            {{ message.title }}
          </h2>
        </div>
        <div class="text-center">
          <p class="break-words">{{ message.message }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    message: {
      type: Object,
      default: { title: 'Success', message: 'Message' },
      required: true,
    },
  },
})
</script>
<style scoped>
.message {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>