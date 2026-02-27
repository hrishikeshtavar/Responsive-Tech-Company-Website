import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, CheckCircle2, Clock3, MapPin, Send } from 'lucide-react';
import {
  fetchCareersFromSanity,
  type CareerPosition,
  type CareersCMSData,
} from '../lib/sanity';

// Fallback keeps the page usable when CMS data is unavailable.
const fallbackCareersData: CareersCMSData = {
  heading: 'Build The Future With Zenture IT',
  subheading: 'Join our team to work on meaningful software, AI, and IoT products.',
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
      applyUrl: 'mailto:careers@zenture.in?subject=Application%20-%20Frontend%20Engineer',
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
      applyUrl: 'mailto:careers@zenture.in?subject=Application%20-%20Backend%20Engineer',
      postedDate: '2026-02-18',
    },
    {
      id: 'fullstack-developer-01',
      title: 'Full Stack Developer (Full-Time & Internship)',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: 'Internship / 1-4 years',
      summary:
        'Build scalable web applications across frontend and backend, collaborate with product teams, and support cloud deployments for production-ready solutions.',
      requirements: [
        'Hands-on experience with modern JavaScript/TypeScript frameworks',
        'Good understanding of REST APIs, databases, and backend architecture',
        'Familiarity with cloud platforms and deployment workflows',
      ],
      responsibilities: [
        'Develop and maintain end-to-end web features from UI to APIs',
        'Collaborate with design and QA teams to ship high-quality releases',
        'Contribute to performance, security, and maintainability improvements',
      ],
      applyUrl:
        'mailto:careers@zenture.in?subject=Application%20-%20Full%20Stack%20Developer',
      postedDate: '2026-02-27',
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

const isCareersData = (item: unknown): item is CareersCMSData => {
  if (!item || typeof item !== 'object') {
    return false;
  }

  const candidate = item as Partial<CareersCMSData>;
  return Boolean(
    candidate.heading &&
      candidate.subheading &&
      Array.isArray(candidate.positions) &&
      candidate.positions.every(isCareerPosition),
  );
};

export function Careers() {
  const [cmsData, setCmsData] = useState<CareersCMSData>(fallbackCareersData);
  const [isLoading, setIsLoading] = useState(true);
  const formStartRef = useRef<number>(Date.now());
  const applicationFormRef = useRef<HTMLDivElement | null>(null);
  const resumeInputRef = useRef<HTMLInputElement | null>(null);
  const [isSubmittingApplication, setIsSubmittingApplication] = useState(false);
  const [applicationSubmitMessage, setApplicationSubmitMessage] = useState('');
  const [isApplicationSubmitted, setIsApplicationSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    website: '',
  });

  useEffect(() => {
    let isMounted = true;

    const loadCareersFromCMS = async () => {
      try {
        const sanityData = await fetchCareersFromSanity();
        if (isMounted && sanityData && isCareersData(sanityData)) {
          setCmsData(sanityData);
          return;
        }

        // Legacy fallback source.
        const response = await fetch('/cms/careers.json', { cache: 'no-store' });
        if (!response.ok) {
          return;
        }

        const fileData: unknown = await response.json();
        if (isMounted && isCareersData(fileData)) {
          setCmsData({
            heading: fileData.heading,
            subheading: fileData.subheading,
            positions: fileData.positions,
          });
        }
      } catch (error) {
        console.error('Failed to load careers content:', error);
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

  const handleApplicationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setApplicationForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;
    setResumeFile(selectedFile);
  };

  const handleApplyNowClick = (positionTitle: string) => {
    setApplicationForm((prev) => ({ ...prev, position: positionTitle }));
    setIsApplicationSubmitted(false);
    setApplicationSubmitMessage('');
    applicationFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleApplicationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApplicationSubmitMessage('');

    const timeToSubmitMs = Date.now() - formStartRef.current;
    if (applicationForm.website || timeToSubmitMs < 3000) {
      setApplicationSubmitMessage('Unable to submit right now. Please try again.');
      return;
    }
    if (!resumeFile) {
      setApplicationSubmitMessage('Please attach your resume before submitting.');
      return;
    }

    try {
      setIsSubmittingApplication(true);
      const payload = new FormData();
      payload.append('fullName', applicationForm.fullName);
      payload.append('email', applicationForm.email);
      payload.append('phone', applicationForm.phone);
      payload.append('position', applicationForm.position || 'General Application');
      payload.append('message', applicationForm.message);
      // FormSubmit file attachments should be posted as `attachment`.
      payload.append('attachment', resumeFile, resumeFile.name);
      payload.append('resumeFileName', resumeFile.name);
      payload.append(
        '_subject',
        `Career Application - ${applicationForm.position || 'General Application'}`,
      );
      payload.append('_template', 'table');
      payload.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/careers@zenture.in', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setApplicationForm({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        message: '',
        website: '',
      });
      setResumeFile(null);
      if (resumeInputRef.current) {
        resumeInputRef.current.value = '';
      }
      formStartRef.current = Date.now();
      setApplicationSubmitMessage('Application sent to careers@zenture.in.');
      setIsApplicationSubmitted(true);
    } catch (error) {
      console.error('Failed to submit careers application:', error);
      setApplicationSubmitMessage('Submission failed. Please try again.');
    } finally {
      setIsSubmittingApplication(false);
    }
  };

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
                <button
                  type="button"
                  onClick={() => handleApplyNowClick(position.title)}
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white transition hover:shadow-lg hover:shadow-cyan-500/40"
                >
                  Apply Now
                </button>
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

        <motion.div
          ref={applicationFormRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-slate-700 bg-slate-800/50 p-6 shadow-lg shadow-cyan-950/20 md:p-8"
        >
          <h2 className="mb-2 text-2xl text-white">Apply via Form</h2>
          <p className="mb-6 text-slate-300">
            Submit your details and we will send your application to careers@zenture.in.
          </p>

          {!isApplicationSubmitted ? (
            <form onSubmit={handleApplicationSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="fullName"
                required
                value={applicationForm.fullName}
                onChange={handleApplicationChange}
                className="rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                placeholder="Full name"
              />
              <input
                type="email"
                name="email"
                required
                value={applicationForm.email}
                onChange={handleApplicationChange}
                className="rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                placeholder="Email address"
              />
              <input
                type="tel"
                name="phone"
                required
                value={applicationForm.phone}
                onChange={handleApplicationChange}
                className="rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                placeholder="Phone number"
              />
              <select
                name="position"
                value={applicationForm.position}
                onChange={handleApplicationChange}
                className="rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="">Select position</option>
                {sortedPositions.map((position) => (
                  <option key={position.id} value={position.title}>
                    {position.title}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                required
                value={applicationForm.message}
                onChange={handleApplicationChange}
                rows={5}
                className="md:col-span-2 rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                placeholder="Tell us about your experience"
              />
              <div className="md:col-span-2">
                <label htmlFor="resume" className="mb-2 block text-sm text-slate-300">
                  Resume (PDF/DOC) *
                </label>
                <input
                  ref={resumeInputRef}
                  id="resume"
                  type="file"
                  name="attachment"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white file:mr-4 file:rounded-md file:border-0 file:bg-cyan-500 file:px-3 file:py-2 file:text-white hover:file:bg-cyan-600 focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="career-website">Website</label>
                <input
                  id="career-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={applicationForm.website}
                  onChange={handleApplicationChange}
                />
              </div>

              <motion.button
                type="submit"
                animate={isSubmittingApplication ? { scale: [1, 1.01, 1] } : { scale: 1 }}
                transition={{ repeat: isSubmittingApplication ? Infinity : 0, duration: 0.9 }}
                disabled={isSubmittingApplication}
                className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white transition hover:shadow-lg hover:shadow-cyan-500/40"
              >
                <Send className="h-4 w-4" />
                {isSubmittingApplication ? 'Sending...' : 'Submit Application'}
              </motion.button>
              {applicationSubmitMessage ? (
                <p className="md:col-span-2 text-sm text-slate-300">{applicationSubmitMessage}</p>
              ) : null}
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center"
            >
              <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-400" />
              <h3 className="text-2xl text-white">Application Submitted</h3>
              <p className="mt-2 text-slate-300">
                We have received your details and resume at careers@zenture.in.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
