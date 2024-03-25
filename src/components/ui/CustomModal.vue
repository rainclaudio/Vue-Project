<template>
    <v-dialog v-model="internalShow" :max-width="width">
    <v-card class="my-0 mx-0 px-0 py-0">
      <v-card-text class="overflow-y-auto" :style="{ maxHeight: bodyMaxHeight }">
        <slot name="body">
          {{ body }}
        </slot>
      </v-card-text>
      
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'CustomModal',
  props: {
    show: Boolean,
    title: String,
    header: String,
    content: String,
       width: { 
      type: [String, Number], 
      default: 'auto', 
    },
     bodyMaxHeight: { 
      type: String,
      default: '500', 
    },
  },
  computed: {
    internalShow: {
      get() {
        return this.show;
      },
      set(value) {
        this.$emit('update:show', value);
      },
    },
  },
  methods: {
    close() {
      this.$emit('update:show', false);
    },
  },
};
</script>
<style scoped>

</style>