<template>
  <header class="bg-white sticky z-50 top-0 dark:text-white">
    <nav
      class="
        container
        mx-auto
        px-4
        md:px-0
        py-6
        flex
        items-center
        justify-between
      "
    >
      <div>
        <p class="font-display text-bold uppercase text-red-500 text-xl">
          Jaystar
        </p>
      </div>
      <div>
        <!-- <div class="px-1 pr-2 py-1 bg-primary-yellow rounded-md"> -->
        <select
          name="theme"
          class="outline-none bg-transparent"
          v-model="theme"
          @change="changeTheme"
        >
          <option value="default">Default</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <!-- </div> -->
      </div>
      <div class="md:hidden">
        <picture>
          <source srcset="~/static/img/menu.png" class="w-6" />
          <img
            src="~/static/img/menu.png"
            class="w-6"
            alt=""
            @click="$emit('showNav')"
          />
        </picture>
      </div>
      <div class="hidden md:block">
        <ul class="flex items-center space-x-10 text-sm">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/#about">About</nuxt-link></li>
          <li><nuxt-link to="/#project">Project</nuxt-link></li>
          <li><nuxt-link to="/#contact">Contact</nuxt-link></li>
          <li class="relative">
            <nuxt-link to="/blog">Blog</nuxt-link>
            <span class="absolute text-xs text-red-500 -top-3 -right-4"
              ><p>new</p></span
            >
          </li>
          <li>
            <a download href="~/static/document/Ayilara Boluwatife John CV.pdf"
              >Download CV</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapGetters(['theme']),
    design() {
      if (this.theme == 'default') {
      }
    },
  },
  methods: {
    changeTheme() {
      console.log(this.theme)
    },
  },
})
</script>

<style scoped>
li > a {
  transition: border-bottom 0.2s ease-in-out;
  border: 3px transparent;
  height: 100%;
}
li > a:hover {
  border-bottom: rgb(227, 68, 68) 3px solid;
}
.nuxt-link-exact-active {
  color: #f68e5f;
}
</style>