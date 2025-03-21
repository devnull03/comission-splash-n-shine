export const services = [
  'full-house-cleaning',
  'roof-cleaning',
  'roof-painting',
  'commercial-cleaning',
  'window-washing',
  'post-construction-cleanup',
  'gutter-cleaning'
];
export type Service = typeof services[number];

interface FaqItem {
  question: string;
  answer: string;
}

type ServiceData = {
  [key: string]: {
    title: string;
    shortDescription: string;
    description: string;
    images: string[];
    benefits?: string[];
    keyFeatures?: string[];
    cities?: string[];
    faqItems?: FaqItem[];
  };
};

export const serviceData: ServiceData = {
  'full-house-cleaning': {
    title: 'Complete Home Exterior Cleaning Package for $999 | Seasonal Offer',
    shortDescription: 'Vancouver & Surrey full house cleaning – Roof, gutters, siding, windows & driveway washing!',
    description: 'Transform your home\'s exterior with our all-inclusive $999 package. Our comprehensive service includes professional house washing to remove dirt and grime, thorough roof cleaning to prevent damage from moss and algae, window washing for crystal-clear views, gutter cleaning to prevent water damage, and pressure washing for driveways and walkways. This package offers exceptional value for homes up to 2500 sqft, combining our most popular services at a significant discount. Book now to take advantage of this limited-time offer and restore your home\'s curb appeal.',
    images: [
      '/assets/services/full-house-cleaning/1.webp',
      '/assets/services/full-house-cleaning/2.webp',
      '/assets/services/full-house-cleaning/3.webp',
      '/assets/services/full-house-cleaning/4.webp',
    ],
    benefits: [
      'Complete exterior cleaning in one package',
      'Affordable pricing',
      'Expert, eco-friendly service',
      '5-star reviews and trusted quality',
      'Comprehensive property protection',
      'Enhances curb appeal'
    ],
    keyFeatures: [
      'House Soft Wash',
      'Roof Cleaning',
      'Window Washing',
      'Pressure Washing for Driveways & Walkways',
      'Gutter Cleaning'
    ],
    cities: [
      'Surrey',
      'Richmond',
      'Vancouver',
      'Burnaby',
      'Coquitlam',
      'Langley'
    ],
    faqItems: [
      {
        question: 'Who qualifies for the $999 Full House Cleaning Deal?',
        answer: 'This package is available for standard residential homes up to 2500 Sqft. Custom pricing is available for larger properties.'
      },
      {
        question: 'Is your cleaning method safe for all surfaces?',
        answer: 'Yes! We use a combination of soft washing for delicate surfaces (siding, roofs, gutters) and pressure washing for durable surfaces (driveways, patios, sidewalks) to ensure safe and effective cleaning.'
      },
      {
        question: 'How long does the service take?',
        answer: 'Most homes are completed within 3-6 hours, depending on size and surface condition.'
      },
      {
        question: 'Do you service my area?',
        answer: 'We provide exterior cleaning services in Surrey, Richmond, Vancouver, Burnaby, Coquitlam, Langley, and surrounding regions.'
      },
      {
        question: 'Are your cleaning products eco-friendly?',
        answer: 'Yes, we use biodegradable, non-toxic cleaning solutions that are safe for your family, pets, and the environment.'
      }
    ]
  },
  'roof-cleaning': {
    title: 'Expert Roof Cleaning Services in Surrey | Remove Moss & Algae',
    shortDescription: 'Professional roof cleaning in Vancouver & Surrey Soft wash, pressure wash & hand cleaning available!',
    description: 'Protect your roof with our professional cleaning services. We specialize in safe and effective cleaning for all roof types including asphalt shingles, cedar shakes, tile, clay, metal, and flat roofs. Our comprehensive service removes moss, algae, black streaks, and organic growth that can damage your roofing materials. Using a combination of soft washing and hand cleaning techniques, we ensure your roof is thoroughly cleaned without risking damage to the materials. Our treatments include preventative applications that help resist future growth, extending your roof\'s lifespan and maintaining its protective capabilities.',
    images: [
      '/assets/services/roof-cleaning/1.webp',
      '/assets/services/roof-cleaning/2.webp',
    ],
    benefits: [
      'Extends roof lifespan',
      'Prevents costly repairs',
      'Improves energy efficiency',
      'Enhances curb appeal',
      'Removes harmful organisms',
      'Maintains warranty requirements'
    ],
    keyFeatures: [
      'Soft Wash Roof Cleaning',
      'Hand Cleaning with Wire Brush',
      'Adjustable Pressure Washing',
      'Roof Moss Removal',
      'Black Streak & Algae Stain Removal',
      'Roof Treatment for Moss Prevention'
    ],
    cities: [
      'Surrey',
      'Richmond',
      'Coquitlam',
      'Burnaby',
      'Vancouver',
      'North Vancouver',
      'Langley',
      'White Rock',
      'Abbotsford',
      'Delta',
      'New Westminster'
    ],
    faqItems: [
      {
        question: 'How Often Should I Get My Roof Cleaned?',
        answer: 'We recommend professional roof cleaning every 2-3 years to prevent moss, algae, and lichen buildup.'
      },
      {
        question: 'What Is Soft Wash Roof Cleaning?',
        answer: 'Soft washing uses low-pressure water and eco-friendly solutions to safely remove dirt, moss & stains without damaging shingles or tiles.'
      },
      {
        question: 'Will Roof Moss & Algae Come Back?',
        answer: 'Our roof moss prevention treatment protects against regrowth for up to 2 years!'
      },
      {
        question: 'Do You Offer Roof Cleaning in My City?',
        answer: 'Yes! We provide roof cleaning services in Surrey, Richmond, Vancouver, Burnaby, Coquitlam, Langley, Delta & surrounding areas.'
      },
      {
        question: 'Is Roof Cleaning Safe for My Home & Family?',
        answer: 'Absolutely! Our biodegradable, non-toxic cleaning solutions are safe for pets, plants, and the environment.'
      }
    ]
  },
  'roof-painting': {
    title: 'High-Quality Roof Painting | Restore & Protect Your Roof',
    shortDescription: 'Professional roof painting in Vancouver & Surrey – Long-lasting protection & weatherproof coating!',
    description: 'Revitalize your roof with our premium painting services. Offering durable coatings that enhance aesthetics and provide long-lasting protection against the elements.',
    images: [
      '/assets/services/roof-painting/1.webp',
      '/assets/services/roof-painting/2.webp',
    ],
    benefits: [
      'Extends roof lifespan',
      'Improves energy efficiency',
      'Prevents moss and algae growth',
      'Seals minor leaks',
      'Enhances curb appeal',
      'More affordable than roof replacement'
    ],
    keyFeatures: [
      'High-Quality Roof Painting',
      'Roof Sealing & Waterproofing',
      'Heat-Reflective & UV-Resistant Coatings',
      'Hand Cleaning & Surface Prep',
      'Metal, Tile & Shingle Roof Painting',
      'Eco-Friendly & Weatherproof Roof Coatings'
    ],
    cities: [
      'Coquitlam',
      'Surrey',
      'Burnaby',
      'Vancouver',
      'North Vancouver',
      'Richmond',
      'Delta',
      'New Westminster',
      'Langley',
      'White Rock',
      'Abbotsford'
    ],
    faqItems: [
      {
        question: 'How Long Does Roof Paint Last?',
        answer: 'With high-quality roof coatings, you can expect 10-15 years of protection before repainting is needed.'
      },
      {
        question: 'What Type of Roof Paint Do You Use?',
        answer: 'We use heat-reflective, waterproof, and UV-resistant coatings to enhance durability and energy efficiency.'
      },
      {
        question: 'Do You Hand Clean the Roof Before Painting?',
        answer: 'Yes! We use hand cleaning with a wire brush and adjustable pressure washing to remove moss, dirt, and old paint, ensuring proper adhesion.'
      },
      {
        question: 'Is Roof Painting Safe for My Home?',
        answer: 'Absolutely! Our low-VOC, eco-friendly roof paints are safe for your family, pets, and environment.'
      },
      {
        question: 'Can You Paint Over Metal & Tile Roofs?',
        answer: 'Yes! We specialize in metal roof painting, tile roof coatings, and asphalt shingle restoration.'
      },
      {
        question: 'Do You Offer Roof Painting in My City?',
        answer: 'Yes! We provide roof painting services in Surrey, Richmond, Vancouver, Burnaby, Coquitlam, Langley, Delta & surrounding areas.'
      },
      {
        question: 'How Much Does Roof Painting Cost?',
        answer: 'Pricing depends on roof size, material, and prep work required. Get a free quote today!'
      }
    ]
  },
  'commercial-cleaning': {
    title: 'Professional Commercial & Strata Cleaning Services in Surrey',
    shortDescription: 'Vancouver & Surrey commercial cleaning – Roof, siding, gutters & post-construction power washing!',
    description: 'Maintain a pristine appearance for your commercial property with our specialized cleaning services. We cater to businesses and strata complexes, ensuring a spotless environment.',
    images: [
      '/assets/services/commercial-cleaning/1.webp',
      '/assets/services/commercial-cleaning/2.webp',
      '/assets/services/commercial-cleaning/3.webp',
    ],
    benefits: [
      'Enhances professional appearance',
      'Creates positive customer impressions',
      'Maintains property value',
      'Reduces long-term maintenance costs',
      'Complies with health and safety standards',
      'Extends building material lifespan'
    ],
    keyFeatures: [
      'Commercial Pressure Washing',
      'Strata & Multi-Unit Cleaning',
      'Sidewalk & Walkway Cleaning',
      'Parking Lot Cleaning',
      'Graffiti Removal Services',
      'Building Exterior Soft Washing'
    ],
    cities: [
      'North Vancouver',
      'Vancouver',
      'Burnaby',
      'Richmond',
      'Surrey',
      'Coquitlam',
      'New Westminster',
      'Delta',
      'Langley',
      'White Rock',
      'Abbotsford'
    ],
    faqItems: [
      {
        question: 'How Often Should My Business Be Cleaned?',
        answer: 'We offer daily, weekly, and monthly cleaning plans customized to your needs.'
      },
      {
        question: 'Do You Use Eco-Friendly Cleaning Products?',
        answer: 'Yes! We use biodegradable, non-toxic solutions safe for all environments.'
      },
      {
        question: 'Can I Customize My Cleaning Package?',
        answer: 'Absolutely! We tailor cleaning plans based on your business size and requirements.'
      },
      {
        question: 'Do You Offer Cleaning for Large Commercial Facilities?',
        answer: 'Yes! We service offices, retail stores, warehouses, medical facilities, and more.'
      },
      {
        question: 'Is Your Cleaning Team Trained & Insured?',
        answer: 'Yes! Our team is professionally trained, insured, and follows strict safety protocols.'
      },
      {
        question: 'Do You Offer After-Hours & Weekend Cleaning?',
        answer: 'Yes! We provide flexible scheduling to minimize disruption to your business.'
      }
    ]
  },
  'window-washing': {
    title: 'Streak-Free Window Washing Services | Residential & Commercial',
    shortDescription: 'Crystal-clear window washing in Vancouver & Surrey – Residential & commercial glass cleaning experts',
    description: 'Let natural light shine through with our professional window washing services. Serving both homes and businesses for crystal-clear results.',
    images: [
      '/assets/services/window-washing/1.webp',
      '/assets/services/window-washing/2.webp',
      '/assets/services/window-washing/3.webp',
    ],
    benefits: [
      'Crystal clear, streak-free results',
      'Extends window lifespan',
      'Improves natural lighting',
      'Removes harmful contaminants',
      'Enhances property appearance',
      'Identifies window problems early'
    ],
    keyFeatures: [
      'Interior and exterior cleaning',
      'Screen cleaning and track detailing',
      'Hard water stain removal',
      'High-reach capabilities',
      'Eco-friendly cleaning solutions',
      'Regular maintenance programs'
    ],
    cities: [
      'New Westminster',
      'Vancouver',
      'Richmond',
      'Burnaby',
      'Surrey',
      'North Vancouver',
      'Coquitlam',
      'Delta',
      'Langley',
      'White Rock',
      'Abbotsford'
    ],
    faqItems: [
      {
        question: 'Do you clean both inside and outside of windows?',
        answer: 'Yes, we offer complete window cleaning services that include both interior and exterior windows, as well as screens, sills, and tracks.'
      },
      {
        question: 'Can you remove hard water stains from windows?',
        answer: 'Yes, we have specialized techniques and solutions for removing mineral deposits, hard water stains, and oxidation from glass surfaces.'
      },
      {
        question: 'How often should windows be professionally cleaned?',
        answer: 'For residential homes, we recommend professional window cleaning twice a year. Commercial properties may require more frequent cleaning depending on location and exposure.'
      },
      {
        question: 'Can you reach high or difficult windows?',
        answer: 'Absolutely! Our team is equipped with professional water-fed poles, ladders, and safety equipment to reach windows up to four stories high safely and effectively.'
      }
    ]
  },
  'post-construction-cleanup': {
    title: 'Comprehensive Post-Construction Cleanup Services in Surrey',
    shortDescription: 'Complete post-construction cleanup in Vancouver & Surrey – Power washing, debris removal & detailing',
    description: 'Ensure your newly constructed or renovated property is move-in ready with our thorough post-construction cleaning services. We handle debris removal, surface cleaning, and more.',
    images: [
      '/assets/services/post-construction-cleanup/1.webp',
      '/assets/services/post-construction-cleanup/2.jpg',
    ],
    benefits: [
      'Removes hazardous construction dust',
      'Prepares space for immediate occupancy',
      'Reveals finish quality of construction',
      'Prevents damage from construction debris',
      'Complete cleaning from ceiling to floor',
      'Interior and exterior cleaning'
    ],
    keyFeatures: [
      'Interior & Exterior Construction Cleanup',
      'Dust & Debris Removal',
      'Window & Glass Cleaning',
      'Pressure Washing for Driveways & Walkways',
      'Floor & Surface Cleaning',
      'Deep Cleaning of Walls & Ceilings'
    ],
    cities: [
      'Abbotsford',
      'Surrey',
      'Vancouver',
      'Burnaby',
      'Richmond',
      'Coquitlam',
      'Langley',
      'Delta',
      'North Vancouver',
      'New Westminster',
      'White Rock'
    ],
    faqItems: [
      {
        question: 'What is Included in Post-Construction Cleaning?',
        answer: 'Our service includes dust & debris removal, window & glass cleaning, pressure washing, surface sanitization, and deep cleaning of all areas to make your property move-in ready.'
      },
      {
        question: 'Do You Remove Construction Waste & Materials?',
        answer: 'We remove dust, sawdust, drywall debris, paint splatters, and adhesives but do not handle large construction waste.'
      },
      {
        question: 'How Long Does the Cleaning Take?',
        answer: 'Depending on the size and condition of the property, cleaning usually takes 4-8 hours. Larger projects may require a full day.'
      },
      {
        question: 'Do You Clean Windows & Glass After Construction?',
        answer: 'Yes! We remove paint, dust, and stickers from glass, windows, and mirrors for a streak-free shine.'
      },
      {
        question: 'Do You Offer Exterior Pressure Washing for Post-Construction Cleanup?',
        answer: 'Absolutely! We offer pressure washing for driveways, sidewalks, patios, and building exteriors to remove dirt and dust left behind from construction work.'
      },
      {
        question: 'Do You Use Eco-Friendly Cleaning Products?',
        answer: 'Yes! We use non-toxic, biodegradable cleaning solutions that are safe for your family and the environment.'
      }
    ]
  },
  'gutter-cleaning': {
    title: 'Reliable Gutter Cleaning Services | Prevent Water Damage',
    shortDescription: 'Trusted gutter cleaning in Vancouver & Surrey - Inside & outside clearing to prevent clogs',
    description: 'Keep your gutters free from debris with our expert cleaning services. Prevent clogs and water damage to protect your home\'s foundation.',
    images: [
      '/assets/services/gutter-cleaning/1.webp',
      '/assets/services/gutter-cleaning/2.webp',
    ],
    benefits: [
      'Prevents water damage',
      'Eliminates pest breeding grounds',
      'Reduces risk of basement flooding',
      'Extends gutter system lifespan',
      'Prevents fascia and siding damage',
      'Protects landscaping from erosion'
    ],
    keyFeatures: [
      'Hand & Pressure Gutter Cleaning',
      'Downspout Flushing & Unclogging',
      'Gutter Whitening & Stain Removal',
      'Roof Edge & Fascia Cleaning',
      'Gutter Inspection & Minor Repairs',
      'Moss & Algae Treatment'
    ],
    cities: [
      'Delta',
      'New Westminster',
      'Richmond',
      'Surrey',
      'Burnaby',
      'Vancouver',
      'North Vancouver',
      'Coquitlam',
      'White Rock',
      'Langley',
      'Abbotsford'
    ],
    faqItems: [
      {
        question: 'How Often Should I Get My Gutters Cleaned?',
        answer: 'We recommend gutter cleaning twice a year – once in spring and once in fall – to prevent clogs and water damage.'
      },
      {
        question: 'Do You Remove All Debris from Gutters?',
        answer: 'Yes! We remove leaves, dirt, branches, moss, and any blockages in gutters & downspouts.'
      },
      {
        question: 'How Do You Clean Gutters Safely?',
        answer: 'We use hand cleaning, low-pressure washing, and gutter flushing to ensure effective and damage-free cleaning.'
      },
      {
        question: 'Do You Offer Gutter Whitening & Stain Removal?',
        answer: 'Absolutely! Our service includes gutter brightening to remove dirt, oxidation, and mildew stains for a clean, fresh look.'
      },
      {
        question: 'What Happens If My Downspouts Are Clogged?',
        answer: 'We provide downspout flushing to remove clogs and ensure proper water flow away from your home.'
      },
      {
        question: 'Do You Offer Gutter Repairs or Gutter Guard Installation?',
        answer: 'Yes! We can fix minor gutter issues and install gutter guards to prevent future clogging.'
      }
    ]
  }
};
