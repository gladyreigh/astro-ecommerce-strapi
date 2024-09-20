import type { APIRoute } from 'astro';

const cart: { id: string; Title: string; Price: number; Image: string }[] = [];

export const POST: APIRoute = async ({ request }) => {
    const token = request.headers.get('Authorization')?.split(' ')[1];

    if (!token) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { id, Title, Price, Image } = await request.json();
    
    // Allow duplicates by simply pushing to the cart
    cart.push({ id, Title, Price, Image });
    return new Response(JSON.stringify({ message: 'Item added to cart' }), { status: 201 });
};

export const GET: APIRoute = async ({ request }) => {
    const token = request.headers.get('Authorization')?.split(' ')[1];

    if (!token) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    return new Response(JSON.stringify({ cartItems: cart }), { status: 200 });
};

export const DELETE: APIRoute = async ({ request }) => {
    const token = request.headers.get('Authorization')?.split(' ')[1];

    if (!token) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { id } = await request.json();

    // Remove the first occurrence of the item with the given ID
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        return new Response(JSON.stringify({ message: 'Item removed from cart' }), { status: 200 });
    }

    return new Response(JSON.stringify({ error: 'Item not found in cart' }), { status: 404 });
};
