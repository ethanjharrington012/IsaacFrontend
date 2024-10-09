<template>
    <ANewLowContent :darkMode="darkMode" />
    <FooterA />
</template>

<script>

import ANewLowContent from '../components/ANewLowContent.vue';
import FooterA from '../components/FooterA.vue';
export default {
  name: 'ANewLow',
  components: {
    ANewLowContent,
    FooterA,
  },
  setup() {
    return {};
  }
};
</script>