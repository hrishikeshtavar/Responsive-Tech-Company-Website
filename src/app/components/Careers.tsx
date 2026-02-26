import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, Clock3, MapPin } from 'lucide-react';

type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';

interface CareerPosition {
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

interface CareersCMSData {
  heading: string;
  subheading: string;
  lastUpdated: string;
  positions: CareerPosition[];
}

// Fallback data keeps the page usable if CMS JSON is unavailable during deployment.
const fallbackCareersData: CareersCMSData = {
  heading: 'Build The Future With Zenture IT',
  subheading: 'Join our team to work on meaningful software, AI, and IoT products.',
  lastUpdated: '2026-02-26',
  positions: [
    {
      id: 'frontend-engineer-01',
      title: 'Frontend Engineer (React)',
      department: 'Engineering',
      location: 'Remote / India',
      type: 'Full-time',
      experience: '2-4 years',
      summary: 'Build performant web experiences and collaborate closely with design and backend teams.',
      requirements: [
        'Strong React and TypeScript fundamentals',
        'Experience with responsive UI and accessibility',
        'Good understanding of API integration and state management',
      ],
      responsibilities: [
        'Develop and maintain reusable frontend components',
        'Translate Figma and product requirements into production UI',
        'Optimize performance and improve front-end quality',
      ],
      applyUrl: 'mailto:careers@zentureit.com?subject=Application%20-%20Frontend%20Engineer',
      postedDate: '2026-02-20',
    },
    {
      id: 'backend-engineer-01',
      title: 'Backend Engineer (Node.js)',
      department: 'Engineering',
      location: 'Hybrid / Pune',
      type: 'Full-time',
      experience: '3-6 years',
      summary: 'Design and implement robust backend services powering our client-facing products.',
      requirements: [
        'Hands-on Node.js and relational databases',
        'Experience with REST APIs and service-oriented architecture',
        'Knowledge of cloud deployment workflows',
      ],
      responsibilities: [
        'Build secure APIs and service integrations',
        'Maintain backend performance and observability',
        'Work with frontend and DevOps teams for releases',
      ],
      applyUrl: 'mailto:careers@zentureit.com?subject=Application%20-%20Backend%20Engineer',
      postedDate: '2026-02-18',
    },
  ],
};

const isCareerPosition = (item: unknown): item is CareerPosition => {
  if (!item || typeof item !== 'object') {
    return false;
  }

  const candidate = item as Partial<CareerPosition>;
  return Boolean(
    candidate.id &&
    candidate.title &&
    candidate.department &&
    candidate.location &&
    candidate.type &&
    candidate.experience &&
    candidate.summary &&
    Array.isArray(candidate.requirements) &&
    Array.isArray(candidate.responsibilities) &&
    candidate.applyUrl &&
    candidate.postedDate,
  );
};

const isCareersCMSData = (item: unknown): item is CareersCMSData => {
  if (!item || typeof item !== 'object') {
    return false;
  }

  const candidate = item as Partial<CareersCMSData>;
  return Boolean(
    candidate.heading &&
    candidate.subheading &&
    candidate.lastUpdated &&
    Array.isArray(candidate.positions) &&
    candidate.positions.every(isCareerPosition),
  );
};

export function Careers() {
  const [cmsData, setCmsData] = useState<CareersCMSData>(fallbackCareersData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadCareersFromCMS = async () => {
      try {
        // Primary editable source for roles:
        // public/cms/careers.json
        const response = await fetch('/cms/careers.json', { cache: 'no-store' });
        if (!response.ok) {
          return;
        }

        const data: unknown = await response.json();
        if (isMounted && isCareersCMSData(data)) {
          setCmsData(data);
        }
      } catch (error) {
        console.error('Failed to load careers CMS content:', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadCareersFromCMS();
    return () => {
      isMounted = false;
    };
  }, []);

  const sortedPositions = useMemo(
    () =>
      [...cmsData.positions].sort(
        (a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime(),
      ),
    [cmsData.positions],
  );

  return (
    <section className="relative overflow-hidden bg-slate-900 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            <Briefcase className="h-4 w-4" />
            Careers
          </p>
          <h1 className="mb-4 text-4xl text-white sm:text-5xl md:text-6xl">{cmsData.heading}</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">{cmsData.subheading}</p>
        </motion.div>

        {isLoading ? (
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-8 text-center text-slate-300">
            Loading positions...
          </div>
        ) : null}

        {!isLoading && sortedPositions.length === 0 ? (
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-8 text-center text-slate-300">
            There are no open positions right now. Please check back soon.
          </div>
        ) : null}

        <div className="space-y-8">
          {sortedPositions.map((position, index) => (
            <motion.article
              key={position.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 shadow-lg shadow-cyan-950/20 md:p-8"
            >
              <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl text-white">{position.title}</h2>
                  <p className="mt-2 text-slate-300">{position.summary}</p>
                </div>
                <a
                  href={position.applyUrl}
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white transition hover:shadow-lg hover:shadow-cyan-500/40"
                >
                  Apply Now
                </a>
              </div>

              <div className="mb-6 grid grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
                <p className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2">
                  <Building2 className="h-4 w-4 text-cyan-400" />
                  {position.department}
                </p>
                <p className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  {position.location}
                </p>
                <p className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2">
                  <Briefcase className="h-4 w-4 text-cyan-400" />
                  {position.type}
                </p>
                <p className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2">
                  <Clock3 className="h-4 w-4 text-cyan-400" />
                  {position.experience}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-lg text-cyan-300">Responsibilities</h3>
                  <ul className="space-y-2 text-slate-300">
                    {position.responsibilities.map((item) => (
                      <li key={item} className="rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg text-cyan-300">Requirements</h3>
                  <ul className="space-y-2 text-slate-300">
                    {position.requirements.map((item) => (
                      <li key={item} className="rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
