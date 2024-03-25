<template>
  <div class="">
    <CustomCard>
      <template #cardTitle>
        <v-card-title class="px-2 py-4 d-flex align-center">
          <a
            :class="{
              'my-custom-link': article.story_url,
              'no-url': !article.story_url,
            }"
            :href="
              article.story_url ? article.story_url : 'javascript:void(0);'
            "
            @click="!article.story_url && $event.preventDefault()"
            target="_blank"
          >
            {{ article.story_title ? article.story_title : article.title }}
          </a>
        
        </v-card-title>
      </template>

      <template #cardContent>
        <v-divider></v-divider>
        <div class="user-card px-2 pt-2">
          <v-card class="d-flex align-center" flat tile>
            <v-avatar size="48" class="mr-2 align-self-center" color="primary">
              <span class="white--text text-uppercase">{{
                article.author[0]
              }}</span>
            </v-avatar>
            <div class="d-flex flex-column align-self-center">
              <div class="text-subtitle mb-0 font-weight-medium">
                {{ article.author }}
              </div>
              <span class="text-caption">{{ formattedDate }}</span>
            </div>
          </v-card>
        </div>
        <div class="px-2 py-1">
          <v-card-text
            class="subtitle-1 px-0 py-0"
            v-html="formattedDescription()"
          >
          </v-card-text>
        </div>

        <div class="px-2">
          <v-chip
            class="white--text"
            color="accent_orange"
            v-for="(tag, index) in article._tags"
            :key="index"
            label
            flat
          >
            {{ tag }}
          </v-chip>
        </div>
      </template>
    </CustomCard>
  </div>
</template>

<script>
import CustomCard from "@/components/ui/CustomCard.vue";
import { formatDateToLocal } from "@/utils/DateConverter";

export default {
  name: "ArticleDetails",
  components: {
    CustomCard,
  },
  props: {
    article: Object,
  },
  methods: {
    formattedDescription() {
      return this.article.comment_text
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'");
    },
  },

  computed: {
    formattedDate() {
      if (this.article && this.article.created_at) {
        return formatDateToLocal(this.article.created_at);
      }
      return "";
    },
  },
};
</script>
<style scoped>
.v-chip:not(:first-child) {
  margin-left: 0.2rem;
}
.text-container {
  max-height: 5rem;
}

.full-width {
  min-width: 100%;
}
.my-custom-link {
  color: 'primary';
  text-decoration: none;
}
.no-url {
  color: black;
  text-decoration: none;
  cursor: default;
}
.my-custom-link:hover {
  text-decoration: underline;
}
.align-center {
  align-items: center;
}
</style>
