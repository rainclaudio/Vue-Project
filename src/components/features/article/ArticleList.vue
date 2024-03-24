<template>
  <!-- DISPLAY ARTICLES HERE -->
  <v-row v-if="getArticles.length > 0">
      <v-col cols="12" v-for="article in getArticles" :key="article.id" class="py-1">
        <ArticleItem :article="article" />
      </v-col>
    </v-row>
    <v-row v-else>
      <p>No articles found!</p>
    </v-row>
</template>

<script>
import ArticleItem from '@/components/features/article/ArticleItem.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ArticleList',
  components: {
    ArticleItem,
  },
  computed: {
    ...mapGetters('articleStore', ['getArticles']),
  },
  methods: {
    ...mapActions('articleStore', ['fetchArticles']),
  },
  created() {
    this.fetchArticles();
  },
}
</script>
<style>
/* Style as needed */
</style>
