import { useEffect } from 'react'

const setMeta = (selector, attr, value) => {
  const tag = document.head.querySelector(selector)
  if (tag) tag.setAttribute(attr, value)
}

/* Both routes share one static index.html, so each screen sets its own
   title and description for crawlers and for shared links. */
export default function useDocumentMeta({ title, description, path }) {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', `https://gabrielrigon.com.br${path}`)
    setMeta('link[rel="canonical"]', 'href', `https://gabrielrigon.com.br${path}`)
  }, [title, description, path])
}
