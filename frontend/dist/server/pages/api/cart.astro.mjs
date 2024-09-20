export { renderers } from '../../renderers.mjs';

const get = async ({ request }) => {
  const token = request.headers.get("Authorization")?.split(" ")[1];
  const response = await fetch(`${"http://localhost:1337"}/api/users/me?populate=cart`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await response.json();
  if (response.ok) {
    return new Response(JSON.stringify(data.cart), { status: 200 });
  } else {
    return new Response(JSON.stringify({ error: "Failed to fetch cart" }), { status: 500 });
  }
};
const post = async ({ request }) => {
  const { productId } = await request.json();
  const token = request.headers.get("Authorization")?.split(" ")[1];
  const response = await fetch(`${"http://localhost:1337"}/api/users/me`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      cart: [productId]
    })
  });
  const data = await response.json();
  if (response.ok) {
    return new Response(JSON.stringify(data), { status: 200 });
  } else {
    return new Response(JSON.stringify({ error: "Failed to update cart" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
