import {createClient} from '@sanity/client';
import groq from 'groq';
import type { SiteContent } from './siteContent';

const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'pyodekba';
const sanityDataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const sanityApiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2026-02-26';

const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: true,
});

export interface HeroCMSData {
  badgeText: string;
  titleLine1: string;
  titleHighlight: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: EmploymentType;
  experience: string;
  summary: string;
  requirements: string[];
  responsibilities: string[];
  applyUrl: string;
  postedDate: string;
}

export interface CareersCMSData {
  heading: string;
  subheading: string;
  positions: CareerPosition[];
}

const heroQuery = groq`*[_type == "hero"][0]{
  badgeText,
  titleLine1,
  titleHighlight,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}`;

const careersQuery = groq`*[_type == "careersPage"][0]{
  heading,
  subheading,
  "positions": positions[]{
    id,
    title,
    department,
    location,
    type,
    experience,
    summary,
    requirements,
    responsibilities,
    applyUrl,
    postedDate
  }
}`;

const siteContentQuery = groq`*[_type == "siteContent"][0]{
  navbarLinks,
  about{
    titlePrefix,
    titleHighlight,
    subtitle,
    yearsValue,
    yearsLabel,
    paragraph1,
    paragraph2,
    highlights,
    values
  },
  services{
    titlePrefix,
    titleHighlight,
    subtitle,
    ctaText,
    ctaHref,
    items
  },
  iot{
    titlePrefix,
    titleHighlight,
    subtitle,
    implementationTitle,
    implementationDescription,
    applicationAreaTitle,
    features,
    useCases
  },
  portfolio{
    titlePrefix,
    titleHighlight,
    subtitle,
    categories,
    ctaText,
    ctaHref,
    items
  },
  blog{
    titlePrefix,
    titleHighlight,
    subtitle,
    categories,
    posts
  },
  research{
    titlePrefix,
    titleHighlight,
    subtitle,
    labTitle,
    labDescription,
    publicationSectionTitle,
    areas,
    publications,
    achievements
  },
  testimonials{
    titlePrefix,
    titleHighlight,
    subtitle,
    items,
    stats
  },
  contact{
    titlePrefix,
    titleHighlight,
    subtitle,
    infoTitle,
    infoDescription,
    responseTitle,
    responseText,
    items
  },
  footer{
    description,
    quickLinks,
    services,
    socialLinks,
    legalLinks
  },
  trustedBy{
    eyebrow,
    titlePrefix,
    titleHighlight,
    subtitle,
    badgeText
  }
}`;

export async function fetchHeroFromSanity(): Promise<HeroCMSData | null> {
  try {
    const data = await client.fetch<HeroCMSData | null>(heroQuery);
    return data;
  } catch (error) {
    console.error('Failed to fetch hero data from Sanity:', error);
    return null;
  }
}

export async function fetchCareersFromSanity(): Promise<CareersCMSData | null> {
  try {
    const data = await client.fetch<CareersCMSData | null>(careersQuery);
    return data;
  } catch (error) {
    console.error('Failed to fetch careers data from Sanity:', error);
    return null;
  }
}

export async function fetchSiteContentFromSanity(): Promise<SiteContent | null> {
  try {
    const data = await client.fetch<SiteContent | null>(siteContentQuery);
    return data;
  } catch (error) {
    console.error('Failed to fetch site content from Sanity:', error);
    return null;
  }
}