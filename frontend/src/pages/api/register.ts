import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { username, email, password } = await request.json();

  try {
    const response = await fetch(`${import.meta.env.PUBLIC_STRAPI_URL}/api/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      return new Response(JSON.stringify({ message: 'Registration successful', jwt: data.jwt }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: data.error?.message || 'Registration failed' }), { status: response.status });
    }
  } catch (error) {
    console.error('Error in /api/register:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};