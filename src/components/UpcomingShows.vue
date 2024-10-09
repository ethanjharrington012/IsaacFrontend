<template>
  <div class="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-200 to-purple-200 dark:from-gray-800 dark:to-purple-900 transition-colors duration-300">
    <div class="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <h1 class="text-4xl font-extrabold text-center mb-6 text-blue-600 dark:text-blue-400 underline">
        Upcoming Shows
      </h1>
      
      <div v-for="(show, index) in shows" :key="index" class="mb-4">
        <div class="flex justify-between items-center bg-purple-300 dark:bg-purple-700 border-2 border-purple-500 dark:border-purple-400 rounded-md p-4 cursor-pointer hover:bg-purple-400 dark:hover:bg-purple-600 transition-colors duration-200"
          @click="toggleDescription(index)">
          <div>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-white">{{ show.title }}</h2>
            <p class="text-sm text-gray-700 dark:text-gray-300">{{ show.date }}</p>
          </div>
          <!-- SVG icon that rotates -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-blue-500 dark:text-blue-300 transition-transform duration-300 ease-in-out hover:text-blue-400 dark:hover:text-blue-200"
            :class="{'rotate-180': show.showDescription}"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <!-- Show description if toggled -->
        <div v-if="show.showDescription" class="bg-purple-100 dark:bg-purple-800 border border-purple-300 dark:border-purple-600 rounded-md mt-2 p-3">
          <div class="flex">
            <img :src="getImageUrl(show.image)" alt="Show image" class="w-24 h-24 object-cover rounded-md mr-4">
            <p class="text-gray-800 dark:text-gray-200">{{ show.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shows: [
        {
          title: "The Rock Fest",
          date: "October 15, 2024",
          description: "Join us for an electrifying night of rock music featuring some of the best local bands.",
          showDescription: false,
          image: 'albumArt.jpeg',
        },
        {
          title: "Jazz Nights",
          date: "October 22, 2024",
          description: "A soothing evening of jazz with performances from renowned musicians.",
          showDescription: false,
          image: 'albumArt.jpeg',
        },
        {
          title: "Pop Extravaganza",
          date: "November 5, 2024",
          description: "Get ready for a night full of pop hits and performances by top artists.",
          showDescription: false,
          image: 'albumArt.jpeg',
        },
        {
          title: "Indie Vibes",
          date: "November 12, 2024",
          description: "A celebration of indie music with some of the freshest acts on the scene.",
          showDescription: false,
          image: 'albumArt.jpeg',
        }
      ]
    };
  },
  methods: {
    toggleDescription(index) {
      this.shows[index].showDescription = !this.shows[index].showDescription;
    },
    getImageUrl(name) {
      return new URL(`../assets/${name}`, import.meta.url).href;
    }
  }
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
