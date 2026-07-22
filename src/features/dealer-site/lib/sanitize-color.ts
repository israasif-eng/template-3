// Returns the color if it is a safe hex or rgb(a) value, otherwise the
// fallback. Templates run this on any dealer-supplied color before applying it
// so a bad value can't inject arbitrary CSS.
const HEX = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
const RGB = /^rgba?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*(?:,\s*(?:0|1|0?\.\d+)\s*)?\)$/;

export function sanitizeColor(value: string | undefined, fallback = "#2563eb"): string {
  if (!value) return fallback;
  const v = value.trim();
  return HEX.test(v) || RGB.test(v) ? v : fallback;
}
