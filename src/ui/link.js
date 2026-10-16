/** Props every link that leaves the site gets: new tab, no window.opener, no referrer leak. */
export const externalLinkProps = { target: '_blank', rel: 'noopener noreferrer' }

export const linkProps = ({ external }) => (external ? externalLinkProps : {})
