import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  // This endpoint should not be used directly. WebSocket connections should be handled client-side.
  return new Response(JSON.stringify({ error: 'WebSocket connections should be established client-side' }), { status: 400 });
};