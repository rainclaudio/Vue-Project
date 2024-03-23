<template>
  <div>
    <!-- Use props.article to access the passed article data -->
    <CustomCard
      :title="article.story_title ? article.story_title : article.title"
      productDescription="This product is truly amazing. Buy it now!"
      :buttons="[
        {
          text: 'Learn More',
          color: 'primary',
          action: () => openModal(article),
        }
      ]"
    />
  </div>
</template>

<script>
import CustomCard from '@/components/ui/CustomCard.vue';

export default {
  components: {
    CustomCard
  },
  props: {
    article: Object // Define article as a prop
  },
  name: "ArticleItem",
  data() {
    return {
      message: "Hello, Vue!",
    };
  },
};
</script>
