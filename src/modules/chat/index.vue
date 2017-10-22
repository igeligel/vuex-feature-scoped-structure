<template>
  <div>
    <ChatList :messages="messages" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import store from './store';
import ChatList from './_components/ChatList';

export default {
  name: 'Chat',
  components: {
    ChatList,
  },
  computed: {
    ...mapGetters({
      messages: 'chat/messages',
    }),
  },
  created() {
    this.$store.registerModule('chat', store);
  },
  mounted() {
    this.$store.dispatch('chat/getMessages');
  },
};
</script>

<style>

</style>
