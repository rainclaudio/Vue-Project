<template>
  <div class="">
    <CustomCard>
      <template #cardTitle>
        <v-card-title class="px-2 py-4 d-flex align-center">
          <a
            :class="{
              'my-custom-link': article.story_url,
              'no-url': !article.story_url,
               'break-words': true
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
        <div class="user-card px-2 pt-2 mb-2">
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
        <div class="px-2">
          <v-card-text
            class="subtitle-1 px-0 py-0"
            v-html="formattedDescription()"
          >
          </v-card-text>
        </div>

        <div class="d-flex flex-wrap gap-4 px-2 mt-1">
          <v-chip
            class="white--text mx-0 "
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
      let description_text = this.article.comment_text ?? this.article.story_text
      
      return description_text
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
@media screen and (max-width: 43em) {
  .break-words {
    overflow-wrap: break-word;
     word-break: break-word;
  }

}
.full-width {
  min-width: 100%;
}
.gap-4{
  gap: 4px;
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
