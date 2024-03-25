<template>
  <v-app class="app-background-color">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />

        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>

      <ArticlePage></ArticlePage>
    
    </v-main>


  </v-app>
</template>

<script>
import ArticlePage from '@/pages/ArticlePage.vue'

export default {
  name: "App",

  components: {
    ArticlePage
  },
  created() {
    this.fetchData();
  },
  methods: {

    learnMore() {
      console.log("Learning more about the product");
    },
    addToCart() {
      console.log("Adding product to cart");
    },
    doSomething() {
      console.log("Doing something");
    },
    fetchData() {
      this.loading = true;
      setTimeout(() => {

        this.loading = false;
      }, 2000);
    },
  },

  data: () => ({
  }),

  watch: {
    selectedOption(newValue) {
      console.log("Selected option:", newValue);
    },
  },
};
</script>

<style>
.v-application {
  background-color: #F3F2ED !important;
}
</style>