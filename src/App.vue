<template>
  <div class="bg-red-200 pt-3 dark:bg-gray-900 font-poppins">
    <div class="flex justify-between items-center">
      <!-- Always display the NavBar -->
      <NavBar />
      <adminLogin />
    </div>
    <!-- Router view to display the active route -->
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import adminLogin from './components/adminLogin.vue';

export default {
  components: {
    NavBar,
    adminLogin
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
</style>
