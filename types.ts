import React from 'react';

export interface ServiceCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  services: string[];
  cta: {
    text: string;
    href: string;
  };
}

export interface ProductPlan {
  name: string;
  price: string;
  oldPrice?: string;
  features: string[];
  popular: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
