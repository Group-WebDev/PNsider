<template>
  <v-app>
    <dashview/>
  </v-app>
</template>

<script>
import dashview from '@/views/About.vue'
export default {
  name: 'App',

  components: {
    dashview
  },

  data: () => ({
    //
  }),
};
</script>
