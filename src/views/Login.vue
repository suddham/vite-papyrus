<template>
  <div class="bg-gray-50">
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center
        lg:justify-between"
    >
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl
          sm:leading-10"
      >
        Login Page
        <br>
        <span class="text-indigo-600">Use Your Duo Login or Use App Defaults</span>
      </h2>
      <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <button
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium
              leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border
              border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"
            @click.prevent="login"
          >
            Login As Suddha
          </button>

          <BackHomeButton />
        </div>
      </div>
    </div>
    <pre>
      {{ duo }}
    </pre>
  </div>
</template>

<script>
import BackHomeButton from '@/components/BackHomeButton.vue';
// import { initDuoLogIn } from '@/utils/api';

export default {
    components: {
        BackHomeButton
    },
    data() {
        return {
            users: null,
            duo: null
        };
    },
    methods: {
        async login() {
            // this.duo = await initDuoLogIn();
        }
    }
};
</script>

<style scoped>

</style>
