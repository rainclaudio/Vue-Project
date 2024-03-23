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
      internalValue: this.value, 
    };
  },
  watch: {
   
    value(newValue) {
      this.internalValue = newValue;
    },
  
    internalValue(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>
<style scoped>
</style>