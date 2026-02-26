import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  pageType?: 'website' | 'article';
  noIndex?: boolean;
}

export function SEO({
  title = 'Zenture IT Solutions - Web, Mobile, AI & IoT Development Company',
  description = 'Leading software development company providing web development, mobile app development, IoT solutions, and AI-powered services. Trusted by Indian Army, Forest Department & Guinness World Records.',
  keywords = 'software development, web development, mobile app development, IoT solutions, AI development, React development, Node.js, Flutter, Python, custom software, enterprise solutions, Zenture IT Solutions',
  ogImage = 'https://zenture.in/og-image.jpg',
  ogUrl = 'https://zenture.in',
  pageType = 'website',
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    const siteName = 'Zenture IT Solutions';
    const siteUrl = 'https://zenture.in';
    const canonicalUrl = ogUrl;
    const robotsContent = noIndex ? 'noindex, nofollow' : 'index, follow';

    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.rel = rel;
        document.head.appendChild(element);
      }
      element.href = href;
    };

    const updateJsonLdScript = (id: string, data: Record<string, unknown>) => {
      let scriptTag = document.querySelector(`script#${id}`) as HTMLScriptElement;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = id;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(data);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', siteName);
    updateMetaTag('robots', robotsContent);
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('referrer', 'strict-origin-when-cross-origin');
    updateMetaTag('format-detection', 'telephone=no');

    // Open Graph meta tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:type', pageType, 'property');
    updateMetaTag('og:site_name', siteName, 'property');
    updateMetaTag('og:locale', 'en_IN', 'property');

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:url', canonicalUrl);
    updateMetaTag('twitter:site', '@zentureit');

    // Additional SEO meta tags
    updateMetaTag('theme-color', '#0891b2'); // Cyan-600
    updateMetaTag('msapplication-TileColor', '#0891b2');

    // Canonical URL for indexing consistency across duplicate paths/params.
    updateLinkTag('canonical', canonicalUrl);

    // Structured data is split per type to keep edits readable for developers.
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
      logo: 'https://zenture.in/logo.png',
      description: description,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        availableLanguage: ['English', 'Hindi'],
      },
      sameAs: [
        'https://www.linkedin.com/company/zenture-it-solutions',
        'https://twitter.com/zentureit',
      ],
      serviceType: [
        'Web Development',
        'Mobile App Development',
        'Software Development',
        'IoT Solutions',
        'AI Development',
      ],
    };

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    };

    const webPageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
    };

    updateJsonLdScript('schema-organization', organizationSchema);
    updateJsonLdScript('schema-website', websiteSchema);
    updateJsonLdScript('schema-webpage', webPageSchema);
  }, [title, description, keywords, ogImage, ogUrl, pageType, noIndex]);

  return null;
}
