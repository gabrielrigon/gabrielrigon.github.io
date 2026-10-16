/**
 * The site ships no JavaScript at all, so no script source is allowed. JSON-LD is a data block
 * and is not affected by script-src. Delivered as a <meta>, where frame-ancestors is ignored,
 * so it is left out.
 */
export const CONTENT_SECURITY_POLICY = [
  "default-src 'none'",
  "script-src 'none'",
  "style-src 'self'",
  "img-src 'self'",
  "font-src 'self'",
  "manifest-src 'self'",
  "base-uri 'none'",
  "form-action 'none'",
  'upgrade-insecure-requests',
].join('; ')
