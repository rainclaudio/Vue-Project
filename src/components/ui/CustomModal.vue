<template>
    <v-dialog v-model="internalShow" :max-width="width">
    <v-card>
      <v-card-title class="text-h5">{{ header }}</v-card-title>
      <v-card-text class="overflow-y-auto" :style="{ maxHeight: bodyMaxHeight }">
        <!-- Dynamically render passed content -->
        <slot name="body">
          {{ body }}
        </slot>
      </v-card-text>
      <v-card-actions>
        <!-- Dynamically render footer content if provided -->
        <slot name="footer">
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Close</v-btn>
        </slot>
      </v-card-actions>
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
    // Use a computed property that relies on props for reactivity
    internalShow: {
      get() {
        return this.show;
      },
      set(value) {
        // Instead of mutating the prop, emit an event
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
