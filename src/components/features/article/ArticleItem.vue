<template>
  <div>
    <CustomCard>
      <template #cardTitle>
        <v-card-title class="px-4 py-4 d-flex align-center">
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
        <div class="user-card px-4 mb-2 pt-2">
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
        <v-card-text
          class="subtitle-1 pl-4 pr-4 py-0 two-line-limit"
          v-html="formattedDescription()"
        >
        </v-card-text>
      </template>
      <template #cardActions>
        <v-card-actions>
          <button class="py-1 pl-2" @click="openModal">
            See More
          </button>
        </v-card-actions>
      </template>
    </CustomCard>
    <CustomModal :show.sync="showModal" width="600">
      <template #body>
        <ArticleDetails :article="article"></ArticleDetails>
      </template>
    </CustomModal>
  </div>
</template>

<script>
import CustomCard from "@/components/ui/CustomCard.vue";
import { formatDateToLocal } from "@/utils/DateConverter";
import CustomModal from "@/components/ui/CustomModal.vue";
import ArticleDetails from "./ArticleDetails.vue";

export default {
  name: "ArticleItem",
  components: {
    CustomCard,
    CustomModal,
    ArticleDetails,
  },
  props: {
    article: Object, // Define article as a prop
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    formattedDescription() {
      let description_text = this.article.comment_text ?? this.article.story_text
      let description = description_text
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'");


      return description;
    },
    titleWithLink() {
      return `<a
        class="my-custom-link"
        href="${this.article.story_url}" 
        target="_blank">${this.article.story_title}
      </a>`;
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
.two-line-limit {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3.4rem; /* Adjust based on your line-height to fit exactly two lines */
}
@media screen and (max-width: 43em) {
  .break-words {
    overflow-wrap: break-word;
     word-break: break-word;
  }
}

.v-btn__content{
    opacity: 1 !important;
}
.full-width {
  min-width: 100%;
}

.my-custom-link {
  color: "primary";
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
