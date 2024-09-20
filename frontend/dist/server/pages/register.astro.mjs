import { c as createComponent, r as renderTemplate, d as renderHead } from '../chunks/astro/server_B72uUg3M.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- src/pages/register.astro --><html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Register</title>${renderHead()}</head> <body> <header class="bg-primary text-white text-center py-3"> <h1>Register</h1> </header> <main class="container mt-4"> <div class="row justify-content-center"> <div class="col-md-6"> <form id="registerForm" class="bg-white p-4 rounded shadow-sm"> <h2 class="mb-4">Create an Account</h2> <div class="mb-3"> <label for="username" class="form-label">Username</label> <input type="text" id="username" class="form-control" required> </div> <div class="mb-3"> <label for="email" class="form-label">Email address</label> <input type="email" id="email" class="form-control" required> </div> <div class="mb-3"> <label for="password" class="form-label">Password</label> <input type="password" id="password" class="form-control" required> </div> <button type="submit" class="btn btn-primary">Register</button> </form> </div> </div> </main>  </body> </html>`;
}, "D:/University of London/Job/frontend/src/pages/register.astro", void 0);

const $$file = "D:/University of London/Job/frontend/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
