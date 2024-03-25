<template>
  <v-app class="app-background-color">
    <NavBar></NavBar>
    <v-main>
      <ArticlePage></ArticlePage>
    </v-main>
  </v-app>
</template>

<script>
import ArticlePage from "@/pages/ArticlePage.vue";
import NavBar from "@/components/layout/NavBar.vue";
export default {
  name: "App",
  components: {
    ArticlePage,
    NavBar,
  },
  created() {},
  methods: {},

  data: () => ({}),

  watch: {},
};
</script>

<style>
.v-application {
  background-color: #f3f2ed !important;
}
</style>
