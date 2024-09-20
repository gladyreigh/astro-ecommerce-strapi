// ./src/api/cart/routes/cart.js
module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/cart',
      handler: 'cart.addToCart',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
