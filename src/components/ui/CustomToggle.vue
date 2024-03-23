<template>
  <v-btn-toggle v-model="internalValue" :rounded="rounded" group>
    <v-btn v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  name: 'CustomToggle',
  props: {
    value: {
      default: null,
    },
    options: {
      type: Array,
      required: true,
    },
    rounded: {
      type: [Boolean],
      default: false,
    },
  },
  data() {
    return {
      internalValue: this.value, // Use internal value for the v-model
    };
  },
  watch: {
    // Watch for external value changes to update internal
    value(newValue) {
      this.internalValue = newValue;
    },
    // Watch for internal value changes to emit update to parent
    internalValue(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>
<style scoped>
</style>