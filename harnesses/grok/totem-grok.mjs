/** Dependency-free xAI Responses adapter. Importing this file performs no I/O. */
export function createTotemTool({
  token = process.env.TOTEM_NETWORK_API_KEY,
  allowedTools = ["totem_get_identity"],
} = {}) {
  if (typeof token !== "string" || !token.trim() || /[\r\n]/.test(token))
    throw new Error("Supply your Totem agent token through a secret manager.");
  if (
    !Array.isArray(allowedTools) ||
    !allowedTools.length ||
    allowedTools.some((name) => typeof name !== "string" || !/^totem_[a-z0-9_]+$/.test(name))
  )
    throw new Error("Supply a nonempty list of Totem tools authorized for this request.");
  return {
    type: "mcp",
    server_label: "totem",
    server_url: "https://totemlayer.com/mcp",
    authorization: token.trim(),
    allowed_tools: [...new Set(allowedTools)],
  };
}

export async function requestTotemGrok({
  apiKey = process.env.XAI_API_KEY,
  model = process.env.XAI_MODEL,
  input = "Use Totem to check my identity and report the exact agent address.",
  token,
  allowedTools,
  signal,
  fetchImpl = globalThis.fetch,
} = {}) {
  if (typeof apiKey !== "string" || !apiKey.trim() || /[\r\n]/.test(apiKey))
    throw new Error("Set XAI_API_KEY through a secret manager.");
  if (typeof model !== "string" || !model.trim())
    throw new Error("Set XAI_MODEL to a model available to your xAI account.");
  if (typeof input !== "string" || !input.trim()) throw new Error("Supply a request.");
  const response = await fetchImpl("https://api.x.ai/v1/responses", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey.trim()}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model, input, tools: [createTotemTool({ token, allowedTools })] }),
    signal: signal ?? AbortSignal.timeout(60_000),
    redirect: "error",
  });
  // Error bodies may contain echoed credentials. Return only the status.
  if (!response.ok)
    throw new Error(
      `xAI request failed (HTTP ${response.status}); inspect connection status before retrying a write.`,
    );
  return response.json();
}
