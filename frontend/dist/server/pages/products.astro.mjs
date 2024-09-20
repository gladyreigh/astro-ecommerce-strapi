import { c as createComponent, r as renderTemplate, d as renderHead } from '../chunks/astro/server_B72uUg3M.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Products = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- src/pages/products.astro --><html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Product Catalog</title><link rel="stylesheet" href="/styles/global.css">${renderHead()}</head> <body> <header class="py-3"> <div class="container"> <h1>Product Catalog</h1> </div> </header> <main class="container mt-4"> <div class="row"> <!-- Example Product Card --> <div class="col-md-4 mb-4"> <div class="card"> <img src="path/to/image.jpg" class="card-img-top" alt="Product Image"> <div class="card-body"> <h5 class="card-title">Product Title</h5> <p class="card-text">$Price</p> <a href="#" class="btn btn-primary">Add to Cart</a> </div> </div> </div> <!-- Repeat product cards as needed --> </div> </main> </body></html>`;
}, "D:/University of London/Job/frontend/src/pages/products.astro", void 0);

const $$file = "D:/University of London/Job/frontend/src/pages/products.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Products,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
