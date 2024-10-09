<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 pb-10 transition-colors duration-300 bg-[#F5F5DC] text-[#654321] dark:bg-[#271BA7] dark:text-[#FFFFFF]">
    <h1 class="text-4xl font-bold mb-4 transition-colors duration-300 text-[#654321] dark:text-[#FF69B4]">
    Welcome to A New Low!
    </h1>
    <h2 class="text-2xl mb-6 transition-colors duration-300 text-[#654321] dark:text-[#E6E6FA]">
    Our music is available on all major streaming platforms.
    </h2>

    <!-- Updated image and pine tree emoji layout -->
    <div class="flex items-center space-x-8 m-10">
      <div class="w-64 h-64 rounded-lg shadow-lg overflow-hidden">
        <img src="../assets/albumArt.jpeg" alt="A New Low Album Art" class="w-full h-full object-cover">
      </div>
      <div class="relative group m-9">
        <a href="https://linktr.ee/isaacraven" target="_blank" rel="noopener noreferrer" class="text-8xl transform transition-transform duration-300 group-hover:scale-125 inline-block">
          🌲
        </a>
        <span class="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-[#654321] dark:bg-[#FF69B4] text-white dark:text-[#271BA7] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm mb-2">
          Click for our Linktree
        </span>
      </div>
    </div>

    <h2 class="text-2xl m-12 transition-colors duration-300 text-[#654321] dark:text-[#E6E6FA]">
    Check out our music video for <span class="font-['Zapfino', 'Edwardian Script ITC', cursive] text-yellow-500 text-4xl italic transform hover:scale-110 transition-transform duration-300 shadow-lg px-2 py-1 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">"Sweet Adam"</span> on YouTube!
    </h2>

    <!-- Ensure the video is responsive and taller -->
    <div class="w-full max-w-4xl mb-8">
      <div class="relative pb-[56.25%] h-0">
        <iframe 
          src="https://www.youtube.com/embed/DHDcND0odsM" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
          class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>

    <!-- Add some sample data to the table -->
    <table class="table-auto rounded-lg overflow-hidden w-full max-w-2xl transition-colors duration-300 bg-[#F0F0F0] dark:bg-[#251AA1]">
      <thead>
        <tr class="bg-[#DAA520] dark:bg-[#40E0D0]">
          <th class="px-6 py-3 text-left text-[#654321] dark:text-[#271BA7]">Song</th>
          <th class="px-6 py-3 text-left text-[#654321] dark:text-[#271BA7]">Album</th>
          <th class="px-6 py-3 text-left text-[#654321] dark:text-[#271BA7]">Release Date</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-[#F5F5DC] dark:bg-[#2A15B2] border-b border-[#654321] dark:border-[#E6E6FA]">
          <td class="px-6 py-4 text-[#654321] dark:text-[#FFFFFF]">I'm Not Your Friend</td>
          <td class="px-6 py-4 text-[#654321] dark:text-[#FFFFFF]">A New Low</td>
          <td class="px-6 py-4 text-[#654321] dark:text-[#FFFFFF]">2023-05-15</td>
        </tr>
        <tr class="bg-[#F0F0F0] dark:bg-[#2814AC] border-b border-[#654321] dark:border-[#E6E6FA]">
          <td class="px-6 py-4 text-[#654321] dark:text-[#FFFFFF]">Another Song</td>
          <td class="px-6 py-4 text-[#654321] dark:text-[#FFFFFF]">A New Low</td>
          <td class="px-6 py-4 text-[#654321] dark:text-[#FFFFFF]">2023-05-15</td>
        </tr>
      </tbody>
    </table>
</div>
</template>
  
<script>
export default {
  name: 'ANewLowContent',
  props: {
    darkMode: {
      type: Boolean,
      required: true
    }
  },
};
</script>