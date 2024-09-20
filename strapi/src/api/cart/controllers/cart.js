// controllers/cart.js

module.exports = {
  async addToCart(ctx) {
    // Ensure the user is authenticated
    if (!ctx.state.user) {
      return ctx.badRequest('User not authenticated');
    }

    const { productId } = ctx.request.body;
    const userId = ctx.state.user.id; // Fetch the user's ID

    // Fetch the current user and product details
    const user = await strapi.query('user', 'users-permissions').findOne({ id: userId });
    const product = await strapi.query('product').findOne({ id: productId });

    if (!product) {
      return ctx.notFound('Product not found');
    }

    // Update the user's cart
    const updatedCart = [...user.cart, product];

    const updatedUser = await strapi.query('user', 'users-permissions').update(
      { id: userId },
      { cart: updatedCart }
    );

    return updatedUser;
  }
};
