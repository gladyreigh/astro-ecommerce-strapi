import type { APIRoute } from 'astro';

interface ImageData {
    attributes: { url: string; };
}

interface ProductAttributes {
    ProductID: string;
    Title: string;
    Price: number;
    Image: { data: ImageData | null | ImageData[]; };
}

interface Product {
    id: string;
    attributes: ProductAttributes;
}

export const GET: APIRoute = async ({ request }) => {
    const strapiUrl = import.meta.env.PUBLIC_STRAPI_URL;
    const token = request.headers.get('Authorization')?.split(' ')[1];

    if (!strapiUrl || !token) {
        return new Response(JSON.stringify({ error: 'Missing required environment variables' }), { status: 500 });
    }

    try {
        const response = await fetch(`${strapiUrl}/api/products?populate=*`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) {
            const errorData = await response.json();
            return new Response(JSON.stringify({ error: errorData.message || 'Failed to fetch products' }), { status: response.status });
        }

        const data = await response.json();
        const products: Product[] = data.data.map(product => {
            const imageData = product.attributes.Image?.data;
            const imageUrl = Array.isArray(imageData) 
                ? `${strapiUrl}${imageData[0].attributes.url}` 
                : imageData?.attributes 
                    ? `${strapiUrl}${imageData.attributes.url}` 
                    : '/uploads/default-image.jpg';

            return {
                id: product.id,
                attributes: {
                    ProductID: product.attributes.ProductID,
                    Title: product.attributes.Title,
                    Price: product.attributes.Price,
                    Image: { url: imageUrl }
                }
            };
        });

        // Fetch the username of the logged-in user
        const userResponse = await fetch(`${strapiUrl}/api/users/me`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        const userData = await userResponse.json();
        const username = userResponse.ok ? userData.username : null;

        return new Response(JSON.stringify({ products, username }), { status: 200 });
    } catch (error) {
        console.error('Error in /api/products:', error);
        return new Response(JSON.stringify({ error: 'An unexpected error occurred' }), { status: 500 });
    }
};
