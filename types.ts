// Fix: Add missing import for React.
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProductPlan {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}