import {createClient} from '@sanity/client';
import groq from 'groq';

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
