<template>
  <button
    class="bg-transparent px-6 py-3 duration-500"
    :class="rounded ? `rounded-${rounded}` : ''"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    rounded: String,
  },
  computed: {
    // classRender() {
    //   return this.rounded ? `rounded-${this.roundX} -${this.roundY}` : ''
    // },
  },
}
</script>