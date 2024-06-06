export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { fname, lname, email, phone, message } = req.body;

  if (!fname || !lname || !email || !phone || !message) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  try {
    const airtableResponse = await fetch(
      'https://api.airtable.com/v0/appJR1EiOHZwNV46t/tbl1lqA0QKonu7b8d',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                fname,
                lname,
                email,
                phone,
                message,
              },
            },
          ],
        }),
      },
    );

    if (!airtableResponse.ok) {
      const errorDetails = await airtableResponse.json();
      res
        .status(500)
        .json({ error: 'Failed to submit form', details: errorDetails });
      return;
    }

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting to Airtable:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
