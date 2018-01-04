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
    this.$store.registerModule('$_chat', store);
  },
  mounted() {
    this.$store.dispatch('$_chat/getMessages');
  },
};
</script>
