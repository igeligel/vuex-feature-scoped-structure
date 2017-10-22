<template>
  <li>
    <span class="time">[{{timeRepresentation}}]</span>
    <span class="name">{{message.author}}: </span>
    <span class="content" v-text="message.content"></span>
  </li>
</template>

<script>
export default {
  name: 'ChatListElement',
  props: {
    message: {
      type: Object,
    },
  },
  computed: {
    timeRepresentation() {
      return new Date(this.message.time).toLocaleTimeString();
    },
  },
};
</script>

<style scoped>
.name {
  font-weight: bold;
}
</style>
