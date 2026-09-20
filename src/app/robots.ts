import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo/site';

/**
 * Single source of robots rules (the old static public/robots.txt — which named
 * the www host — has been removed). Non-www host, and an explicit allow for the
 * major AI crawlers so answer engines can read the content.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    'PerplexityBot',
    'Google-Extended',
    'CCBot',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/widget', '/book-appointment', '/*?*'],
      },
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/admin/', '/api/'],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
