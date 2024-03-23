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

      <CustomCard
        imageUrl="https://example.com/image-url.jpg"
        productName="Amazing Product"
        productDescription="This product is truly amazing. Buy it now!"
        :buttons="[
          { text: 'Learn More', color: 'primary', action: learnMore },
          { text: 'Add to Cart', color: 'secondary', action: addToCart },
        ]"
      />

      <!-- MODAL COMPONENT -->
      <v-btn color="primary" @click="showModal = true">Open Modal</v-btn>
      <CustomModal
        :show.sync="showModal"
        header="Modal Header"
        :body="'This is the default body content.'"
        width="600"
      >
        <template #body>
          <!-- You can put any custom content here, including other components -->
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
          <!-- Using the spinner with custom parameters -->
          <CustomSpinner v-if="loading" color="red" :size="70" :width="5" />
          <!-- Your other template elements -->
        </div>
      </template>
      

 <div v-if="getArticles.length > 0">
    <div v-for="article in getArticles" :key="article.id">
      <h2>{{ article.title }}</h2>
      <p>{{ article.content }}</p>
    </div>
  </div>
  <div v-else>
    <p>No articles found!</p>
  </div>

    </v-main>
  </v-app>
</template>

<script>
import CustomTag from "@/components/ui/CustomTag.vue";
import CustomToggle from "@/components/ui/CustomToggle.vue";
import CustomCard from "@/components/ui/CustomCard.vue";
import CustomModal from "@/components/ui/CustomModal.vue";
import CustomSpinner from "@/components/ui/CustomSpinner.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    CustomTag,
    CustomToggle,
    CustomCard,
    CustomModal,
    CustomSpinner,
  },
  computed: {
    ...mapGetters("articleStore", ["getArticles"]), // Add a computed property to get articles
 
  },
  created() {
    this.fetchArticles(); // Dispatch the action to fetch articles   
    this.fetchData();
  },
  methods: {
    ...mapActions("articleStore", ["fetchArticles"]), // Add this line
  

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
