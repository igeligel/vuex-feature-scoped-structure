<template>
  <ProductList :products="products" />
</template>

<script>
import { mapGetters } from 'vuex';
import store from './_store';
import ProductList from './_components/ProductList';

export default {
  name: 'ProductModule',
  components: {
    ProductList,
  },
  computed: {
    ...mapGetters({
      products: '$_products/products',
    }),
  },
  created() {
    this.$store.registerModule('$_products', store);
  },
  mounted() {
    this.$store.dispatch('$_products/getProducts');
  },
};
</script>
