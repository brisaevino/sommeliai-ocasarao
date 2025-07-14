import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !audienceId || !serverPrefix) {
    return Response.json({ error: "Configuração do Mailchimp ausente." }, { status: 500 });
  }

  const data = {
    email_address: email,
    status: "subscribed"
  };

  const response = await fetch(
    `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from("any:" + apiKey).toString("base64")}`
      },
      body: JSON.stringify(data)
    }
  );

  if (response.status === 200 || response.status === 201) {
    return Response.json({ success: true });
  } else {
    const error = await response.json();
    return Response.json({ error: error.detail || "Erro ao cadastrar e-mail." }, { status: 400 });
  }
}
