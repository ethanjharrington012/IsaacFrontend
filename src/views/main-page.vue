<script>
import HelloWorld from '../components/HelloWorld.vue';
import FavSong from '../components/FavSong.vue';
import FooterA from '../components/FooterA.vue';
export default {
  components: {
    HelloWorld,
    FavSong,
    FooterA,
  },
}
</script>

<template>
  <div>
    <HelloWorld />
    <FavSong />
    <FooterA />
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
