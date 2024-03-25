<template>
  <v-row v-if="articles.length > 0">
    <v-col cols="12" v-for="article in articles" :key="article.id" class="py-1">
      <ArticleItem :article="article" />
    </v-col>
  </v-row>

</template>

<script>
import ArticleItem from '@/components/features/article/ArticleItem.vue';

export default {
  name: 'ArticleList',
  components: {
    ArticleItem,
  },
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  computed: {
  },
  methods: {
  },
  created() {
  },
}
</script>
<style scoped>
  .gap-2{
    gap: 0.5rem;
  }
  .gap-4{
    gap: 1rem;
  }
</style>
