<template>
  <table>
    <tr>
      <th>Type</th>
      <th>Brand</th>
      <th>Model</th>
    </tr>
    <ProductListElement
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <tr class="table-row__fallback" v-if="!products || products.length === 0">
      <td colspan="3">No Products given</td>
    </tr>
  </table>
</template>

<script>
import ProductListElement from './ProductListElement';

export default {
  name: 'ProductList',
  components: {
    ProductListElement,
  },
  props: {
    products: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.table-row__fallback {
  td {
    text-align: center;
  }
}

table {
  border: 1px solid #999;
}
</style>

