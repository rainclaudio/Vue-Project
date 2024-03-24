<template>

    <CustomCard
      :title="article.story_title ? article.story_title : article.title"
      :description="article.comment_text ?? '' "
      :author="article.author"
      :date="formattedDate"
      :story_url="article.story_url"
      :buttons="[
        {
          text: 'See More',
          color: 'primary',
          action: () => openModal(article),
        }
      ]"
    />
</template>

<script>
import CustomCard from '@/components/ui/CustomCard.vue';
import { formatDateToLocal } from '@/utils/DateConverter';
export default {
  name: "ArticleItem",
  components: {
    CustomCard
  },
  props: {
    article: Object // Define article as a prop
  },
  computed: {
    formattedDate() {
      return formatDateToLocal(this.article.created_at);
    }
  },
  data() {
    return {
      message: "Hello, Vue!",
    };
  },
};
</script>
