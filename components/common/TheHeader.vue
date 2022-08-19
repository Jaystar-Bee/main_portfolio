<template>
  <header class="bg-white sticky top-0">
    <nav class="container mx-auto py-6 flex items-center justify-between">
      <div>
        <p class="font-display text-bold uppercase text-red-500 text-xl">
          Jaystar
        </p>
      </div>
      <div>
        <p>theme</p>
      </div>
      <div class="hidden md:block">
        <ul class="flex items-center space-x-10 text-sm">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/#about">About</nuxt-link></li>
          <li><nuxt-link to="/#project">Project</nuxt-link></li>
          <li><nuxt-link to="/#contact">Contact</nuxt-link></li>
          <li class="relative">
            <nuxt-link to="/blog">Blog</nuxt-link>
            <span class="absolute text-xs text-red-500 -top-3 -right-4"
              ><p>new</p></span
            >
          </li>
          <li><nuxt-link to="/">Dowload CV</nuxt-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
li > a {
  transition: border-bottom 0.2s ease-in-out;
  border: 3px transparent;
  height: 100%;
}
li > a:hover {
  border-bottom: rgb(227, 68, 68) 3px solid;
}
.nuxt-link-exact-active {
  color: #f68e5f;
}
</style>