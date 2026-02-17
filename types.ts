import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description?: string;
  icon: LucideIcon;
}

export interface CourseItem {
  language: string;
  types: string[];
  flag?: string; // Emoji or code
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface FacilityItem {
  title: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}