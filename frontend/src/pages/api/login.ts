import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, password } = await request.json();

    // Log the request data for debugging
    console.log('Login attempt for email:', email);

    const response = await fetch(`${import.meta.env.PUBLIC_STRAPI_URL}/api/auth/local`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier: email,
        password,
      }),
    });

    const data = await response.json();

    // Log the response for debugging
    console.log('Login response:', data);

    if (response.ok && data.jwt) {
      const username = data.user.username; // Extract username from the response
      return new Response(JSON.stringify({ jwt: data.jwt, username }), { status: 200 });
    } else {
      console.error('Login failed:', data.error || 'Invalid credentials');
      return new Response(JSON.stringify({ error: data.error || 'Invalid credentials' }), { status: 401 });
    }
  } catch (error) {
    console.error('Error in /api/login:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};
