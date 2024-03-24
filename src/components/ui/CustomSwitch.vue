<template>
    <v-switch
      v-model="people"
      :color="color"
      :label="label"
      :value="value"
      hide-details
      class="my-0 py-0"
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

  },
};
</script>
<style scoped>
.p-0{
  padding:0 !important;
}
.m-0{
  margin: 0 !important;
}
</style>