
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  image: string;
  videoUrl?: string;
}
