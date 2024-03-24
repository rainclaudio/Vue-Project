<template>
  <v-switch
    v-model="internalValue"
    :color="color"
    :label="label"
    :value="value"
    hide-details
    class="my-0 py-0"
    @change="updateValue"
  ></v-switch>
</template>

<script>
export default {
  name: 'CustomSwitch',
  props: {
    value: {
      default: null,
    },
    label: {
      default: null,
    },
    color: {
      default: "primary"
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
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>