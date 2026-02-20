import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export function SEO({
  title = 'Zenture IT Solutions - Web, Mobile, AI & IoT Development Company',
  description = 'Leading software development company providing web development, mobile app development, IoT solutions, and AI-powered services. Trusted by Indian Army, Forest Department & Guinness World Records.',
  keywords = 'software development, web development, mobile app development, IoT solutions, AI development, React development, Node.js, Flutter, Python, custom software, enterprise solutions, Zenture IT Solutions',
  ogImage = 'https://zenture.in/og-image.jpg',
  ogUrl = 'https://zenture.in',
}: SEOProps) {
  useEffect(() => {
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

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Zenture IT Solutions');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph meta tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', ogUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'Zenture IT Solutions', 'property');

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Additional SEO meta tags
    updateMetaTag('theme-color', '#0891b2'); // Cyan-600
    updateMetaTag('msapplication-TileColor', '#0891b2');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = ogUrl;

    // Add structured data (Schema.org JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zenture IT Solutions',
      url: 'https://zenture.in',
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

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogImage, ogUrl]);

  return null;
}