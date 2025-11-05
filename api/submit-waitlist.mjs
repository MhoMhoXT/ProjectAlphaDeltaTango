export default async function handler(request) {
  // 1. Only allow POST requests
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  // --- START DEBUGGING ---
  console.log("Waitlist function started.");
  const SHEETDB_URL = process.env.SHEETDB_API_URL;
  
  if (SHEETDB_URL) {
    console.log("SHEETDB_API_URL variable was FOUND.");
  } else {
    console.error("SHEETDB_API_URL variable is UNDEFINED. Check Vercel settings.");
  }
  // --- END DEBUGGING ---


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
    
    console.log("Attempting to submit to SheetDB..."); // New log

    // 4. Securely send the data to SheetDB from the server
    const response = await fetch(SHEETDB_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [dataToSubmit],
      }),
    });

    console.log("SheetDB response status:", response.status); // New log

    if (response.ok) {
      // 5. Send a success response back to your React component
      console.log("Submission successful."); // New log
      return new Response(JSON.stringify({ message: 'Success!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      // 6. Forward the error if SheetDB fails
      const errorData = await response.json();
      console.error("SheetDB submission failed:", errorData); // New log
      return new Response(JSON.stringify(errorData), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error("Error in serverless function catch block:", error.message); // New log
    return new Response(
      JSON.stringify({ message: error.message || 'Something went wrong.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}