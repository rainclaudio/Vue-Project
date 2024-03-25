<template>
  <v-card flat class="rounded-0">
    <slot name="cardTitle">
      {{ cardTitle }}
    </slot>

    <slot name="cardContent">
      {{ cardContent }}
    </slot>

    <slot name="cardActions">
      {{ cardActions }}   
    </slot>

 
  </v-card>
</template>

<script>
export default {
  name: "CustomCard",
  props: {
    cardTitle: {
      type: String,
      default: ''
    },
    cardContent: {
      type: String,
      default: ''
    },
    cardActions: {
      type: Array,
      default: null
    },
  },
  computed: {
  
  },
};
</script>

