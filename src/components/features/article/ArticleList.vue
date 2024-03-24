<template>
  <div v-if="getArticles.length > 0">
    <v-container>
      <v-row>
        <v-col cols="12" v-for="article in getArticles" :key="article.id" class="py-1">
          <ArticleItem :article="article" />
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <p>No articles found!</p>
  </div>
</template>
<script>
import ArticleItem from '@/components/features/article/ArticleItem.vue';
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ArticleItem
  },
  computed: {
    ...mapGetters("articleStore", ["getArticles"]),
  },
  methods: {
    ...mapActions("articleStore", ["fetchArticles"]),
  },
  created() {
    this.fetchArticles();
  },
  name: 'ArticleList',

}
</script>
<style></style>