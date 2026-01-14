
import React from 'react';
import { Service, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'braces',
    title: 'Advanced Braces & Aligners',
    description: 'Specialized orthodontic care in Salem featuring Invisalign and invisible aligners for a perfect smile without the metal.',
    icon: '🦷'
  },
  {
    id: 'implants',
    title: 'Permanent Dental Implants',
    description: 'Restore missing teeth with Salem\'s leading implant technology. Natural-looking, durable, and life-changing results.',
    icon: '🔩'
  },
  {
    id: 'root-canal',
    title: 'Painless Root Canal',
    description: 'Microscopic RCT procedures that save your natural teeth with zero discomfort. Voted most gentle clinic in Salem.',
    icon: '🔬'
  },
  {
    id: 'cosmetic',
    title: 'Smile Makeovers',
    description: 'Veneers, teeth whitening, and gum contouring designed to boost your confidence instantly.',
    icon: '✨'
  },
  {
    id: 'pediatric',
    title: 'Kids & Family Care',
    description: 'A dedicated kids-friendly zone making dental visits fun for children. Building healthy habits early.',
    icon: '👶'
  },
  {
    id: 'preventive',
    title: 'Total Oral Wellness',
    description: 'Preventive checkups, deep cleanings, and laser gum treatments to keep your natural teeth healthy for life.',
    icon: '🛡️'
  }
];

export const TESTIMONIALS = [
  {
    name: "Arun Kumar",
    role: "Salem Resident",
    text: "The best dental experience in Salem! Dr. Neemz and his team are professional and the clinic is world-class.",
    stars: 5
  },
  {
    name: "Deepika R.",
    role: "IT Professional",
    text: "Got my invisible aligners here. The results are amazing and the ₹5000 discount was a huge help!",
    stars: 5
  },
  {
    name: "Suresh Mani",
    role: "Business Owner",
    text: "Finally a dentist who explains everything clearly. Very hygienic and modern equipment.",
    stars: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is the cost of Braces at Dr. Neemz Salem?",
    answer: "Braces treatment varies based on complexity. We offer transparent pricing starting from competitive rates, and you can currently claim a Flat ₹5000 OFF on your treatment."
  },
  {
    question: "Do you offer No-Cost EMI for dental treatments?",
    answer: "Yes! We believe quality dental care should be accessible. We provide easy monthly installment options with 0% interest for implants and braces."
  },
  {
    question: "How long does a typical root canal take?",
    answer: "With our advanced equipment, most root canals at Dr. Neemz are completed in just one or two sessions, depending on the severity."
  }
];

export const CONTACT_INFO = {
  phone: "7448560350",
  email: "drneemzdentistry@gmail.com",
  address: "No 29, Peramanur Main Rd, opp. Kavery Furniture, Salem, Tamil Nadu 636007",
  whatsapp: "917448560350",
  googleMaps: "https://maps.google.com/?q=Dr.+Neemz+Dentistry+Salem"
};
