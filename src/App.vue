<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
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
      <CustomTag
      >
        Enternainment
      </CustomTag>

      
      <CustomToggle :options="toggleOptions" v-model="selectedOption" />

      <CustomCard
          imageUrl="https://example.com/image-url.jpg"
          productName="Amazing Product"
          productDescription="This product is truly amazing. Buy it now!"
          :buttons="[
            { text: 'Learn More', color: 'primary', action: learnMore },
            { text: 'Add to Cart', color: 'secondary', action: addToCart }
          ]"
        />




    <!-- MODAL COMPONENT -->
    <v-btn color="primary" @click="showModal = true">Open Modal</v-btn>
    <CustomModal :show.sync="showModal" header="Modal Header" :body="'This is the default body content.'" width="600">
      <template #body>
        <!-- You can put any custom content here, including other components -->
        <div>This is dynamic body content!</div>
        <v-img src="https://example.com/some-image.jpg" aspect-ratio="1.5"></v-img>
      </template>
      <template #footer>
        <v-btn color="green" @click="doSomething">Do Something</v-btn>
        <v-btn color="red" @click="showModal = false">Close</v-btn>
      </template>
    </CustomModal>


    <template>
  <div>
    <!-- Using the spinner with custom parameters -->
    <CustomSpinner v-if="loading" color="red" :size="70" :width="5"/>
    <!-- Your other template elements -->
  </div>
</template>


     <!-- Button Component -->
     <CustomButton
      text="Click Me"
      color="red"
      icon="mdi-pencil"
      @click="handleClick"
    />

    </v-main>
  </v-app>
</template>

<script>
import CustomTag from '@/components/ui/CustomTag.vue'
import CustomToggle from '@/components/ui/CustomToggle.vue'
import CustomCard from '@/components/ui/CustomCard.vue'
import CustomModal from '@/components/ui/CustomModal.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import CustomSpinner from '@/components/ui/CustomSpinner.vue'

export default {
  name: 'App',

  components: {
    CustomTag,
    CustomToggle,
    CustomCard,
    CustomModal,
    CustomButton,
    CustomSpinner
  },
  created() {
    this.fetchData();
  },
  methods: {
  learnMore() {
    console.log('Learning more about the product');
    // Additional logic for learning more about the product
  },
  addToCart() {
    console.log('Adding product to cart');
    // Additional logic for adding the product to the cart
  },
  doSomething() {
    // Action for 'Do Something' button
    console.log('Doing something');
  },
   fetchData() {
    this.loading = true; // Start loading
    // Simulate fetching data with setTimeout
    setTimeout(() => {
      // your data fetching logic here
      
      this.loading = false; // Stop loading once data is fetched
    }, 2000); // Simulate a 2-second delay
  }
},

  data: () => ({
    toggleOptions: [
      { value: 'link', label: 'With Link' },
      { value: 'no-link', label: 'No Link' },
    ],
    selectedOption: 'link', // Holds the currently selected option
    showModal: false,
    loading: true,
    //
  }),

   watch: {
    // Whenever selectedOption changes, this function will execute
    selectedOption(newValue) {
      console.log('Selected option:', newValue);
    }
  },
};
</script>
