<template>
  <div class="relative z-10 mt-32 md:mt-0">
    <Suspense>
      <picture>
        <source
          srcset="~/static/img/jumbo-transparent.webp"
          type="image/webp"
          class="w-10/12 mx-auto relative z-10"
        />
        <img
          src="~/static/img/jumbo-transparent.png"
          alt=""
          class="w-10/12 mx-auto relative z-10"
        />
        <div
          class="
            h-5/6
            w-10/12
            border-10 border-primary-pink
            bg-primary-pink
            rounded-full
            absolute
            bottom-0
            right-6
          "
        ></div>
      </picture>
      <template #fallback>
        <div class="blink w-40 h-40 bg-gray-500"></div> </template
    ></Suspense>
  </div>
</template>
    </Suspense>
  </div>
</template>
<style scoped>
.blink {
  animation: blink 1s ease-in-out infinite;
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