<template>
  <div>
    <div class="text-center md:text-left w-11/12 md:w-full mx-auto break-words">
      <p>Hey!</p>
      <h2
        class="
          text-xl
          md:text-3xl
          font-bold
          md:font-semibold
          mt-2
          tracking-widest
        "
      >
        I'm <span class="text-primary-pink uppercase">John Ayilara</span>.
      </h2>
      <h3 class="textlg md:text-2xl font-semibold mt-2 tracking-wider">
        a Front<span class="text-red-500">-</span>end Developer from Nigeria.
      </h3>
      <div class="mt-6 lg:mt-10">
        <p>
          I manage website development projects from initial design through
          completion and optimize it all cross-browser and multi-platform
          compatibility. I have <span class="text-red-500">4+</span> years
          experience in web development.
        </p>
      </div>
    </div>
    <div
      class="
        mt-4
        lg:mt-6
        flex
        items-center
        space-x-10
        md:space-x-20
        justify-center
        md:justify-start
      "
    >
      <p>Follow me</p>
      <social-media></social-media>
    </div>
    <div
      class="
        mt-4
        xl:mt-8
        flex
        items-center
        space-x-4
        md:space-x-10
        justify-center
        md:justify-start
      "
    >
      <a href="mailto:jbayilara@gmail.com">
        <the-button
          class="
            bg-primary-blue
            text-white
            border-4 border-primary-blue
            hover:border-primary-pink hover:bg-primary-pink
            text-xs
            md:text-base
          "
          rounded="lg"
          >Email me</the-button
        >
      </a>
      <a href="~/static/document/Ayilara Boluwatife John CV.pdf" download>
        <button-outline
          class="
            border-4 border-primary-pink
            hover:bg-primary-pink hover:text-white
            text-xs
            md:text-base
          "
          rounded="lg"
          >Download CV</button-outline
        >
      </a>
    </div>
  </div>
</template>