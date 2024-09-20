import { c as createComponent, r as renderTemplate, d as renderHead } from '../chunks/astro/server_B72uUg3M.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- src/pages/cart.astro --><html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Shopping Cart</title><link rel="stylesheet" href="/styles/global.css">${renderHead()}</head> <body> <header class="py-3"> <div class="container"> <h1>Shopping Cart</h1> </div> </header> <main class="container mt-4"> <div class="cart-items"> <!-- Example Cart Item --> <div class="cart-item d-flex align-items-center bg-white p-3 mb-3 rounded shadow-sm"> <img src="path/to/image.jpg" class="img-thumbnail" alt="Product Image"> <div class="ms-3"> <h5>Product Title</h5> <p>$Price</p> </div> <button class="btn btn-danger ms-auto">Remove</button> </div> <!-- Repeat cart items as needed --> </div> </main> </body></html>`;
}, "D:/University of London/Job/frontend/src/pages/cart.astro", void 0);

const $$file = "D:/University of London/Job/frontend/src/pages/cart.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Cart,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
