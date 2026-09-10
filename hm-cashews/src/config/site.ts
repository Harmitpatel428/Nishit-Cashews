import type { SiteConfig, ProcessStep, ProductGrade } from '../types';

export const siteConfig: SiteConfig = {
  location: 'Palanpur',
  phone: '+91 9265918347',
  email: undefined,
  certifications: undefined,
  capacity: undefined,
  markets: undefined,
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Raw Material',
    description: 'Sourcing premium raw cashew nuts from trusted orchards.',
    image: { url: '/process/raw.jpg', alt: 'Raw cashew nuts' },
  },
  {
    number: '02',
    title: 'Cleaning',
    description: 'Initial cleaning to remove debris and foreign materials.',
    image: { url: '/process/cleaning.jpg', alt: 'Cleaning process' },
  },
  {
    number: '03',
    title: 'Processing',
    description: 'Precision processing for optimal kernel integrity.',
    image: { url: '/process/processing.jpg', alt: 'Processing machinery' },
  },
  {
    number: '04',
    title: 'Shell Removal',
    description: 'Careful shell separation preserving kernel quality.',
    image: { url: '/process/shelling.jpg', alt: 'Shell removal' },
  },
  {
    number: '05',
    title: 'Grading',
    description: 'Systematic grading by size, color, and quality.',
    image: { url: '/process/grading.jpg', alt: 'Grading station' },
  },
  {
    number: '06',
    title: 'Quality Control',
    description: 'Rigorous inspection at every stage.',
    image: { url: '/process/quality.jpg', alt: 'Quality inspection' },
  },
  {
    number: '07',
    title: 'Packaging',
    description: 'Secure packaging for global shipment.',
    image: { url: '/process/packaging.jpg', alt: 'Packaging line' },
  },
  {
    number: '08',
    title: 'Global Dispatch',
    description: 'Worldwide distribution from our facility.',
    image: { url: '/process/dispatch.jpg', alt: 'Warehouse dispatch' },
  },
];

export const productGrades: ProductGrade[] = [
  {
    slug: 'w320',
    name: 'W320',
    category: 'whole',
    description: 'Premium whole kernel, standard grade.',
    image: { url: '/products/w320.jpg', alt: 'W320 Cashew Grade' },
    technicalData: {
      packaging: undefined,
      availability: undefined,
      moq: undefined,
    },
  },
  {
    slug: 'w240',
    name: 'W240',
    category: 'whole',
    description: 'Large whole kernel, premium grade.',
    image: { url: '/products/w240.jpg', alt: 'W240 Cashew Grade' },
    technicalData: {
      packaging: undefined,
      availability: undefined,
      moq: undefined,
    },
  },
  {
    slug: 'w450',
    name: 'W450',
    category: 'whole',
    description: 'Small whole kernel, economical grade.',
    image: { url: '/products/w450.jpg', alt: 'W450 Cashew Grade' },
    technicalData: {
      packaging: undefined,
      availability: undefined,
      moq: undefined,
    },
  },
];

export const navigationLinks = [
  { label: 'Our Story', href: '/#story' },
  { label: 'Process', href: '/#process' },
  { label: 'Products', href: '/#products' },
  { label: 'Quality', href: '/#quality' },
  { label: 'Global', href: '/#global' },
  { label: 'Contact', href: '/#contact' },
];
