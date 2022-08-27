<template>
  <div class="">
    <div class="relative">
      <picture class="relative z-10">
        <source
          srcset="~/static/img/about-transparent.webp"
          class="w-8/12 mx-auto"
        />
        <img
          src="~/static/img/about-transparent.png"
          loading="lazy"
          alt=""
          class="w-8/12 mx-auto"
        />
      </picture>
      <div
        class="
          bg-Color bg-gray-100
          hover:bg-pink-lite
          rounded-2xl
          absolute
          z-0
          bottom-0
          left-1/2
          shadow-lg
          duration-500
        "
      ></div>
    </div>
  </div>
</template>
<style scoped>
.bg-Color {
  height: 70%;
  border-radius: 2rem;
  width: 95%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
}
.bg-Color:hover {
  box-shadow: 0px 20px 2rem rgba(0, 0, 0, 0.25);
}
</style>