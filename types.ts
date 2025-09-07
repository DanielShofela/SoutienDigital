import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
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