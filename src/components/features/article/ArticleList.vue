<template>
  <div>
    <div>ArticleList</div>
    <p>{{ message }}</p>

  </div>
</template>

<script>
// import CustomCard from '@/components/ui/CustomCard.vue';

export default {
  components: {
    // CustomCard
  },
  name: 'ArticleList',
  data() {
    return {
      message: 'Hello, Vue!'
    }
  }
}
</script>

<style scoped>

</style>
