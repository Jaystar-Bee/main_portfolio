<template>
  <div>
    <div class="md:ml-4 w-11/12 md:w-full mx-auto">
      <h2 class="uppercase text-4xl font-bold md:ml-6 text-center md:text-left">
        About me
      </h2>
      <div class="mt-10 text-center md:text-left break-words">
        <p class="text-base">
          Hello, my name is John
          <span class="text-primary-pink">Ayilara</span>. I'm a web developer, a
          frontend developer to be precised. I mostly use Vuejs/Nuxtjs framework
          to build application. I have 4+ experience in using javascript.
        </p>
        <p class="mt-2">
          Check out the tabs below to know a little more about me 🤞
        </p>
      </div>
      <div class="mt-6">
        <div
          class="mb-2 h-1 rounded-lg w-11/12 bg-gray-700 mx-auto md:mx-0"
        ></div>
        <div
          class="
            flex
            items-center
            space-x-6
            text-lg
            font-semibold
            justify-center
            md:justify-start
          "
        >
          <h4
            class="cursor-pointer hover:text-primary-pink duration-300"
            @click="changeComponent('about-skill')"
            :class="{ 'text-primary-pink': activeComp == 'about-skill' }"
          >
            Skills
          </h4>
          <h4
            class="cursor-pointer hover:text-primary-pink duration-300"
            @click="changeComponent('about-education')"
            :class="{ 'text-primary-pink': activeComp == 'about-education' }"
          >
            Education
          </h4>
          <h4
            class="cursor-pointer hover:text-primary-pink duration-300"
            @click="changeComponent('about-experience')"
            :class="{ 'text-primary-pink': activeComp == 'about-experience' }"
          >
            Experience
          </h4>
        </div>
        <div class="skill mt-8 bg-white rounded-lg px-4 py-4">
          <transition mode="out-in">
            <suspense>
              <component
                :is="activeComp"
                :skills="skills"
                :educations="educations"
                :experiences="experiences"
              ></component>
              <template #fallback>
                <div class="mb-4">
                  <div class="blink h-2 w-8 bg-gray-600"></div>
                  <div class="blink h-2 w-12 bg-gray-600"></div>
                </div>
                <div class="mb-4">
                  <div class="blink h-2 w-8 bg-gray-600"></div>
                  <div class="blink h-2 w-12 bg-gray-600"></div>
                </div>
                <div class="mb-4">
                  <div class="blink h-2 w-8 bg-gray-600"></div>
                  <div class="blink h-2 w-12 bg-gray-600"></div>
                </div>
              </template>
            </suspense>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  data() {
    return {
      activeComp: 'about-skill',
    }
  },
  computed: {
    ...mapGetters('data', ['skills', 'educations', 'experiences']),
  },
  methods: {
    changeComponent(comp: string): void {
      this.activeComp = comp
    },
  },
})
</script>

<style scoped>
.v-enter-from {
  transform: translateX(-5rem);
}
.v-enter-to,
.v-leave-from {
  transform: translateX(0);
}
.v-leave-active {
  transition: all 0.5s ease-out;
}
.v-enter-active {
  transition: all 0.5s ease-in;
}

.v-leave-to {
  transform: translateX(5rem);
}
.skill {
  min-height: 25rem;
}
</style>