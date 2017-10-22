<template>
  <div>
    <ProductList :products="products" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from './store';
import ProductList from './_components/ProductList';

export default {
  name: 'ProductModule',
  components: {
    ProductList,
  },
  computed: {
    ...mapGetters({
      products: 'products/products',
    }),
  },
  created() {
    this.$store.registerModule('products', store);
  },
  mounted() {
    this.$store.dispatch('products/getProducts');
  },
};
</script>
