<template>
  <ChatList :messages="messages" />
</template>

<script>
import { mapGetters } from 'vuex';
import store from './_store';
import ChatList from './_components/ChatList';

export default {
  name: 'ChatModule',
  components: {
    ChatList,
  },
  computed: {
    ...mapGetters({
      messages: '$_chat/messages',
    }),
  },
  created() {
    const STORE_KEY = '$_chat';
    // eslint-disable-next-line no-underscore-dangle
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
  },
  mounted() {
    this.$store.dispatch('$_chat/getMessages');
  },
};
</script>
