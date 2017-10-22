import api from '../_api';

const getProducts = (context) => {
  api.fetchProducts
    .then((response) => {
      context.commit('PRODUCTS_UPDATED', response);
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    });
};

export default {
  getProducts,
};
