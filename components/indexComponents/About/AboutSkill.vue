<template>
  <div>
    <div v-for="skill in skills" :key="skill.id">
      <div class="mb-6 text-sm sm:text-base">
        <h2 class="text-sm font-bold text-red-500 ml-2">{{ skill.title }}</h2>
        <p class="mt-2">{{ skill.description }}</p>
        <div
          class="
            flex
            items-center
            space-x-2
            md:space-x-4
            mt-2
            flex-wrap
            gap-2
            md:gap-4
          "
        >
          <div
            v-for="tool in skill.tools"
            :key="tool"
            class="bg-blue-lite text-white px-4 py-2 rounded-md"
          >
            <p>{{ tool }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['skills'],
}
</script>