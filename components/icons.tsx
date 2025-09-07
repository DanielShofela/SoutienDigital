import React from 'react';
import { motion, Variants } from 'framer-motion';

const svgVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2.5, // Increased duration from 1.5s to 2.5s
      ease: 'easeInOut',
    },
  },
};

const AnimatedSvg: React.FC<{ children: React.ReactNode; width?: string; height?: string; viewBox?: string; }> = ({ children, width="24", height="24", viewBox="0 0 24 24" }) => (
    <motion.svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={svgVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
        {children}
    </motion.svg>
);


export const MenuIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export const XIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const ChevronDownIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

// Service Icons
export const BriefcaseIcon: React.FC = () => (
    <AnimatedSvg width="48" height="48" viewBox="0 0 24 24">
        <motion.rect x="2" y="7" width="20" height="14" rx="2" ry="2" variants={pathVariants}></motion.rect>
        <motion.path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" variants={pathVariants}></motion.path>
    </AnimatedSvg>
);

export const CodeIcon: React.FC = () => (
    <AnimatedSvg width="48" height="48" viewBox="0 0 24 24">
        <motion.polyline points="16 18 22 12 16 6" variants={pathVariants}></motion.polyline>
        <motion.polyline points="8 6 2 12 8 18" variants={pathVariants}></motion.polyline>
    </AnimatedSvg>
);

export const MegaphoneIcon: React.FC = () => (
    <AnimatedSvg width="48" height="48" viewBox="0 0 24 24">
        <motion.path d="m3 11 18-5v12L3 14v-3z" variants={pathVariants}></motion.path>
        <motion.path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" variants={pathVariants}></motion.path>
    </AnimatedSvg>
);

export const GlobeIcon: React.FC = () => (
    <AnimatedSvg width="48" height="48" viewBox="0 0 24 24">
        <motion.circle cx="12" cy="12" r="10" variants={pathVariants}></motion.circle>
        <motion.line x1="2" y1="12" x2="22" y2="12" variants={pathVariants}></motion.line>
        <motion.path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" variants={pathVariants}></motion.path>
    </AnimatedSvg>
);

// About Icons
export const TargetIcon: React.FC = () => (
  <AnimatedSvg>
    <motion.circle cx="12" cy="12" r="10" variants={pathVariants}></motion.circle>
    <motion.circle cx="12" cy="12" r="6" variants={pathVariants}></motion.circle>
    <motion.circle cx="12" cy="12" r="2" variants={pathVariants}></motion.circle>
  </AnimatedSvg>
);

export const EyeIcon: React.FC = () => (
  <AnimatedSvg>
    <motion.path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" variants={pathVariants}></motion.path>
    <motion.circle cx="12" cy="12" r="3" variants={pathVariants}></motion.circle>
  </AnimatedSvg>
);

export const DiamondIcon: React.FC = () => (
  <AnimatedSvg>
    <motion.path d="M12 2L2 8.5l10 13.5L22 8.5 12 2z" variants={pathVariants}></motion.path>
    <motion.path d="M2 8.5l10 13.5L22 8.5" variants={pathVariants}></motion.path>
    <motion.path d="M12 2v20" variants={pathVariants}></motion.path>
  </AnimatedSvg>
);