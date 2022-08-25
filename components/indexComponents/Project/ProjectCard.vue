<template>
  <li class="overflow-hidden bg-cover rounded-lg shadow-sm relative">
    <img
      :src="project.image"
      loading="lazy"
      alt=""
      class="w-full h-full object-cover duration-1000"
    />
    <div class="overdiv absolute z-10 top-0 text-white px-6 py-12">
      <div class="mt-10">
        <h3 class="text-xl font-bold my-2">{{ project.title }}</h3>
        <p class="font-semibold">{{ project.shortNote }}</p>
      </div>
      <div class="mt-6">
        <p class="text-sm md:text-base">{{ project.description }}</p>
        <a :href="project.link" target="_blank">
          <div
            class="
              bg-white
              w-10
              h-10
              rounded-full
              flex
              justify-center
              items-center
              mt-6
            "
          >
            <picture>
              <source
                srcset="~/static/img/external-link.webp"
                loading="lazy"
                type="image/webp"
                class="w-10"
              />
              <img
                src="~/static/img/external-link.png"
                loading="lazy"
                alt=""
                class="w-6"
              />
            </picture>
          </div>
        </a>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['project'],
})
</script>

<style scoped>
li {
  min-width: 20rem;
  width: 21rem;
  height: 28rem;
}
li:hover > .overdiv {
  transform: translateY(0);
}
img:hover {
  transform: scale(1.05);
}
.overdiv {
  transform: translateY(28rem);
  height: 100%;
  width: 100%;
  background: rgba(255, 0, 108, 0.9);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(121, 9, 88, 0.7) 25%,
    rgba(153, 0, 64, 0.9) 100%
  );
  transition: all 0.4s ease-in;
}
</style>