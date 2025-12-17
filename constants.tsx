import { Scissors, Zap, User, Coffee } from 'lucide-react';
import { Service, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Corte Clássico',
    description: 'Corte tradicional com tesoura e acabamento impecável na navalha.',
    price: 'R$ 60,00',
    icon: Scissors,
  },
  {
    id: '2',
    title: 'Barba Real',
    description: 'Barboterapia completa com toalha quente, massagem e hidratação.',
    price: 'R$ 50,00',
    icon: User,
  },
  {
    id: '3',
    title: 'Combo Imperial',
    description: 'A experiência completa: Corte de cabelo + Barba + Sobrancelha.',
    price: 'R$ 100,00',
    icon: Zap,
  },
  {
    id: '4',
    title: 'Acabamento',
    description: 'Alinhamento do pezinho e contornos para manter o estilo em dia.',
    price: 'R$ 30,00',
    icon: Scissors,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    role: 'Empresário',
    content: 'O melhor atendimento da cidade. A atenção aos detalhes no corte é impressionante. O ambiente é sofisticado e muito acolhedor.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ricardo Silva',
    role: 'Advogado',
    content: 'Profissionais de altíssimo nível. A barboterapia é relaxante e o resultado final é sempre perfeito. Recomendo de olhos fechados.',
    rating: 5,
  },
  {
    id: '3',
    name: 'André Costa',
    role: 'Arquiteto',
    content: 'Design do interior impecável e serviço condizente. Gosto da pontualidade e do cafézinho enquanto espero. Virei cliente fiel.',
    rating: 5,
  },
];