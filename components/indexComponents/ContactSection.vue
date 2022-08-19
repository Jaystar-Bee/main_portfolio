<template>
  <section class="py-28 md:py-40 bg-primary-yellow">
    <div class="container mx-auto flex flex-col md:flex-row justify-center">
      <div class="flex-1">
        <div class="text-center md:text-left w-11/12">
          <h1 class="text-2xl sm:text-3xl lg:text-6xl font-semibold">
            Contact Me
          </h1>
          <p class="mt-4">
            You can use the form to send your message(s) or use the details
            provided below.
          </p>
          <div class="flex items-center justify-evenly my-20">
            <div class="text-center">
              <div
                class="
                  w-10
                  h-10
                  bg-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  mx-auto
                  mb-2
                "
              >
                <picture>
                  <source srcset="~/static/img/email.webp" type="image/webp" />
                  <img src="~/static/img/email.png" alt="email" class="w-6" />
                </picture>
              </div>
              <p class="text-xs sm:text-base">jbayilara@gmail.com</p>
            </div>
            <div>
              <div
                class="
                  w-10
                  h-10
                  mb-2
                  mx-auto
                  bg-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                "
              >
                <picture>
                  <source
                    srcset="~/static/img/phone-call.webp"
                    type="image/webp"
                  />
                  <img
                    src="~/static/img/phone-call.png"
                    alt="email"
                    class="w-6"
                  />
                </picture>
              </div>
              <p class="text-xs sm:text-base">+234 90 3531 3391</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <contact-form></contact-form>
      </div>
    </div>
  </section>
</template>