<template>
  <v-btn
    :color="color"
    :disabled="disabled"
    @click="onClick"
  >
    <v-icon v-if="icon" left>
      {{ icon }}
    </v-icon>
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: 'CustomVuetifyButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'primary',
    },
    icon: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  },
};
</script>

<style scoped>
</style>
