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
              <CustomSwitch id="my-switch" :options="toggleOptions" v-model="selectedOption" />
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

export default {
  name: 'ArticlePage',
  components: {
    ArticleList,
    CustomSwitch
  },
  data() {
    return {
      toggleOptions: [
        { value: "link", label: "With Link" },
        { value: "no-link", label: "No Link" },
      ],
      selectedOption: "link",
      showModal: false,
      loading: true,
      message: 'Hello, Vue!'
    }
  }
}
</script>

<style scoped></style>
