// HM Cashews Type Definitions

export type ProductGrade = {
  slug: string;
  name: string;
  category: 'whole' | 'broken' | 'roasted' | 'custom';
  description: string;
  size?: string;
  appearance?: string;
  applications?: string[];
  image: ImageAsset;
  model?: ModelAsset;
  technicalData?: {
    packaging?: string;
    availability?: string;
    moq?: string;
  };
};

export type ImageAsset = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ModelAsset = {
  url: string;
  type: 'glb' | 'gltf';
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  image: ImageAsset;
};

export type SustainabilityMetric = {
  label: string;
  value?: string; // Placeholder until verified
  unit?: string;
};

export type MarketDestination = {
  country: string;
  region: string;
  coordinates: [number, number];
};

export type InquiryFormData = {
  inquiryType: 'bulk' | 'grade' | 'private-label' | 'export' | 'other';
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  productGrade?: string;
  estimatedRequirement?: string;
  message: string;
};

export type SiteConfig = {
  location: string;
  phone: string;
  email?: string;
  certifications?: string[];
  capacity?: string;
  markets?: string[];
};
