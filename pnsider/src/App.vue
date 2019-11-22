<template>
  <v-app>
    <v-content>
    <dashview/>
    </v-content>
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
