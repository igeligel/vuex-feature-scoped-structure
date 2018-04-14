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
    const STORE_KEY = '$_products';
    // eslint-disable-next-line no-underscore-dangle
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
  },
  mounted() {
    this.$store.dispatch('$_products/getProducts');
  },
};
</script>
