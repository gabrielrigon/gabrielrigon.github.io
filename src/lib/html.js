const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }

export const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ESCAPES[char])

/** JSON that is safe inside <script>: a "</script>" or "<!--" in a string can't end the block. */
export const serializeJsonForScript = data => JSON.stringify(data).replace(/</g, '\\u003c')
