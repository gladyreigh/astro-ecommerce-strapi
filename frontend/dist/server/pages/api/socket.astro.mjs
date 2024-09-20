export { renderers } from '../../renderers.mjs';

const get = async () => {
  const socket = new WebSocket("ws://localhost:1337");
  socket.onopen = () => {
    console.log("WebSocket connection established");
  };
  socket.onmessage = (event) => {
    console.log("Message from server:", event.data);
  };
  return new Response("WebSocket connection opened", { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
