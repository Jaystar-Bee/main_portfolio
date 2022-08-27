<template>
  <div class="min-h-screen">
    <div class="container mx-auto">
      <div>
        <picture>
          <source srcset="~/static/img/empty.webp" class="mx-auto w-5/12" />
          <img
            src="~/static/img/empty.svg"
            alt=""
            class="mx-auto w-1/2 sm:w-5/12"
          />
        </picture>
      </div>
      <div class="mt-10 text-center">
        <h2 class="font-bold text-xl mb-4">There is no Post yet</h2>
        <p>
          Please check out another time Check out another time
          <nuxt-link to="/" class="text-primary-pink"
            >Click here to go home</nuxt-link
          >
        </p>
      </div>
    </div>
  </div>
</template>