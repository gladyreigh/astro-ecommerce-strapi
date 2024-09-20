import { c as createComponent, r as renderTemplate, d as renderHead } from '../chunks/astro/server_B72uUg3M.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- src/pages/login.astro --><html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Login</title><link rel="stylesheet" href="/styles/global.css">${renderHead()}</head> <body> <header class="py-3"> <div class="container"> <h1>Login</h1> </div> </header> <main class="container mt-4"> <form class="bg-white p-4 rounded shadow-sm"> <h2 class="mb-4">Login</h2> <div class="mb-3"> <label for="email" class="form-label">Email address</label> <input type="email" class="form-control" id="email" required> </div> <div class="mb-3"> <label for="password" class="form-label">Password</label> <input type="password" class="form-control" id="password" required> </div> <button type="submit" class="btn btn-primary">Login</button> </form> </main> </body></html>`;
}, "D:/University of London/Job/frontend/src/pages/login.astro", void 0);

const $$file = "D:/University of London/Job/frontend/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
