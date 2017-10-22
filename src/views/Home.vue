<template>
  <div>
    <h1>Home</h1>
    <ChatContainer />
    <ProductsContainer />
  </div>
</template>

<script>
import ChatContainer from '@/modules/chat';
import ProductsContainer from '@/modules/products';

export default {
  name: 'Home',
  components: {
    ChatContainer,
    ProductsContainer,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;
  font-weight: 100;
  font-size: 3em;
  letter-spacing: 0.05em;
  color: #4b4b4b;
}
</style>
