<template>
  <v-pagination
    v-model="currentPage"
    :length="totalPages"
    :total-visible="visiblePages"
    @input="pageChanged"
  ></v-pagination>
</template>

<script>
export default {
  name: 'CustomPagination',
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    visiblePages: {
      type: Number,
      default: 7
    }
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
  methods: {
    pageChanged() {
      this.$emit('page-change', this.currentPage);
    },
  },
  watch: {
    totalItems() {
      // Reset to first page if totalItems changes
      this.currentPage = 1;
    },
  },
};
</script>
