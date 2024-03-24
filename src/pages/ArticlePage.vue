<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-2">
        <v-card flat>
          <v-container>
            <v-row align="center" class="d-flex align-center py-4 px-2">
              <v-col cols="auto" class="text-right px-0 py-0">
                <label for="my-switch" class="my-auto">Show Articles Without Link</label>
              </v-col>

              <v-col cols="auto" class="d-flex px-2 py-0">
                <CustomSwitch id="my-switch" v-model="selectedOption" />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <ArticleList></ArticleList>
  </v-container>

</template>

<script>
import CustomSwitch from "@/components/ui/CustomSwitch.vue";
import ArticleList from '@/components/features/article/ArticleList'
import { mapState } from 'vuex';

export default {
  name: 'ArticlePage',
  components: {
    ArticleList,
    CustomSwitch
  },
  data() {
    return {
      selectedOption: null,
      loading: true,
    }
  },
  computed: {
    ...mapState({
      includeArticlesWithoutUrl: state => state.articleStore.includeArticlesWithoutUrl,
    }),
  },
  watch: {
    selectedOption(newVal) {
      this.$store.commit('articleStore/toggleIncludeArticlesWithoutUrl', newVal);
    },
  },
  created() {
    this.selectedOption = this.includeArticlesWithoutUrl;
  }
}
</script>

<style scoped></style>
