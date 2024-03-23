<template>
  <div>
    <ArticleList></ArticleList>
  </div>
  
</template>

<script>
import ArticleList from '@/components/features/article/ArticleList'

export default {
  components: {
    ArticleList
  },
  name: 'ArticlePage',
  data() {
    return {
      message: 'Hello, Vue!'
    }
  }
}
</script>

<style scoped>

</style>
