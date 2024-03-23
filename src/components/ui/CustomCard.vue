<template>
  <v-card class="mx-auto" >
    
      <v-card-title>{{ title }}</v-card-title>

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
    },
    title: {
      type: String,
      // required: true,
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
