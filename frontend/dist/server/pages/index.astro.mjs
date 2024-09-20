import { c as createComponent, r as renderTemplate, d as renderHead, b as createAstro } from '../chunks/astro/server_B72uUg3M.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<!-- src/pages/index.astro --><html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Astro with Bootstrap</title><link rel="stylesheet" href="/styles/global.css">${renderHead()}</head> <body> <header class="py-3"> <div class="container"> <h1>Welcome to Astro with Bootstrap!</h1> <nav class="navbar navbar-expand-lg navbar-dark"> <div class="container"> <a class="navbar-brand" href="#">Astro</a> <div class="collapse navbar-collapse"> <ul class="navbar-nav mr-auto"> <li class="nav-item"> <a class="nav-link" href="/login">Login</a> </li> <li class="nav-item"> <a class="nav-link" href="/register">Register</a> </li> <li class="nav-item"> <a class="nav-link" href="/products">Product Catalog</a> </li> <li class="nav-item"> <a class="nav-link" href="/cart">Shopping Cart</a> </li> </ul> </div> </div> </nav> </div> </header> <main class="container mt-4"> <h2>Welcome to our application</h2> <!-- Add more content here --> </main> <footer class="py-3 text-center"> <p>&copy; 2024 Your Company. All rights reserved.</p> </footer> </body></html>`;
}, "D:/University of London/Job/frontend/src/pages/index.astro", void 0);

const $$file = "D:/University of London/Job/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
