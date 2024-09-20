// path: ./config/routes.js

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/api/cart',
      handler: 'cart.addToCart',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
