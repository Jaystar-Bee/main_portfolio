<template>
  <section class="container pt-10 mx-auto relative overflow-hidden">
    <div>
      <jumbotron-circles></jumbotron-circles>
    </div>
    <div
      class="
        flex flex-col
        md:flex-row md:max-h-screen
        items-center
        overflow-hidden
      "
    >
      <!--Text on the jumbotron-->
      <div class="flex-1">
        <jumbotron-text></jumbotron-text>
      </div>
      <!--Picture on the jumbotron-->
      <div class="flex-1">
        <jumbotron-picture></jumbotron-picture>
      </div>
    </div>
  </section>
</template>