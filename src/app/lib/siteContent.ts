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
        title: 'The Future of AI in Software Development',
        excerpt:
          'Explore how artificial intelligence is revolutionizing the way we build and deploy software applications.',
        author: 'Zenture Team',
        date: '2026-02-15',
        readTime: '5 min read',
        category: 'AI & ML',
        slug: 'future-of-ai-in-software-development',
      },
      {
        id: 2,
        title: 'Building Scalable IoT Solutions',
        excerpt:
          'Learn best practices for creating IoT systems that can handle millions of connected devices efficiently.',
        author: 'John Doe',
        date: '2026-02-10',
        readTime: '7 min read',
        category: 'IoT',
        slug: 'building-scalable-iot-solutions',
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
        content: 'contact@zentureit.com',
        link: 'mailto:contact@zentureit.com',
      },
      {
        type: 'phone',
        title: 'Phone',
        content: '+91 (XXX) XXX-XXXX',
        link: 'tel:+91XXXXXXXXXX',
      },
      {
        type: 'location',
        title: 'Location',
        content: 'India',
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
