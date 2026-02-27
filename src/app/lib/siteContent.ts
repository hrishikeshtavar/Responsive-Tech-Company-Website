export type IconKey =
  | 'target'
  | 'lightbulb'
  | 'rocket'
  | 'globe'
  | 'code'
  | 'smartphone'
  | 'cpu'
  | 'brain'
  | 'code2'
  | 'wifi'
  | 'database'
  | 'shield'
  | 'cloud'
  | 'zap'
  | 'beaker'
  | 'trendingUp'
  | 'users'
  | 'award'
  | 'bookOpen';

export interface NavLink {
  name: string;
  href: string;
}

export interface AboutValue {
  icon: IconKey;
  title: string;
  description: string;
}

export interface AboutContent {
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  yearsValue: string;
  yearsLabel: string;
  paragraph1: string;
  paragraph2: string;
  highlights: string[];
  values: AboutValue[];
}

export interface ServiceItem {
  icon: IconKey;
  title: string;
  description: string;
  color: string;
}

export interface ServicesContent {
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  items: ServiceItem[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: IconKey;
  gradient: string;
  isActive?: boolean;
  liveUrl?: string;
  repoUrl?: string;
}

export interface PortfolioContent {
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  categories: string[];
  ctaText: string;
  ctaHref: string;
  items: PortfolioItem[];
}

export interface BlogPostContent {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  content?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface BlogContent {
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  categories: string[];
  posts: BlogPostContent[];
}

export interface ResearchArea {
  icon: IconKey;
  title: string;
  description: string;
  publications: number;
  color: string;
}

export interface IotFeature {
  icon: IconKey;
  title: string;
  description: string;
}

export interface IotContent {
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  implementationTitle: string;
  implementationDescription: string;
  applicationAreaTitle: string;
  features: IotFeature[];
  useCases: string[];
}

export interface ResearchPublication {
  title: string;
  journal: string;
  year: string;
  authors: string;
  type: string;
}

export interface ResearchAchievement {
  icon: IconKey;
  title: string;
  description: string;
}

export interface ResearchContent {
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  labTitle: string;
  labDescription: string;
  publicationSectionTitle: string;
  areas: ResearchArea[];
  publications: ResearchPublication[];
  achievements: ResearchAchievement[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  position: string;
  organization: string;
  content: string;
  rating: number;
}

export interface TestimonialStat {
  number: string;
  label: string;
}

export interface TestimonialsContent {
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  items: TestimonialItem[];
  stats: TestimonialStat[];
}

export interface ContactInfoItem {
  type: 'email' | 'phone' | 'location';
  title: string;
  content: string;
  link?: string;
}

export interface ContactContent {
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  infoTitle: string;
  infoDescription: string;
  responseTitle: string;
  responseText: string;
  items: ContactInfoItem[];
}

export interface FooterSocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'mail';
  link: string;
}

export interface FooterLegalLink {
  label: string;
  href: string;
}

export interface FooterContent {
  description: string;
  quickLinks: string[];
  services: string[];
  socialLinks: FooterSocialLink[];
  legalLinks: FooterLegalLink[];
}

export interface TrustedByContent {
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  badgeText: string;
}

export interface SiteContent {
  navbarLinks: NavLink[];
  about: AboutContent;
  services: ServicesContent;
  iot: IotContent;
  portfolio: PortfolioContent;
  blog: BlogContent;
  research: ResearchContent;
  testimonials: TestimonialsContent;
  contact: ContactContent;
  footer: FooterContent;
  trustedBy: TrustedByContent;
}

export const defaultSiteContent: SiteContent = {
  navbarLinks: [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/#contact' },
  ],
  about: {
    titlePrefix: 'About',
    titleHighlight: 'Zenture IT',
    subtitle: 'Pioneering digital transformation through innovative technology solutions',
    yearsValue: '15+',
    yearsLabel: 'Years of Excellence',
    paragraph1:
      'Zenture IT Solutions is a leading software development company specializing in creating innovative digital solutions that drive business growth and transformation.',
    paragraph2:
      'With expertise spanning web development, mobile applications, IoT, and AI, we empower organizations to harness the full potential of technology.',
    highlights: [
      'Expert team of developers and engineers',
      'Agile development methodology',
      'End-to-end project management',
      '24/7 technical support and maintenance',
    ],
    values: [
      {
        icon: 'target',
        title: 'Our Mission',
        description:
          'To deliver cutting-edge technology solutions that empower businesses to achieve their digital ambitions.',
      },
      {
        icon: 'lightbulb',
        title: 'Innovation',
        description:
          'Constantly exploring new technologies and methodologies to stay ahead of the curve.',
      },
      {
        icon: 'rocket',
        title: 'Excellence',
        description:
          'Committed to delivering the highest quality solutions that exceed client expectations.',
      },
    ],
  },
  services: {
    titlePrefix: 'Our',
    titleHighlight: 'Services',
    subtitle: 'Comprehensive technology solutions to power your digital transformation',
    ctaText: 'Start Your Project',
    ctaHref: '#contact',
    items: [
      {
        icon: 'globe',
        title: 'Web Development',
        description:
          'Create stunning, responsive websites and web applications that drive engagement and deliver exceptional user experiences.',
        color: 'from-cyan-500 to-blue-500',
      },
      {
        icon: 'code',
        title: 'Software Development',
        description:
          'Custom software solutions tailored to your business needs, built with modern technologies and best practices.',
        color: 'from-blue-500 to-purple-500',
      },
      {
        icon: 'smartphone',
        title: 'Mobile App Development',
        description:
          'Native and cross-platform mobile applications for iOS and Android that provide seamless user experiences.',
        color: 'from-purple-500 to-pink-500',
      },
      {
        icon: 'cpu',
        title: 'IoT Development',
        description:
          'Connect physical devices to the digital world with innovative IoT solutions that transform how businesses operate.',
        color: 'from-pink-500 to-red-500',
      },
      {
        icon: 'brain',
        title: 'AI Solutions',
        description:
          'Harness the power of artificial intelligence and machine learning to automate processes and gain valuable insights.',
        color: 'from-red-500 to-orange-500',
      },
      {
        icon: 'lightbulb',
        title: 'IT Consultation',
        description:
          'Expert technology consulting to help you make informed decisions and develop strategic technology roadmaps.',
        color: 'from-orange-500 to-yellow-500',
      },
    ],
  },
  iot: {
    titlePrefix: 'Full Spectrum',
    titleHighlight: 'Technology Solutions',
    subtitle:
      'Connecting the physical and digital worlds through innovative Internet of Things solutions',
    implementationTitle: 'Enterprise Field Implementation',
    implementationDescription:
      'We design, build, and deploy resilient digital systems that perform reliably in enterprise, industrial, and government-grade environments.',
    applicationAreaTitle: 'IoT Application Areas',
    features: [
      {
        icon: 'cpu',
        title: 'Edge Computing',
        description: 'Process data closer to the source for faster insights',
      },
      {
        icon: 'wifi',
        title: 'Connectivity',
        description: 'Multi-protocol support for seamless device integration',
      },
      {
        icon: 'database',
        title: 'Data Analytics',
        description: 'Real-time data processing and visualization',
      },
      {
        icon: 'shield',
        title: 'Security',
        description: 'Enterprise-grade encryption and security protocols',
      },
      {
        icon: 'cloud',
        title: 'Cloud Integration',
        description: 'Seamless cloud connectivity and data synchronization',
      },
      {
        icon: 'zap',
        title: 'Automation',
        description: 'Intelligent automation and remote monitoring',
      },
    ],
    useCases: [
      'Smart Agriculture',
      'Industrial Automation',
      'Smart Cities',
      'Healthcare Monitoring',
      'Environmental Sensing',
      'Asset Tracking',
      'Energy Management',
      'Supply Chain',
    ],
  },
  portfolio: {
    titlePrefix: 'Our',
    titleHighlight: 'Portfolio',
    subtitle:
      'Explore our successful projects that have transformed businesses and delivered exceptional results',
    categories: [
      'All',
      'Web Application',
      'Mobile Application',
      'IoT Solution',
      'AI/ML Solution',
      'Enterprise Software',
    ],
    ctaText: 'Start Your Project',
    ctaHref: '#contact',
    items: [
      {
        id: 1,
        title: 'Army Communication System',
        category: 'Enterprise Software',
        description:
          'Secure real-time communication platform for military operations with end-to-end encryption.',
        tags: ['React', 'Node.js', 'WebRTC', 'Security'],
        icon: 'code2',
        gradient: 'from-cyan-500 to-blue-600',
        isActive: true,
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        id: 2,
        title: 'Forest Management Portal',
        category: 'Web Application',
        description:
          'Comprehensive wildlife tracking and forest resource management system with GIS integration.',
        tags: ['Angular', 'Python', 'MongoDB', 'GIS'],
        icon: 'globe',
        gradient: 'from-green-500 to-emerald-600',
        isActive: true,
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        id: 3,
        title: 'Records Verification App',
        category: 'Mobile Application',
        description:
          'Digital platform for Guinness World Records verification and management processes.',
        tags: ['Flutter', 'Firebase', 'AI/ML'],
        icon: 'smartphone',
        gradient: 'from-purple-500 to-pink-600',
        isActive: true,
        liveUrl: '#',
        repoUrl: '#',
      },
    ],
  },
  blog: {
    titlePrefix: 'Latest',
    titleHighlight: 'Insights',
    subtitle: 'Stay updated with the latest trends, insights, and best practices in technology',
    categories: ['All', 'AI & ML', 'IoT', 'Mobile Development', 'Cloud Computing', 'Security', 'Development'],
    posts: [
      {
        id: 1,
        title: 'AI in Software Development: Practical Use Cases That Improve Delivery Speed',
        excerpt:
          'A practical guide to using AI in software development workflows for faster releases, better quality, and lower engineering cost.',
        author: 'Zenture Team',
        date: '2026-02-20',
        readTime: '8 min read',
        category: 'AI & ML',
        slug: 'ai-in-software-development-practical-use-cases',
        metaTitle: 'AI in Software Development: Use Cases, Tools, and ROI | Zenture',
        metaDescription:
          'Learn how AI and ML improve software delivery with test automation, code review intelligence, and predictive planning.',
        content:
          'Artificial intelligence is now a practical engineering accelerator, not a future concept. Teams use AI-assisted coding for faster scaffolding, test generation for better QA coverage, and log anomaly detection to reduce production incidents. The highest ROI often comes from combining AI with disciplined engineering practices: clear architecture boundaries, quality gates, and measurable delivery metrics. At Zenture, we recommend starting with two implementation tracks. First, developer productivity: pair-programming assistants, AI code review checklists, and documentation generation. Second, operational intelligence: release risk scoring, error pattern clustering, and support-ticket classification. Organizations that adopt this phased approach typically reduce lead time and improve sprint predictability without compromising code quality.',
      },
      {
        id: 2,
        title: 'Building Scalable IoT Platforms: Architecture Patterns for Reliability',
        excerpt:
          'Design principles for IoT systems that support growth, secure device onboarding, and real-time analytics at scale.',
        author: 'Zenture IoT Team',
        date: '2026-02-18',
        readTime: '9 min read',
        category: 'IoT',
        slug: 'building-scalable-iot-platforms-architecture-patterns',
        metaTitle: 'Scalable IoT Architecture Patterns for Enterprise Systems | Zenture',
        metaDescription:
          'Discover how to architect secure and scalable IoT platforms with edge processing, event pipelines, and resilient cloud services.',
        content:
          'Scalable IoT architecture starts with clear separation between device communication, event processing, and application services. Use secure provisioning for every device identity, message brokers for decoupled ingestion, and stream processing for near-real-time decisions. For enterprise systems, edge computing reduces latency and cloud egress cost, while central observability ensures fleet-level visibility. Reliability depends on retry policies, dead-letter handling, and schema versioning for payloads. Security should be treated as a product capability, not an add-on: certificate rotation, least-privilege access, and signed firmware updates are baseline requirements. Teams that build these foundations early can scale from pilot to production faster and with fewer operational risks.',
      },
      {
        id: 3,
        title: 'Mobile App Development in 2026: Performance, Security, and UX Priorities',
        excerpt:
          'Key strategies for shipping fast, secure, and user-centric mobile apps across Android and iOS.',
        author: 'Zenture Mobile Team',
        date: '2026-02-15',
        readTime: '7 min read',
        category: 'Mobile Development',
        slug: 'mobile-app-development-2026-performance-security-ux',
        metaTitle: 'Mobile App Development 2026: Performance, Security, UX | Zenture',
        metaDescription:
          'Learn modern mobile development practices for high performance, secure architecture, and better app retention.',
        content:
          'Modern mobile development balances speed to market with long-term product quality. High-performing apps prioritize startup optimization, network efficiency, and responsive UI states. Security remains non-negotiable: secure token storage, certificate pinning where needed, and strict API authorization controls. On the user experience side, retention improves when teams invest in reliability, not just features. Offline handling, graceful error states, and fast support loops directly impact app ratings and engagement. Product teams should also align analytics with business outcomes by tracking activation, retention, and conversion events from day one. This enables data-informed roadmap decisions and sustainable growth.',
      },
      {
        id: 4,
        title: 'Cloud Computing Best Practices for Cost Optimization and Resilience',
        excerpt:
          'How to structure cloud architecture for high availability while controlling infrastructure spend.',
        author: 'Zenture Cloud Team',
        date: '2026-02-12',
        readTime: '8 min read',
        category: 'Cloud Computing',
        slug: 'cloud-computing-best-practices-cost-optimization-resilience',
        metaTitle: 'Cloud Best Practices: Cost Optimization and Resilience | Zenture',
        metaDescription:
          'A practical cloud strategy for scalable systems: right-sized compute, observability, and resilient deployment pipelines.',
        content:
          'Cloud architecture maturity comes from balancing resilience and cost efficiency. Start with workload profiling and right-size compute resources based on real usage patterns. Introduce autoscaling policies only where demand variability justifies it. For resilience, design with failure domains in mind: multi-zone deployment, health checks, and rollback-ready CI/CD pipelines. Observability should include service-level metrics, distributed tracing, and actionable alerting thresholds. Cost optimization is not only about reducing bills; it is about improving engineering decisions. Teams with clear ownership and visibility can forecast spending, prevent waste, and sustain platform reliability during growth.',
      },
      {
        id: 5,
        title: 'Web Application Security Checklist for Modern Engineering Teams',
        excerpt:
          'A practical security checklist covering authentication, API hardening, and deployment safeguards.',
        author: 'Zenture Security Team',
        date: '2026-02-09',
        readTime: '10 min read',
        category: 'Security',
        slug: 'web-application-security-checklist-modern-engineering-teams',
        metaTitle: 'Web App Security Checklist: Authentication, API, DevSecOps | Zenture',
        metaDescription:
          'Strengthen your web application security with practical controls across authentication, API hardening, and secure delivery pipelines.',
        content:
          'Application security is most effective when integrated into delivery workflows. Start with robust identity controls: strong session management, MFA for privileged users, and token lifecycle policies. API hardening should include schema validation, rate limiting, and explicit authorization checks at every sensitive boundary. Shift-left security practices such as dependency scanning, static analysis, and secret detection reduce exposure early in development. In production, WAF rules, centralized logging, and incident runbooks improve response readiness. Security must be iterative; periodic threat modeling and controlled penetration testing help teams adapt to changing attack patterns.',
      },
      {
        id: 6,
        title: 'Modern Software Development Lifecycle: Faster Delivery Without Quality Tradeoffs',
        excerpt:
          'How high-performing teams combine agile planning, engineering standards, and automation for reliable releases.',
        author: 'Zenture Engineering',
        date: '2026-02-06',
        readTime: '9 min read',
        category: 'Development',
        slug: 'modern-software-development-lifecycle-faster-delivery',
        metaTitle: 'Modern SDLC: Faster Delivery With High Quality | Zenture',
        metaDescription:
          'Build a modern software development lifecycle with automation, quality gates, and release confidence at scale.',
        content:
          'A modern SDLC is defined by tight feedback loops, strong quality gates, and predictable release motion. Agile planning works best when paired with clear definition of done, enforceable coding standards, and automated testing at multiple levels. Continuous integration pipelines should validate linting, unit tests, and security checks before merge approval. Continuous delivery improves when environments are reproducible and deployment steps are version-controlled. Engineering leaders should measure throughput and quality together, tracking cycle time, change failure rate, and mean time to restore service. This balance enables teams to move fast while maintaining product stability and stakeholder trust.',
      },
    ],
  },
  research: {
    titlePrefix: 'Research &',
    titleHighlight: 'Innovation',
    subtitle: 'Pushing the boundaries of technology through cutting-edge research and development',
    labTitle: 'State-of-the-Art Research Facilities',
    labDescription:
      'Our advanced research lab equipped with cutting-edge technology for IoT, AI, and embedded systems development',
    publicationSectionTitle: 'Recent Publications',
    areas: [
      {
        icon: 'beaker',
        title: 'AI & Machine Learning',
        description:
          'Exploring advanced neural networks, natural language processing, and computer vision applications.',
        publications: 8,
        color: 'from-cyan-500 to-blue-500',
      },
      {
        icon: 'trendingUp',
        title: 'IoT & Edge Computing',
        description:
          'Research on low-power IoT devices, edge AI, and distributed computing architectures.',
        publications: 6,
        color: 'from-blue-500 to-purple-500',
      },
      {
        icon: 'users',
        title: 'Human-Computer Interaction',
        description: 'Studying user experience patterns, accessibility, and intuitive interface design.',
        publications: 5,
        color: 'from-purple-500 to-pink-500',
      },
    ],
    publications: [
      {
        title: 'Optimizing Edge AI for Low-Power IoT Devices',
        journal: 'IEEE Transactions on IoT',
        year: '2025',
        authors: 'Zenture Research Team',
        type: 'Conference Paper',
      },
      {
        title: 'Neural Network Architectures for Real-Time Object Detection',
        journal: 'International Journal of Computer Vision',
        year: '2025',
        authors: 'AI Research Division',
        type: 'Journal Article',
      },
    ],
    achievements: [
      {
        icon: 'award',
        title: 'Best Paper Award',
        description: 'IEEE International Conference on IoT 2025',
      },
      {
        icon: 'bookOpen',
        title: '25+ Publications',
        description: 'In leading journals and conferences',
      },
      {
        icon: 'users',
        title: 'Industry Collaborations',
        description: 'Partnerships with top universities',
      },
    ],
  },
  testimonials: {
    titlePrefix: 'Client',
    titleHighlight: 'Testimonials',
    subtitle: "Don't just take our word for it - hear what our clients have to say about working with us",
    items: [
      {
        id: 1,
        name: 'Col. Rajesh Kumar',
        position: 'Project Director',
        organization: 'Indian Army',
        content:
          'Zenture IT Solutions delivered a robust and secure communication system that exceeded our expectations.',
        rating: 5,
      },
      {
        id: 2,
        name: 'Dr. Priya Sharma',
        position: 'Chief Technology Officer',
        organization: 'Indian Forest Department',
        content:
          "The wildlife tracking system has revolutionized our forest management. The team's expertise is outstanding.",
        rating: 5,
      },
      {
        id: 3,
        name: 'Michael Chen',
        position: 'Digital Operations Manager',
        organization: 'Guinness World Records',
        content: 'Working with Zenture was a pleasure. They streamlined our verification process.',
        rating: 5,
      },
    ],
    stats: [
      { number: '200+', label: 'Happy Clients' },
      { number: '98%', label: 'Satisfaction Rate' },
      { number: '150+', label: 'Projects Delivered' },
      { number: '24/7', label: 'Support Available' },
    ],
  },
  contact: {
    titlePrefix: 'Get in',
    titleHighlight: 'Touch',
    subtitle:
      "Ready to start your next project? Let's discuss how we can help you achieve your goals",
    infoTitle: 'Contact Information',
    infoDescription: "We're here to answer your questions and discuss your project requirements.",
    responseTitle: 'Quick Response Time',
    responseText: 'We typically respond to inquiries within 24 hours',
    items: [
      {
        type: 'email',
        title: 'Email',
        content: 'info@zenture.in',
        link: 'mailto:info@zenture.in',
      },
      {
        type: 'phone',
        title: 'Phone',
        content: '+91 7715861605',
        link: 'tel:+917715861605',
      },
      {
        type: 'location',
        title: 'Location',
        content: 'NIBM, Pune - MH, India',
      },
    ],
  },
  footer: {
    description:
      'Transforming ideas into innovative digital solutions. We specialize in web development, mobile apps, IoT, and AI-powered applications.',
    quickLinks: [
      'Home',
      'About',
      'Services',
      'Tech Stack',
      'Portfolio',
      'Clients',
      'Research',
      'Blog',
      'Careers',
      'Contact',
    ],
    services: [
      'Web Development',
      'Software Development',
      'Mobile Apps',
      'IoT Solutions',
      'AI Solutions',
      'IT Consultation',
    ],
    socialLinks: [
      { platform: 'github', link: '#' },
      { platform: 'linkedin', link: '#' },
      { platform: 'twitter', link: '#' },
      { platform: 'mail', link: '#' },
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
  trustedBy: {
    eyebrow: 'Our Clientele',
    titlePrefix: 'Trusted by',
    titleHighlight: 'Industry Leaders',
    subtitle:
      'Partnerships built on delivery, reliability, and measurable impact across defense, education, logistics, and industrial sectors.',
    badgeText: 'Active collaborations across 5+ industry verticals',
  },
};
