<template>
  <div class="w-11/12 mx-auto">
    <form
      action="https://api.sheetmonkey.io/form/eYKkWTrAQUyDCn8J1eDmcx"
      method="post"
    >
      <div class="mb-6">
        <label for="Email" class="block mb-4"
          >Email <span class="text-red-500">*</span></label
        >
        <input
          type="text"
          name="Email"
          placeholder="your email"
          class="outline-none px-6 py-4 rounded-md w-full font-semibold"
          ref="email"
        />
      </div>
      <div class="mb-6">
        <label for="Name" class="block mb-4"
          >Name <span class="text-red-500">*</span></label
        >
        <input
          type="text"
          name="Name"
          placeholder="your name"
          class="outline-none px-6 py-4 rounded-md w-full font-semibold"
          ref="name"
        />
      </div>
      <div>
        <label for="message" class="block mb-4"
          >Message <span class="text-red-500">*</span></label
        >
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="message"
          class="outline-none px-6 py-4 rounded-md w-full"
          ref="message"
        ></textarea>
      </div>
      <div class="flex justify-end mt-6">
        <button
          type="submit"
          class="px-6 py-4 bg-primary-blue text-white rounded-md"
        >
          Send message
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
textarea {
  resize: none;
}
</style>