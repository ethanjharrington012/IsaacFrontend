<script>
import bandPhoto from '../assets/BandPhoto.jpg';
export default {
  name: 'MyComponent',
  data() {
    return {
      isAdmin: false,
      bandPhoto: bandPhoto
    }
  },
  mounted() {
    // Check if user is admin using local storage
    this.isAdmin = localStorage.getItem('isAdmin') === 'true';
  },
  methods: {
    changePhoto(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.bandPhoto = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
};
</script>

<template>
  <div>
    <div class="w-full h-screen/3 relative">
      <img :src="bandPhoto" alt="Band" class="w-full h-full object-cover object-center" />
      <label v-if="isAdmin" for="photoUpload" class="absolute top-2 right-2 cursor-pointer bg-white bg-opacity-50 p-2 rounded-full">
        <input id="photoUpload" type="file" accept="image/*" @change="changePhoto" class="hidden" />
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </label>
    </div>
    <div class="mx-20 w-80 bg-[#F5F5DC] dark:bg--[#271BA7] text-[#654321] dark:text-[#FFFFFF]">
      <h1 class="text-4xl font-bold underline border-[#654321] dark:border-[#E6E6FA]">
        Hello world!
      </h1>
      <button class="rounded border-2 border-[#654321] dark:border-[#E6E6FA] bg-[#F5F5DC] dark:bg-[#271BA7] px-4 py-4 text-[#654321] dark:text-[#FFFFFF] flex-row hover:bg-[#DAA520] dark:hover:bg-[#40E0D0]">Click Me!</button>
      <button class="rounded border-2 border-[#654321] dark:border-[#E6E6FA] bg-[#F5F5DC] dark:bg-[#271BA7] px-4 py-2 text-[#654321] dark:text-[#FFFFFF] hover:bg-[#DAA520] dark:hover:bg-[#40E0D0]">Another button</button>
      <input placeholder="I am the placeholder" class="bg-[#F5F5DC] dark:bg-[#271BA7] border-2 border-[#654321] dark:border-[#E6E6FA] text-[#654321] dark:text-[#FFFFFF] placeholder-[#483D8B] dark:placeholder-[#FF69B4] rounded px-2 py-1" />
      <div class="space-x-2 p-2 m-2">
        <a class="bg-[#F5F5DC] dark:bg-[#271BA7] border-2 border-[#654321] dark:border-[#E6E6FA] rounded-md p-1 hover:bg-[#DAA520] dark:hover:bg-[#40E0D0] text-[#654321] dark:text-[#FFFFFF]" href="#">Courses</a>
        <a class="bg-[#F5F5DC] dark:bg-[#271BA7] border-2 border-[#654321] dark:border-[#E6E6FA] rounded-sm p-1 hover:bg-[#DAA520] dark:hover:bg-[#40E0D0] text-[#654321] dark:text-[#FFFFFF]" href="#">Blogs</a>
        <a class="bg-[#F5F5DC] dark:bg-[#271BA7] border-2 border-[#654321] dark:border-[#E6E6FA] rounded-sm p-1 hover:bg-[#DAA520] dark:hover:bg-[#40E0D0] text-[#654321] dark:text-[#FFFFFF]" href="#">Blogs</a>
        <a class="bg-[#F5F5DC] dark:bg-[#271BA7] border-2 border-[#654321] dark:border-[#E6E6FA] rounded-sm p-1 hover:bg-[#DAA520] dark:hover:bg-[#40E0D0] text-[#654321] dark:text-[#FFFFFF]" href="#">Shows</a>
        <a class="bg-[#F5F5DC] dark:bg-[#271BA7] border-2 border-[#654321] dark:border-[#E6E6FA] rounded-md p-1 hover:bg-[#DAA520] dark:hover:bg-[#40E0D0] text-[#654321] dark:text-[#FFFFFF]" href="#">more!</a>
      </div>
      <div class="bg-[#F5F5DC] dark:bg-[#271BA7] w-96 mx-auto border-2 border-[#654321] dark:border-[#E6E6FA] p-4 rounded-lg text-[#654321] dark:text-[#FFFFFF]">
        <h1 class="mb-4 font-semibold text-[#483D8B] dark:text-[#FF69B4]">An important Alert</h1>
        <p class="text-sm mb-4">
          jnmfiekngowiengvoeihjfgo whjfofwfjwoefjwoe neiwnfweiufniwonf nwiefniwenfwieufnwiufniwdeufnwe
          efbnwieufnweifunwefiuwenfikwenfiweknfwkefn
        </p>
        <div>
          <button class="rounded-md border-2 bg-[#F5F5DC] dark:bg-[#271BA7] border-[#654321] dark:border-[#E6E6FA] px-2 py-1 hover:bg-[#DAA520] dark:hover:bg-[#40E0D0] text-[#654321] dark:text-[#FFFFFF]">Confirm</button>
          <button class="hover:blur ml-2 border-2 rounded-md border-[#654321] dark:border-[#E6E6FA] bg-[#F5F5DC] dark:bg-[#271BA7] px-2 py-1 text-[#654321] dark:text-[#FFFFFF]">Cancel</button>
        </div>
      </div>
      <div>
        <form @submit.prevent class="pt-4 m-3 container mx-auto space-y-6 rounded-md border-2 border-[#654321] dark:border-[#E6E6FA] bg-[#F5F5DC] dark:bg-[#271BA7] p-4 text-[#654321] dark:text-[#FFFFFF]">
          <div>
            <label for="required" class="block text-sm font-semibold">Required Field</label>
            <input class="py-1 px-2 border-[#654321] dark:border-[#E6E6FA] border-2 rounded disabled:bg-[#DAA520] dark:disabled:bg-[#40E0D0] bg-[#F5F5DC] dark:bg-[#271BA7] text-[#654321] dark:text-[#FFFFFF]" id="required" placeholder="Required Field" required />
          </div>
          <div class="space-y-1">
            <label for='disabled' class="text-[#654321] dark:text-[#FFFFFF] block">Disabled Field</label>
            <input class="shadow-sm border-[#654321] dark:border-[#E6E6FA] border-2 rounded py-1 px-2 text-[#483D8B] dark:text-[#FF69B4] bg-[#DAA520] dark:bg-[#40E0D0]" disabled value="This field is disabled" placeholder="This Field is disabled"/>
          </div>
          <div class="space-y-1">
            <label class="block">Input Field</label>
            <input placeholder="Input Field" class="py-1 px-2 border-[#654321] dark:border-[#E6E6FA] border-2 rounded bg-[#F5F5DC] dark:bg-[#271BA7] text-[#654321] dark:text-[#FFFFFF]"/>
          </div>
          <div class="space-x-2">
            <input id="terms" type="checkbox" class="accent-[#483D8B] dark:accent-[#FF69B4]"/>
            <label class="" for="terms">I accept the Terms and conditions</label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here if needed */
</style>
