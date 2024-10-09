<template>
  <div>
    <FavSong />
    <FooterA />
  </div>
</template>
  
<script>
import FavSong from '../components/FavSong.vue';
import FooterA from '../components/FooterA.vue';

export default {
  name: 'Music-dir',
  components: {
    FavSong,
    FooterA,
  }
};

</script>
  