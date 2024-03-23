<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-img
      :src="imageUrl"
      height="100px"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-card-title>{{ productName }}</v-card-title>
    </v-img>

    <v-card-text>
      {{ productDescription }}
    </v-card-text>

    <v-card-actions>
      <v-btn
        v-for="(btn, index) in buttons"
        :key="index"
        :color="btn.color"
        text
        @click="btn.action"
      >
        {{ btn.text }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CustomCard',
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    buttons: {
      type: Array,
      default: () => [],
      validator: buttons => {
        return buttons.every(btn => 'text' in btn && 'color' in btn && 'action' in btn);
      },
    },
  },
};
</script>

<style scoped>
</style>
