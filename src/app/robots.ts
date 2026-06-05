import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/drafts'],
    },
    sitemap: 'https://portfolio.local/sitemap.xml',
  }
}
