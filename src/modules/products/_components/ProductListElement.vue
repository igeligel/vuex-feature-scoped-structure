<template>
  <tr>
    <td v-text="product.type"></td>
    <td v-text="product.brand"></td>
    <td v-text="product.model"></td>
  </tr>
</template>

<script>
export default {
  name: 'ProductListElement',
  props: {
    product: {
      type: Object,
    },
  },
};
</script>
