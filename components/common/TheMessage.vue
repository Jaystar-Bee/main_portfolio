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
        bg-black bg-opacity-60
      "
      @click="closeMessage"
    ></div>
    <div
      class="
        p-6
        absolute
        w-56
        z-40
        message
        bg-white
        shadow-lg
        max-w-xs
        rounded-lg
      "
      v-if="message"
    >
      <div class="flex justify-end mb-4">
        <picture>
          <source
            srcset="~/static/img/close.webp"
            type="image/webp"
            class="w-4"
            @click="closeMessage"
          />
          <img
            src="~/static/img/close.png"
            alt=""
            @click="closeMessage"
            class="w-4 cursor-pointer"
          />
        </picture>
      </div>
      <div class="mx-auto">
        <div class="mb-6">
          <h2 class="font-bold text-lg text-center">
            {{ message.title }}
          </h2>
        </div>
        <success-check></success-check>
        <div class="text-center mt-2">
          <p class="break-words font-semibold">{{ message.message }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['message'],
  methods: {
    closeMessage() {
      this.$emit('closeMessage')
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