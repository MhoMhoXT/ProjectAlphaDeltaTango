// api/submit-waitlist.js
// Use 'export default' because package.json has "type": "module"
export default async function handler(request, response) {
  // 1. Check for POST method
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  console.log("Waitlist function (ESM) started.");
  const SHEETDB_URL = process.env.SHEETDB_API_URL;
  
  if (SHEETDB_URL) {
    console.log("SHEETDB_API_URL variable was FOUND.");
  } else {
    console.error("SHEETDB_API_URL variable is UNDEFINED. Check Vercel settings.");
  }

  // 2. Check if the environment variable is loaded
  if (!SHEETDB_URL) {
    return response.status(500).json({ message: 'Server configuration error.' });
  }

  try {
    // 3. Get the body
    const body = request.body;
    
    if (!body || !body.email) {
        console.error("No email found in request body.");
        return response.status(400).json({ message: 'Email is required.' });
    }

    const { email, platforms } = body;

    const dataToSubmit = {
      timestamp: new Date().toISOString(),
      email: email,
      ...(platforms && { platforms: platforms }),
    };
    
    console.log("Attempting to submit to SheetDB:", dataToSubmit);

    // 4. Securely send the data to SheetDB from the server
    const sheetDBResponse = await fetch(SHEETDB_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [dataToSubmit],
      }),
    });

    console.log("SheetDB response status:", sheetDBResponse.status);

    // 5. Handle the response from SheetDB
    if (sheetDBResponse.ok) {
      console.log("Submission successful.");
      return response.status(200).json({ message: 'Success!' });
    } else {
      const errorData = await sheetDBResponse.json();
      console.error("SheetDB submission failed:", errorData);
      return response.status(sheetDBResponse.status).json(errorData);
    }
  } catch (error) {
    console.error("Error in serverless function catch block:", error.message);
    return response.status(500).json({ message: error.message || 'Something went wrong.' });
  }
}