<template>
  <v-dialog v-model="internalShow" :max-width="responsiveWidth" :style="{ maxHeight: '75vh' }">
    <v-card class="my-0 mx-0 px-0 py-0 rounded-0" flat>
      <v-card-text class="overflow-y-auto" :style="{ maxHeight: bodyMaxHeight }">
        <slot name="body">{{ content }}</slot>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="close" text>Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CustomModal",
  props: {
    show: Boolean,
    content: String,
    width: {
      type: [String, Number],
      default: "auto",
    },
    bodyMaxHeight: {
      type: String,
      default: "75vh",
    },
  },
  computed: {
    responsiveWidth() {
      return window.innerWidth <= 768 ? "90%" : "900"; 
    },
    internalShow: {
      get() {
        return this.show;
      },
      set(value) {
        this.$emit("update:show", value);
      },
    },
  },
  methods: {
    close() {
      this.$emit("update:show", false);
    },
  },
};
</script>
<style scoped>
</style>
