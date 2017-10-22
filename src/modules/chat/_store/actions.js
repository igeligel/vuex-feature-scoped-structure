import api from '../_api';

const getMessages = (context) => {
  api.fetchMessages
    .then((response) => {
      context.commit('MESSAGES_UPDATED', response);
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    });
};

export default {
  getMessages,
};
