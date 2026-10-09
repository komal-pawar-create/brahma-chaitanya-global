import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'prod-green-chilli',
    slug: 'green-chilli',
    name: 'Green Chilli',
    category: 'Fresh Vegetables',
    tagline: 'Premium quality fresh green chillies for global export',
    description: 'Supplied directly for international wholesale and commercial requirements with consistent grading and export standard sorting.',
    mainImage: '/images/products/green-chilli/main.svg',
    gallery: [
      '/images/products/green-chilli/main.svg'
    ],
    varieties: [
      {
        name: 'G4 Green Chilli',
        marketType: 'Export / Wholesale',
      },
      {
        name: 'G5 Green Chilli',
        marketType: 'Fresh Market',
      },
      {
        name: 'Long Green Chilli',
        marketType: 'Retail / Food Service',
      },
      {
        name: 'Medium Green Chilli',
        marketType: 'Wholesale',
      },
      {
        name: 'Hybrid Green Chilli',
        marketType: 'Commercial Supply',
      },
      {
        name: 'Hot Green Chilli',
        marketType: 'Ethnic / Asian Markets',
      },
    ],
    sizes: [
      {
        range: '5–7 cm',
        label: 'Small',
      },
      {
        range: '7–9 cm',
        label: 'Medium',
      },
      {
        range: '9–12 cm',
        label: 'Large',
      },
      {
        range: '12 cm+',
        label: 'Extra Large / Long type',
        notes: 'Subject to availability',
      },
    ],
    applications: [
      'Export Wholesale',
      'Food Processing',
      'Retail & Distribution',
    ],
    packaging: [
      'Corrugated Carton Boxes',
      'Custom Export Packing Available Upon Request',
    ],
    isFeatured: true,
  },
  {
    id: 'prod-onion',
    slug: 'onion',
    name: 'Onion',
    category: 'Fresh Vegetables',
    tagline: 'Export grade fresh onions sorted and graded for international markets',
    description: '',
    mainImage: '/images/products/onion/main.svg',
    gallery: [
      '/images/products/onion/main.svg'
    ],
    varieties: [],
    sizes: [],
    applications: [],
    packaging: [],
    isFeatured: true,
  },
  {
    id: 'prod-potato',
    slug: 'potato',
    name: 'Potato',
    category: 'Fresh Vegetables',
    tagline: 'Farm-fresh potatoes graded for processing, wholesale, and export',
    description: '',
    mainImage: '/images/products/potato/main.svg',
    gallery: [
      '/images/products/potato/main.svg'
    ],
    varieties: [],
    sizes: [],
    applications: [],
    packaging: [],
    isFeatured: true,
  },
  {
    id: 'prod-tomato',
    slug: 'tomato',
    name: 'Tomato',
    category: 'Fresh Vegetables',
    tagline: 'Carefully sorted and packed fresh tomatoes for international supply',
    description: '',
    mainImage: '/images/products/tomato/main.svg',
    gallery: [
      '/images/products/tomato/main.svg'
    ],
    varieties: [],
    sizes: [],
    applications: [],
    packaging: [],
    isFeatured: true,
  },
  {
    id: 'prod-moringa-powder',
    slug: 'moringa-powder',
    name: 'Moringa Powder',
    category: 'Organic Powders',
    tagline: 'Finely processed nutrient-rich moringa powder for global buyers',
    description: '',
    mainImage: '/images/products/moringa/main.svg',
    gallery: [
      '/images/products/moringa/main.svg'
    ],
    varieties: [],
    sizes: [],
    applications: [],
    packaging: [],
    isFeatured: true,
  },
  {
    id: 'prod-mushroom-powder',
    slug: 'mushroom-powder',
    name: 'Mushroom Powder',
    category: 'Dehydrated & Powders',
    tagline: 'Premium dried and ground mushroom powder for industrial and culinary use',
    description: '',
    mainImage: '/images/products/mushroom/main.svg',
    gallery: [
      '/images/products/mushroom/main.svg'
    ],
    varieties: [],
    sizes: [],
    applications: [],
    packaging: [],
    isFeatured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
