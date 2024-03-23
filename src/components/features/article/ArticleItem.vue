<template>
  <div>
    <CustomCard>
      
    </CustomCard>
    <CustomCard
      :productName="article.story_title"
      productDescription="This product is truly amazing. Buy it now!"
      :buttons="[
        {
          text: 'Learn More',
          color: 'primary',
          action: () => learnMore(article),
        },
        {
          text: 'Add to Cart',
          color: 'secondary',
          action: () => addToCart(article),
        },
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
  name: "ArticleItem",
  data() {
    return {
      message: "Hello, Vue!",
    };
  },
};
</script>

<style scoped></style>
