/**
 * Kakao Alimtalk via Solapi.
 * Without credentials, jobs are marked pending_credentials / skipped.
 */
export async function sendKakaoAlimtalk(options: {
  to: string;
  text: string;
  pfId?: string;
  templateId?: string;
}) {
  const apiKey = process.env.SOLAPI_API_KEY;
  const apiSecret = process.env.SOLAPI_API_SECRET;
  const from = process.env.SOLAPI_FROM_NUMBER;

  if (!apiKey || !apiSecret || !from) {
    return { ok: false as const, reason: "pending_credentials" as const };
  }

  if (!options.to) {
    return { ok: false as const, reason: "skipped" as const };
  }

  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");
  const body = {
    message: {
      to: options.to.replace(/\D/g, ""),
      from: from.replace(/\D/g, ""),
      text: options.text,
      type: options.templateId ? "ATA" : "SMS",
      kakaoOptions: options.templateId
        ? {
            pfId: options.pfId || process.env.SOLAPI_PF_ID,
            templateId: options.templateId,
          }
        : undefined,
    },
  };

  try {
    const res = await fetch("https://api.solapi.com/messages/v4/send", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errText = await res.text();
      return { ok: false as const, reason: "failed" as const, error: errText };
    }
    return { ok: true as const };
  } catch (error) {
    return {
      ok: false as const,
      reason: "failed" as const,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
