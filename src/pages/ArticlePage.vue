<template>
  <v-container>
    <v-row v-if="fetchStatus === 'success'">
      <v-col cols="12" class="py-2">
        <v-card class="rounded-0" flat>
          <v-container>
            <v-row align="center" class="d-flex align-center py-4 px-2">
              <v-col cols="auto" class="text-right px-0 py-0">
                <label for="my-switch" class="my-auto"
                  >Show Articles Without Link</label
                >
              </v-col>

              <v-col cols="auto" class="d-flex px-2 py-0">
                <CustomSwitch id="my-switch" v-model="selectedOption" />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-col cols="12">
      <div v-if="fetchStatus === 'loading'" class="d-flex align-center justify-center gap-4">
        <CustomSpinner size="50"></CustomSpinner>
        <p class="mb-0">Loading Articles...</p>
      </div>

      <div
        v-else-if="fetchStatus === 'error'"
        class="text-center text-red py-2"
      >
        Failed to load articles. Please try again later.
      </div>
    </v-col>

    <ArticleList
      v-if="fetchStatus === 'success'"
      :articles="articles"
    ></ArticleList>
  </v-container>
</template>

<script>
import CustomSwitch from "@/components/ui/CustomSwitch.vue";
import ArticleList from "@/components/features/article/ArticleList";
import CustomSpinner from "@/components/ui/CustomSpinner.vue";

import { mapState, mapActions } from "vuex";

export default {
  name: "ArticlePage",
  components: {
    ArticleList,
    CustomSwitch,
    CustomSpinner,
  },
  data() {
    return {
      selectedOption: null,
      loading: true,
    };
  },
  computed: {
    ...mapState({
      fetchStatus: (state) => state.articleStore.status,
      articles: (state) => state.articleStore.articles,
    }),
  },
  methods: {
    ...mapActions({
      fetchArticles: "articleStore/fetchArticles",
    }),
  },
  watch: {
    selectedOption(newVal) {
      this.$store.commit(
        "articleStore/toggleIncludeArticlesWithoutUrl",
        newVal
      );
    },
  },
  created() {
    this.selectedOption = this.includeArticlesWithoutUrl;
    this.fetchArticles();
  },
};
</script>

<style scoped>
.gap-2 {
  gap: 0.5rem;
}
.gap-4 {
  gap: 1rem;
}
</style>
