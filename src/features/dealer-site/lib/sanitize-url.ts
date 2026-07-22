// Allow only http(s) and mailto/tel URLs. Anything else (javascript:, data:,
// etc.) returns "" so templates never render an unsafe href/src from
// dealer-supplied data.
export function sanitizeUrl(value: string | undefined): string {
  if (!value) return "";
  const v = value.trim();
  if (/^(mailto:|tel:)/i.test(v)) return v;
  try {
    const url = new URL(v, "https://example.com");
    if (url.protocol === "http:" || url.protocol === "https:") return v;
  } catch {
    // fall through
  }
  return "";
}
