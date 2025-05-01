export const services = [
  'full-house-cleaning',
  'roof-cleaning',
  'roof-painting',
  'commercial-cleaning',
  'window-washing',
  'post-construction-cleanup',
  'gutter-cleaning',
  'pressure-washing',
  'house-washing',
  'driveway-pressure-wash',
  'driveway-sealing',
  'concrete-sealing'
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
  },
  'pressure-washing': {
    title: 'Professional Pressure Washing Services | Safe & Effective Cleaning',
    shortDescription: 'Expert pressure washing in Vancouver & Surrey – Residential & commercial exterior cleaning solutions',
    description: 'Restore your property\'s appearance with our professional pressure washing services. We use state-of-the-art equipment and eco-friendly cleaning solutions to safely remove dirt, grime, mold, and stains from various surfaces. Our experienced technicians adjust the pressure and technique according to each surface type, ensuring thorough cleaning without causing damage. From concrete and brick to wood and vinyl, we have the expertise to handle all exterior surfaces.',
    images: [
      '/assets/services/full-house-cleaning/1.webp',
      '/assets/services/full-house-cleaning/2.webp',
    ],
    benefits: [
      'Enhances curb appeal instantly',
      'Prevents damage from mold and mildew',
      'Extends the lifespan of exterior surfaces',
      'Prepares surfaces for painting or sealing',
      'Removes harmful contaminants',
      'Increases property value'
    ],
    keyFeatures: [
      'Variable pressure capabilities for different surfaces',
      'Hot and cold water washing options',
      'Eco-friendly cleaning solutions',
      'Surface-appropriate techniques',
      'Complete exterior cleaning',
      'Stain and graffiti removal'
    ],
    cities: [
      'Surrey',
      'Richmond',
      'Vancouver',
      'Burnaby',
      'Coquitlam',
      'Langley',
      'Delta',
      'White Rock',
      'New Westminster',
      'North Vancouver',
      'Abbotsford'
    ],
    faqItems: [
      {
        question: 'Is pressure washing safe for all exterior surfaces?',
        answer: 'No, not all surfaces can handle high pressure. We adjust our equipment settings and techniques for each surface type, using lower pressure for delicate surfaces and soft washing when appropriate.'
      },
      {
        question: 'How often should I have my property pressure washed?',
        answer: 'For most properties in the Vancouver area, we recommend pressure washing once a year to prevent buildup of mold, algae, and dirt. Properties in heavily wooded areas or near water may benefit from cleaning twice a year.'
      },
      {
        question: 'Will pressure washing damage my plants and landscaping?',
        answer: 'We take special precautions to protect your landscaping, including covering sensitive plants and using eco-friendly cleaning solutions that won\'t harm your vegetation.'
      },
      {
        question: 'Can pressure washing remove oil stains from my driveway?',
        answer: 'Yes, our specialized cleaning solutions combined with appropriate pressure washing techniques can remove most oil stains from concrete and asphalt surfaces.'
      },
      {
        question: 'How long does pressure washing take?',
        answer: 'The time required depends on the size of the area and level of dirt. Most residential jobs can be completed in 2-4 hours, while larger commercial properties may take a full day.'
      }
    ]
  },
  'house-washing': {
    title: 'Complete House Washing Services | Restore Your Home\'s Beauty',
    shortDescription: 'Expert house washing in Vancouver & Surrey – Gentle soft washing for siding, brick & stucco',
    description: 'Revitalize your home\'s exterior with our comprehensive house washing services. We specialize in soft washing techniques that safely remove dirt, algae, mold, and mildew without damaging your siding or paint. Our professional team uses biodegradable cleaning solutions and appropriate water pressure for each surface type, whether it\'s vinyl, fiber cement, wood, brick, or stucco. Regular house washing not only improves your home\'s appearance but also extends the life of your exterior surfaces by preventing damage from organic growth and environmental contaminants.',
    images: [
      '/assets/services/full-house-cleaning/3.webp',
      '/assets/services/full-house-cleaning/4.webp',
    ],
    benefits: [
      'Restores original beauty and color',
      'Prevents costly repairs and premature aging',
      'Removes harmful mold and mildew',
      'Improves home health by eliminating allergens',
      'Increases property value and curb appeal',
      'Prepares surfaces for painting or sealing'
    ],
    keyFeatures: [
      'Safe soft washing techniques',
      'Biodegradable, eco-friendly cleaning solutions',
      'Complete exterior wall cleaning',
      'Trim and eaves cleaning',
      'Mold and mildew treatment',
      'Surface-appropriate methods for all siding types'
    ],
    cities: [
      'Surrey',
      'Richmond',
      'Vancouver',
      'Burnaby',
      'Coquitlam',
      'Langley',
      'Delta',
      'White Rock',
      'New Westminster',
      'North Vancouver',
      'Abbotsford'
    ],
    faqItems: [
      {
        question: 'What is soft washing and how is it different from pressure washing?',
        answer: 'Soft washing uses lower water pressure combined with specialized cleaning solutions to safely remove dirt and organic growth. Unlike high-pressure washing, soft washing won\'t damage siding, windows, or other delicate surfaces.'
      },
      {
        question: 'Is house washing safe for all types of siding?',
        answer: 'Yes, we use different techniques for different siding materials. Our team is trained to select the appropriate pressure, temperature, and cleaning solutions for vinyl, wood, fiber cement, stucco, brick, and other exterior surfaces.'
      },
      {
        question: 'How often should I have my house washed?',
        answer: 'We recommend house washing every 1-2 years for most homes in the Vancouver area. Homes in shaded areas or near trees may need more frequent cleaning to prevent mold and algae growth.'
      },
      {
        question: 'Will your cleaning solutions harm my landscaping?',
        answer: 'No, we use environmentally friendly, biodegradable cleaning solutions that won\'t harm your plants, pets, or landscaping. We also take precautions to protect sensitive plants during the cleaning process.'
      },
      {
        question: 'How long does it take to wash a house?',
        answer: 'Most residential house washing services can be completed in 3-5 hours, depending on the size of your home and the level of dirt and organic growth.'
      }
    ]
  },
  'driveway-pressure-wash': {
    title: 'Driveway Pressure Washing | Remove Stains & Restore Appearance',
    shortDescription: 'Professional driveway cleaning in Vancouver & Surrey – Remove oil stains, moss & discoloration',
    description: 'Transform your driveway with our specialized pressure washing services. We effectively remove stubborn oil stains, tire marks, dirt, mold, mildew, and other unsightly blemishes that diminish your property\'s curb appeal. Our professional team uses powerful equipment with adjustable pressure settings combined with appropriate cleaning solutions to tackle even the toughest stains without damaging your concrete, asphalt, or pavers. A clean driveway not only enhances your home\'s appearance but also provides safer walking and driving surfaces by eliminating slippery moss and algae growth.',
    images: [
      '/assets/services/gutter-cleaning/1.webp',
      '/assets/services/gutter-cleaning/2.webp',
    ],
    benefits: [
      'Dramatically improves curb appeal',
      'Removes slippery moss and algae for safety',
      'Prevents concrete deterioration',
      'Extends driveway lifespan',
      'Eliminates oil and chemical stains',
      'Prepares surface for sealing or coating'
    ],
    keyFeatures: [
      'High-power surface cleaning equipment',
      'Specialized stain removal techniques',
      'Hot water cleaning for oil stains',
      'Moss and weed elimination',
      'Environmentally safe cleaning solutions',
      'Complete cleaning of edges and corners'
    ],
    cities: [
      'Surrey',
      'Richmond',
      'Vancouver',
      'Burnaby',
      'Coquitlam',
      'Langley',
      'Delta',
      'White Rock',
      'New Westminster',
      'North Vancouver',
      'Abbotsford'
    ],
    faqItems: [
      {
        question: 'Can you remove oil stains from my driveway?',
        answer: 'Yes, we use specialized degreasers and hot water pressure washing techniques to remove even stubborn oil stains from concrete and asphalt driveways.'
      },
      {
        question: 'Will pressure washing damage my stamped or decorative concrete?',
        answer: 'No, we adjust our pressure settings based on your specific driveway material. For decorative or stamped concrete, we use appropriate pressure levels and techniques to clean effectively without causing damage.'
      },
      {
        question: 'How often should I have my driveway pressure washed?',
        answer: 'For most homes in the Vancouver area, we recommend driveway cleaning once a year. Driveways in heavily wooded areas or those with significant moss issues may benefit from cleaning twice a year.'
      },
      {
        question: 'Can pressure washing remove rust stains from my concrete?',
        answer: 'Yes, our specialized rust removal solutions combined with professional pressure washing techniques can remove most rust stains from concrete surfaces.'
      },
      {
        question: 'Do you clean other hardscaped areas besides driveways?',
        answer: 'Absolutely! We clean walkways, patios, pool decks, retaining walls, and any other concrete, stone, or paver surfaces on your property.'
      }
    ]
  },
  'driveway-sealing': {
    title: 'Professional Driveway Sealing Services | Protect & Enhance',
    shortDescription: 'Expert driveway sealing in Vancouver & Surrey – Long-lasting protection for concrete & asphalt',
    description: 'Extend the life of your driveway with our professional sealing services. After thoroughly cleaning your driveway, we apply high-quality sealants that protect against water penetration, oil stains, UV damage, and freeze-thaw cycles. Our sealants enhance the color and appearance of concrete, asphalt, and paver driveways while providing a protective barrier against the harsh Pacific Northwest elements. Properly sealed driveways require less maintenance, resist staining, and maintain their attractive appearance for years longer than unsealed surfaces.',
    images: [
      '/assets/services/commercial-cleaning/1.webp',
      '/assets/services/commercial-cleaning/2.webp',
    ],
    benefits: [
      'Protects against water damage and cracking',
      'Prevents oil and chemical stains',
      'Resists UV fading and discoloration',
      'Extends driveway lifespan significantly',
      'Enhances color and appearance',
      'Reduces ongoing maintenance costs'
    ],
    keyFeatures: [
      'Premium-grade sealants',
      'Complete surface preparation',
      'Crack filling and repair options',
      'Uniform application techniques',
      'Slip-resistant finish options',
      'Environmentally friendly sealant choices'
    ],
    cities: [
      'Surrey',
      'Richmond',
      'Vancouver',
      'Burnaby',
      'Coquitlam',
      'Langley',
      'Delta',
      'White Rock',
      'New Westminster',
      'North Vancouver',
      'Abbotsford'
    ],
    faqItems: [
      {
        question: 'How long does driveway sealing last?',
        answer: 'Our premium sealants typically last 2-5 years depending on traffic, weather exposure, and driveway material. Asphalt driveways generally need more frequent sealing than concrete.'
      },
      {
        question: 'How soon can I use my driveway after sealing?',
        answer: 'Most sealants require 24-48 hours to fully cure before vehicles can drive on the surface. We\'ll provide specific instructions based on the product used and weather conditions.'
      },
      {
        question: 'Should I seal my driveway immediately after installation?',
        answer: 'New concrete driveways should cure for at least 30 days before sealing. New asphalt driveways should cure for at least 90 days. We can help determine the right timing for your specific situation.'
      },
      {
        question: 'Will sealing change the appearance of my driveway?',
        answer: 'Yes, most sealants enhance the color of your driveway and provide a fresh, clean appearance. Concrete sealers range from natural matte finishes to wet-look glossy finishes depending on your preference.'
      },
      {
        question: 'Do you repair cracks and damage before sealing?',
        answer: 'Yes, we offer crack filling, patching, and minor repairs as part of our comprehensive driveway sealing service to ensure the best results and longevity.'
      },
      {
        question: 'Is driveway sealing environmentally friendly?',
        answer: 'We offer eco-friendly water-based sealant options that provide excellent protection with minimal environmental impact and low VOC emissions.'
      }
    ]
  },
  'concrete-sealing': {
    title: 'Professional Concrete Sealing Services | Protect & Preserve',
    shortDescription: 'Expert concrete sealing in Vancouver & Surrey – Weatherproof protection for patios, walkways & more',
    description: 'Protect your concrete surfaces with our professional sealing services. We apply high-performance sealants that penetrate and bond with concrete to provide long-lasting protection against water damage, staining, freeze-thaw cycles, and UV exposure. Our concrete sealing services cover patios, walkways, pool decks, garage floors, and other concrete surfaces around your home or business. Properly sealed concrete resists cracking, spalling, and deterioration, significantly extending the life of your concrete while enhancing its appearance with either a natural look or a beautiful wet-look finish depending on your preference.',
    images: [
      '/assets/services/commercial-cleaning/2.webp',
      '/assets/services/commercial-cleaning/3.webp',
    ],
    benefits: [
      'Prevents water damage and cracking',
      'Resists oil, grease, and chemical stains',
      'Reduces efflorescence and discoloration',
      'Extends concrete lifespan by years',
      'Enhances surface appearance and color',
      'Simplifies cleaning and maintenance'
    ],
    keyFeatures: [
      'Premium penetrating and surface sealers',
      'Thorough surface preparation',
      'Crack repair and surface preparation',
      'Professional application techniques',
      'Non-slip finish options for safety',
      'Decorative enhancement options'
    ],
    cities: [
      'Surrey',
      'Richmond',
      'Vancouver',
      'Burnaby',
      'Coquitlam',
      'Langley',
      'Delta',
      'White Rock',
      'New Westminster',
      'North Vancouver',
      'Abbotsford'
    ],
    faqItems: [
      {
        question: 'What types of concrete sealers do you offer?',
        answer: 'We offer penetrating sealers that protect without changing appearance, acrylic sealers that enhance color with a slight sheen, and high-gloss sealers for a wet look. We\'ll help you choose the right option for your needs.'
      },
      {
        question: 'How often should concrete be sealed?',
        answer: 'Most concrete surfaces in the Vancouver area should be resealed every 2-3 years, though high-traffic areas may need more frequent application. We can assess your specific situation during consultation.'
      },
      {
        question: 'Can you seal stamped or decorative concrete?',
        answer: 'Yes, we specialize in sealing decorative concrete surfaces with products specifically designed to protect and enhance the beauty of stamped, stained, or exposed aggregate concrete.'
      },
      {
        question: 'Will sealer make my concrete slippery when wet?',
        answer: 'We offer anti-slip additives for all our sealers that create a safe, textured surface that maintains excellent traction even when wet, perfect for pool decks, walkways, and steps.'
      },
      {
        question: 'Can you seal my concrete patio and pool deck?',
        answer: 'Absolutely! We seal all exterior concrete surfaces including patios, pool decks, walkways, steps, retaining walls, and decorative concrete features.'
      },
      {
        question: 'How long does it take for concrete sealer to dry?',
        answer: 'Most sealers are dry to the touch within 4-8 hours, but we recommend waiting 24-48 hours before allowing foot traffic and 72 hours before allowing vehicle traffic.'
      }
    ]
  }
};
