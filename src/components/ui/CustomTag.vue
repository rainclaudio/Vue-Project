<template>
  <v-chip
    :close="closable"
    :color="color"
    @click:close="onClose"
    class="ma-2"
  >
    <slot></slot>
  </v-chip>
</template>
<script>

export default {
  name: 'TagComponent',
  props: {
    closable: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
    },
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
  },
};
</script>
<style scoped>
</style>