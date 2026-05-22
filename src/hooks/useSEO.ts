import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical?: string
}

export function useSEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    document.title = title

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl && canonical) ogUrl.setAttribute('content', canonical)

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link')
        canonicalLink.rel = 'canonical'
        document.head.appendChild(canonicalLink)
      }
      canonicalLink.href = canonical
    }
  }, [title, description, canonical])
}
