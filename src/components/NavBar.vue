<template>
  <nav class="relative flex justify-center items-center m-4 h-10 w-1/3 mx-auto rounded-xl border-4
    border-[#654321] dark:border-[#F0F0F0] bg-[#F5F5DC] dark:bg-[#65432133] text-[#654321] dark:text-[#F0F0F0] overflow-hidden">
    
    <!-- Use router-link for navigation -->
    <router-link 
      v-for="(link, index) in links" 
      :key="index" 
      :to="link.path" 
      class="relative z-10 px-4 py-1 transition-all duration-300 ease-in-out overflow-hidden" 
      :class="{ 'font-bold': isActive(link.path) }"
      @click="setActiveLink(link.path)">
      {{ link.name }}
      <span 
        class="absolute bottom-0 left-0 w-full h-0.5 bg-[#654321] dark:bg-[#F0F0F0] transform scale-x-0 transition-transform duration-300 ease-in-out"
        :class="{ 'scale-x-100': isActive(link.path) }"
      ></span>
    </router-link>

    <!-- Add Dark Mode Toggle -->
    <DarkModeToggle class="absolute right-2" />
  </nav>
</template>

<script>
import DarkModeToggle from './DarkModeToggle.vue'

export default {
  components: {
    DarkModeToggle
  },
  data() {
    return {
      links: [
        { name: 'Home', path: '/' },
        { name: 'A New Low', path: '/anewlow' },
        { name: 'Music', path: '/music' },
        { name: 'Book Us', path: '/bookUs'}
      ],
      activeLink: '/'
    }
  },
  methods: {
    isActive(path) {
      return this.activeLink === path
    },
    setActiveLink(path) {
      this.activeLink = path
    }
  },
  mounted() {
    // Set initial active link based on current route
    this.activeLink = this.$route.path
  }
}
</script>

<style scoped>
.router-link-active {
  @apply font-bold;
}

.router-link-active span {
  @apply scale-x-100;
}
</style>
