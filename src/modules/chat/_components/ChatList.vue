<template>
  <ul>
    <ChatListElement
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
  </ul>
</template>

<script>
import ChatListElement from './ChatListElement';

export default {
  name: 'ChatList',
  components: {
    ChatListElement,
  },
  props: {
    messages: {
      type: Array,
    },
  },
};
</script>
