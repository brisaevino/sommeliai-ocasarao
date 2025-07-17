import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  // Dados do Mailchimp
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!email || !apiKey || !audienceId || !serverPrefix) {
    return NextResponse.json({ error: 'Dados ausentes.' }, { status: 400 });
  }

  // Endpoint do Mailchimp
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  // Requisição para Mailchimp
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `apikey ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
    }),
  });

  if (response.ok) {
    return NextResponse.json({ success: true });
  } else {
    const error = await response.json();
    return NextResponse.json({ error }, { status: 400 });
  }
}