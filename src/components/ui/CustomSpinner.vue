<template>
  <div class="text-center">
    <v-progress-circular
      indeterminate
      :color="color"
      :size="size"
      :width="width"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: 'CustomSpinner',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    size: {
      type: [Number, String],
      default: 64
    },
    width: {
      type: [Number, String],
      default: 7
    }
  }
}
</script>

<style scoped>
</style>
