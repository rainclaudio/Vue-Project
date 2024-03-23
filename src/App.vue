<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <CustomTag> Enternainment </CustomTag>

      <CustomToggle :options="toggleOptions" v-model="selectedOption" />


      <!-- MODAL COMPONENT -->
      <v-btn color="primary" @click="showModal = true">Open Modal</v-btn>
      <CustomModal
        :show.sync="showModal"
        header="Modal Header"
        :body="'This is the default body content.'"
        width="600"
      >
        <template #body>
          <div>This is dynamic body content!</div>
          <v-img
            src="https://example.com/some-image.jpg"
            aspect-ratio="1.5"
          ></v-img>
        </template>
        <template #footer>
          <v-btn color="green" @click="doSomething">Do Something</v-btn>
          <v-btn color="red" @click="showModal = false">Close</v-btn>
        </template>
      </CustomModal>

      <template>
        <div>
          <CustomSpinner v-if="loading" color="red" :size="70" :width="5" />
        </div>
      </template>
      

    
 <div v-if="getArticles.length > 0">
    <v-container class="bg-surface-variant">
        <v-row no-gutters>
          <!-- Use v-for to create a column for each article -->
          <v-col
            v-for="article in getArticles"
            :key="article.id"
            cols="12"
            sm="4"
          >
            <v-sheet class="ma-2 pa-2">
              <!-- CustomCard for each article -->
              <CustomCard
                :productName="article.story_title"
                productDescription="This product is truly amazing. Buy it now!"
                :buttons="[
                  { text: 'Learn More', color: 'primary', action: () => learnMore(article) },
                  { text: 'Add to Cart', color: 'secondary', action: () => addToCart(article) },
                ]"
              />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
  </div>
  <div v-else>
    <p>No articles found!</p>
  </div>
    <ArticlePage></ArticlePage>
    </v-main>
  </v-app>
</template>

<script>
import CustomTag from "@/components/ui/CustomTag.vue";
import CustomToggle from "@/components/ui/CustomToggle.vue";
import CustomCard from "@/components/ui/CustomCard.vue";
import CustomModal from "@/components/ui/CustomModal.vue";
import CustomSpinner from "@/components/ui/CustomSpinner.vue";
import ArticlePage from '@/pages/ArticlePage.vue'
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    CustomTag,
    CustomToggle,
    CustomCard,
    CustomModal,
    CustomSpinner,
    ArticlePage
  },
  computed: {
    ...mapGetters("articleStore", ["getArticles"]), 
 
  },
  created() {
    this.fetchArticles(); 
    this.fetchData();
  },
  methods: {
    ...mapActions("articleStore", ["fetchArticles"]), 
  

    learnMore() {
      console.log("Learning more about the product");
    },
    addToCart() {
      console.log("Adding product to cart");
    },
    doSomething() {
      console.log("Doing something");
    },
    fetchData() {
      this.loading = true; 
      setTimeout(() => {
   
        this.loading = false; 
      }, 2000); 
    },
  },

  data: () => ({
    toggleOptions: [
      { value: "link", label: "With Link" },
      { value: "no-link", label: "No Link" },
    ],
    selectedOption: "link", 
    showModal: false,
    loading: true,
    //
  }),

  watch: {
    selectedOption(newValue) {
      console.log("Selected option:", newValue);
    },
  },
};
</script>
