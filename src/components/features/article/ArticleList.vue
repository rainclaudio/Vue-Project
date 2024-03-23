<template>
  <div>
    <div v-if="getArticles.length > 0">
       <v-list lines="one">
          <v-list-item
            v-for="article in getArticles"
            :key="article.id"
          >
            <v-sheet class="ma-1 pa-1">
              <ArticleItem :article="article" />
            </v-sheet>
          </v-list-item>
        </v-list>
 
    </div>
    <div v-else>
      <p>No articles found!</p>
    </div>
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
  data() {
    return {
      message: 'Hello, Vue!'
    }
  }
}
</script>
