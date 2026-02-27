import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchSiteContentFromSanity } from '../lib/sanity';
import { defaultSiteContent, type SiteContent } from '../lib/siteContent';

interface SiteContentContextValue {
  content: SiteContent;
}

const SiteContentContext = createContext<SiteContentContextValue>({
  content: defaultSiteContent,
});

export function SiteContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    let isMounted = true;

    const loadContent = async () => {
      const cmsContent = await fetchSiteContentFromSanity();
      if (!isMounted || !cmsContent) {
        return;
      }

      const pickArray = <T,>(candidate: T[] | undefined, fallback: T[]) =>
        Array.isArray(candidate) && candidate.length > 0 ? candidate : fallback;

      setContent({
        ...defaultSiteContent,
        ...cmsContent,
        navbarLinks: pickArray(cmsContent.navbarLinks, defaultSiteContent.navbarLinks),
        about: {
          ...defaultSiteContent.about,
          ...cmsContent.about,
          highlights: pickArray(cmsContent.about?.highlights, defaultSiteContent.about.highlights),
          values: pickArray(cmsContent.about?.values, defaultSiteContent.about.values),
        },
        services: {
          ...defaultSiteContent.services,
          ...cmsContent.services,
          items: pickArray(cmsContent.services?.items, defaultSiteContent.services.items),
        },
        iot: {
          ...defaultSiteContent.iot,
          ...cmsContent.iot,
          features: pickArray(cmsContent.iot?.features, defaultSiteContent.iot.features),
          useCases: pickArray(cmsContent.iot?.useCases, defaultSiteContent.iot.useCases),
        },
        portfolio: {
          ...defaultSiteContent.portfolio,
          ...cmsContent.portfolio,
          categories: pickArray(cmsContent.portfolio?.categories, defaultSiteContent.portfolio.categories),
          items: pickArray(cmsContent.portfolio?.items, defaultSiteContent.portfolio.items),
        },
        blog: {
          ...defaultSiteContent.blog,
          ...cmsContent.blog,
          categories: pickArray(cmsContent.blog?.categories, defaultSiteContent.blog.categories),
          posts: pickArray(cmsContent.blog?.posts, defaultSiteContent.blog.posts),
        },
        research: {
          ...defaultSiteContent.research,
          ...cmsContent.research,
          areas: pickArray(cmsContent.research?.areas, defaultSiteContent.research.areas),
          publications: pickArray(cmsContent.research?.publications, defaultSiteContent.research.publications),
          achievements: pickArray(cmsContent.research?.achievements, defaultSiteContent.research.achievements),
        },
        testimonials: {
          ...defaultSiteContent.testimonials,
          ...cmsContent.testimonials,
          items: pickArray(cmsContent.testimonials?.items, defaultSiteContent.testimonials.items),
          stats: pickArray(cmsContent.testimonials?.stats, defaultSiteContent.testimonials.stats),
        },
        contact: {
          ...defaultSiteContent.contact,
          ...cmsContent.contact,
          items: pickArray(cmsContent.contact?.items, defaultSiteContent.contact.items),
        },
        footer: {
          ...defaultSiteContent.footer,
          ...cmsContent.footer,
          quickLinks: pickArray(cmsContent.footer?.quickLinks, defaultSiteContent.footer.quickLinks),
          services: pickArray(cmsContent.footer?.services, defaultSiteContent.footer.services),
          socialLinks: pickArray(cmsContent.footer?.socialLinks, defaultSiteContent.footer.socialLinks),
          legalLinks: pickArray(cmsContent.footer?.legalLinks, defaultSiteContent.footer.legalLinks),
        },
        trustedBy: { ...defaultSiteContent.trustedBy, ...cmsContent.trustedBy },
      });
    };

    loadContent();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <SiteContentContext.Provider value={{ content }}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
