<template>
  <div>
    <div
      class="
        fixed
        top-0
        z-40
        h-full
        w-full
        backdrop-blur-lg
        bg-black bg-opacity-60
        duration-500
      "
      @click="closeModal"
    ></div>
    <div
      class="
        max-w-xs
        w-72
        bg-white
        absolute
        rounded-md
        z-50
        nav
        py-6
        px-4
        duration-300
      "
    >
      <div class="mb-10 flex justify-end">
        <picture>
          <source srcset="~/static/img/close.webp" type="image/webp" />
          <img
            src="~/static/img/close.png"
            class="w-4"
            alt="close"
            @click="closeModal"
          />
        </picture>
      </div>
      <div>
        <ul class="w-full">
          <li
            class="
              pb-4
              mb-4
              text-center
              border-b-2 border-gray-400
              font-semibold
            "
            @click="closeModal"
          >
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li
            class="
              pb-4
              mb-4
              text-center
              border-b-2 border-gray-400
              font-semibold
            "
            @click="closeModal"
          >
            <nuxt-link to="/blog">Blog</nuxt-link>
          </li>
          <li
            class="
              pb-4
              mb-4
              text-center
              border-b-2 border-gray-400
              font-semibold
            "
            @click="closeModal"
          >
            <nuxt-link to="#contact">Contact</nuxt-link>
          </li>
          <li class="pb-4 mb-4 text-center font-semibold" @click="closeModal">
            <a
              download
              class="w-full h-full"
              href="/document/Ayilara Boluwatife John CV.pdf"
              >Download CV</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
})
</script>

<style scoped>
.nav {
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>