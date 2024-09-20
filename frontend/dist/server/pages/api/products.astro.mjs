export { renderers } from '../../renderers.mjs';

const get = async () => {
  const response = await fetch(`${"http://localhost:1337"}/api/products`);
  const data = await response.json();
  if (response.ok) {
    return new Response(JSON.stringify(data), { status: 200 });
  } else {
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
