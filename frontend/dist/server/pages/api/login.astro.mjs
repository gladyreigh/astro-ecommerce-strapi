export { renderers } from '../../renderers.mjs';

const post = async ({ request }) => {
  const { email, password } = await request.json();
  const response = await fetch(`${"http://localhost:1337"}/api/auth/local`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      identifier: email,
      password
    })
  });
  const data = await response.json();
  if (response.ok && data.jwt) {
    return new Response(JSON.stringify({ token: data.jwt }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
