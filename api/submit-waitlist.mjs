export default async function handler(request) {
  // 1. Only allow POST requests
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  // 2. Get the secret URL from server-side environment variables
  const SHEETDB_URL = process.env.SHEETDB_API_URL;

  if (!SHEETDB_URL) {
    return new Response(
      JSON.stringify({ message: 'Server configuration error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    // 3. Get the email and platform data from the React component
    const body = await request.json();
    const { email, platforms } = body;

    const dataToSubmit = {
      timestamp: new Date().toISOString(),
      email: email,
      ...(platforms && { platforms: platforms }), // Conditionally add platforms
    };

    // 4. Securely send the data to SheetDB from the server
    const response = await fetch(SHEETDB_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [dataToSubmit],
      }),
    });

    if (response.ok) {
      // 5. Send a success response back to your React component
      return new Response(JSON.stringify({ message: 'Success!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      // 6. Forward the error if SheetDB fails
      const errorData = await response.json();
      return new Response(JSON.stringify(errorData), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ message: error.message || 'Something went wrong.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}