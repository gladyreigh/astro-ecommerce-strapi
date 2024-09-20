export { renderers } from '../../../renderers.mjs';

const post = async ({ request, params }) => {
  const { id } = params;
  const token = request.headers.get("Authorization")?.split(" ")[1];
  const response = await fetch(`${"http://localhost:1337"}/api/users/me`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      cart: {
        $pull: { id }
      }
    })
  });
  const data = await response.json();
  if (response.ok) {
    return new Response(JSON.stringify(data), { status: 200 });
  } else {
    return new Response(JSON.stringify({ error: "Failed to remove item from cart" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
