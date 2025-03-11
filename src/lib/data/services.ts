export const services = [
	'full-house-cleaning',
	'pressure-washing',
	'roof-cleaning',
	'gutter-cleaning',
	'house-washing',
	'window-washing',
	'commercial-cleaning',
	'roof-painting',
	'post-construction-cleanup',
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
		applications: string[];
		benefits?: string[];
		keyFeatures?: string[];
		cities?: string[];
		faqItems?: FaqItem[];
	};
};

export const serviceData: ServiceData = {
	'full-house-cleaning': {
		title: '$999 Full House Cleaning Deal',
		shortDescription: 'Your home deserves to shine again!',
		description: `
			<strong>Your Home Deserves to Shine Again – $999 Full House Deal!</strong><br><br>
			At Splash N Shine, we specialize in high-quality exterior cleaning services that enhance your home's curb appeal and longevity. Our <strong>$999 Full House Cleaning Package</strong> is a complete solution designed to restore your property's pristine condition.<br><br>
			<strong>What's Included:</strong><br>
			✔ House Soft Wash – Gentle yet powerful clean removes dirt, algae and mildew without damaging paint or siding.<br>
			✔ Roof Cleaning – Safe soft wash eliminates moss and algae to extend roof life.<br>
			✔ Window Washing – Professional streak-free exterior window cleaning.<br>
			✔ Driveway & Walkway Pressure Washing – Removes oil stains, grime, and discoloration.<br>
			✔ Gutter Cleaning – Thorough cleaning to prevent water damage.<br><br>
			<strong>Why Choose Splash N Shine?</strong><br>
			✔ 5-Star Google Reviews – Trusted by homeowners<br>
			✔ Eco-Friendly & Safe – Protects your family & property<br>
			✔ Licensed & Insured Exterior Cleaning Experts<br>
			✔ Customer Satisfaction Guaranteed – Your home will look brand new<br>
			✔ Trusted & Highly Rated in Surrey, Richmond & Vancouver<br><br>
			<strong>Why miss this deal?</strong><br>
			Take advantage of this limited-time offer and restore your home's beauty. Our $999 Full House Cleaning Package provides an affordable and professional solution for comprehensive exterior maintenance.
		`,
		applications: [
			'Residential Homes',
			'Single-Family Houses',
			'Townhouses',
			'Duplexes',
			'Small Multi-Family Properties',
			'Rental Properties'
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
	'pressure-washing': {
		title: 'Pressure Washing',
		shortDescription: 'Professional pressure washing services for driveways, patios, and exterior surfaces.',
		description: 'Our professional pressure washing services remove stubborn dirt, grime, mold, and mildew from your exterior surfaces. Using state-of-the-art equipment and eco-friendly cleaning solutions, we restore your property\'s appearance and prevent damage from contaminants that can degrade surfaces over time. Whether it\'s your driveway, walkway, patio, deck, fence, or any other exterior surface, our trained technicians deliver thorough cleaning that enhances curb appeal and extends the life of your property.',
		applications: [
			'Driveways',
			'Walkways',
			'Patios & Decks',
			'Fences',
			'Pool Areas',
			'Commercial Spaces'
		],
		benefits: [
			'Removes stubborn stains and contaminants',
			'Prevents mold and mildew growth',
			'Extends the lifespan of exterior surfaces',
			'Enhances property value and curb appeal',
			'Eco-friendly cleaning solutions',
			'Prevents slip hazards from algae and moss'
		],
		keyFeatures: [
			'Adjustable pressure for different surfaces',
			'Hot water capability for tough stains',
			'Surface-appropriate techniques',
			'Complete cleanup after service',
			'Fast drying times',
			'Preventative treatments available'
		],
		cities: [
			'Surrey',
			'Langley',
			'White Rock',
			'Richmond',
			'Vancouver',
			'Burnaby',
			'Coquitlam',
			'New Westminster',
			'Delta',
			'North Vancouver',
			'Abbotsford'
		],
		faqItems: [
			{
				question: 'How Often Should a Commercial Property Be Pressure Washed?',
				answer: 'Most businesses should have exterior cleaning every 6-12 months to maintain a professional appearance.'
			},
			{
				question: 'Is Pressure Washing Safe for All Building Materials?',
				answer: 'Yes! We use adjustable pressure washing & soft washing to safely clean brick, stucco, concrete, wood, glass, and metal surfaces.'
			},
			{
				question: 'Do You Clean Strata Buildings & Multi-Unit Residences?',
				answer: 'Absolutely! We specialize in strata pressure washing & multi-unit exterior cleaning, ensuring townhouses, condos & apartments stay spotless.'
			},
			{
				question: 'Can You Remove Graffiti from Walls & Storefronts?',
				answer: 'Yes! Our professional graffiti removal services restore walls, fences, and business exteriors.'
			}
		]
	},
	'roof-cleaning': {
		title: 'Roof Cleaning',
		shortDescription: 'Safe and effective roof cleaning to remove moss, algae, and debris.',
		description: 'Don\'t let moss, algae, and black streaks damage your roof! At Splash N Shine, we provide professional roof cleaning services using a soft wash system to safely remove dirt, grime, and harmful growth. Our roof moss removal service extends your roof\'s lifespan, boosts curb appeal, and prevents costly repairs. Using safe soft-wash techniques that won\'t harm your roofing materials, we thoroughly clean and treat your roof to prevent regrowth. Regular roof cleaning not only improves your home\'s appearance but also prevents costly repairs by eliminating organisms that can deteriorate roofing materials and cause leaks.',
		applications: [
			'Asphalt Shingle Roofs',
			'Cedar Shake Roofs',
			'Tile & Clay Roofs',
			'Metal Roofs',
			'Flat Roofs',
			'Commercial Roofing'
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
	'gutter-cleaning': {
		title: 'Gutter Cleaning',
		shortDescription: 'Comprehensive gutter and downspout cleaning to prevent water damage.',
		description: 'Blocked gutters can lead to roof damage, foundation issues, and costly repairs. At Splash N Shine, we provide expert gutter cleaning services to ensure your home\'s drainage system works perfectly, preventing leaks and protecting your property. Our thorough gutter cleaning service removes leaves, debris, and blockages from your gutters and downspouts to ensure proper water drainage. Clogged gutters can lead to water damage to your roof, fascia, siding, and foundation. Our professional technicians hand-clean your gutters, flush downspouts, and ensure that water flows freely away from your home.',
		applications: [
			'Residential Homes',
			'Commercial Buildings',
			'Apartment Complexes',
			'Condominiums',
			'Townhouses',
			'High-Rise Buildings'
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
	'house-washing': {
		title: 'House Washing',
		shortDescription: 'Gentle and effective house washing to restore your home\'s exterior.',
		description: 'Our house washing services restore your home\'s exterior to its original beauty by safely removing dirt, algae, mildew, and other contaminants. Using our specialized soft-wash system, we clean siding, brick, stucco, and other exterior surfaces without the risk of damage from high-pressure washing. Our biodegradable cleaning solutions effectively remove stubborn stains while being safe for your landscaping, pets, and family. Regular house washing not only enhances your home\'s curb appeal but also prevents premature aging and deterioration of exterior surfaces, saving you money on repairs and repainting.',
		applications: [
			'Vinyl Siding',
			'Wood Siding',
			'Brick & Stone',
			'Stucco',
			'Hardie Board',
			'Painted Surfaces'
		],
		benefits: [
			'Removes dirt, mildew, and algae',
			'Prevents premature aging of surfaces',
			'Maintains property value',
			'Healthier living environment',
			'Prepares surfaces for painting',
			'Removes insect nests and webs'
		],
		keyFeatures: [
			'Low-pressure soft washing',
			'Eco-friendly cleaning solutions',
			'Complete exterior treatment',
			'Safe for all surface types',
			'Window cleaning options',
			'Preventative treatments available'
		],
		cities: [
			'Burnaby',
			'Surrey',
			'Vancouver',
			'Richmond',
			'North Vancouver',
			'Coquitlam',
			'Langley',
			'Delta',
			'White Rock',
			'New Westminster',
			'Abbotsford'
		],
		faqItems: [
			{
				question: 'Is soft washing safe for all siding types?',
				answer: 'Yes, our soft wash technique is specifically designed to safely clean all types of siding including vinyl, wood, brick, stucco, and Hardie board without causing damage.'
			},
			{
				question: 'How often should I have my house washed?',
				answer: 'For homes in the Lower Mainland, we recommend house washing every 1-2 years, depending on your surroundings. Homes near trees or in heavily wooded areas may benefit from annual cleaning.'
			},
			{
				question: 'Will house washing damage my plants and landscaping?',
				answer: 'Our eco-friendly cleaning solutions are safe for your landscaping. Additionally, we take precautions by pre-rinsing plants and ensuring all solutions are properly diluted.'
			},
			{
				question: 'How long does house washing take?',
				answer: 'An average-sized home can typically be completed in 2-4 hours. Larger homes or those with extensive contamination may take longer.'
			}
		]
	},
	'window-washing': {
		title: 'Window Washing',
		shortDescription: 'Professional streak-free window cleaning for residential and commercial properties.',
		description: 'Our professional window washing services leave your windows spotless, streak-free, and crystal clear. We clean both interior and exterior windows, including screens, tracks, and frames. Using professional-grade tools and eco-friendly solutions, our technicians handle windows of all types and sizes, even those in hard-to-reach areas. Clean windows not only enhance your property\'s appearance but also allow more natural light into your space and provide clearer views of the outside. Regular window cleaning also extends the life of your windows by removing corrosive contaminants that can damage glass and frames over time.',
		applications: [
			'Residential Homes',
			'Storefronts',
			'Office Buildings',
			'High-Rise Windows',
			'Skylights',
			'Solar Panels'
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
	'commercial-cleaning': {
		title: 'Commercial Cleaning',
		shortDescription: 'Comprehensive exterior cleaning services for commercial properties.',
		description: 'A clean and well-maintained commercial property leaves a lasting impression on customers, employees, and tenants. At Splash N Shine, we provide top-rated commercial pressure washing, strata cleaning, and exterior maintenance services across Surrey, Richmond, Vancouver, and surrounding areas. Our commercial cleaning services are designed to maintain and enhance the appearance and longevity of your business property. From storefronts to shopping centers, warehouses to office buildings, we provide professional pressure washing, window cleaning, and exterior maintenance services that keep your property looking its best.',
		applications: [
			'Office Buildings',
			'Retail Stores',
			'Shopping Centers',
			'Restaurants & Cafés',
			'Medical & Dental Offices',
			'Schools & Daycares',
			'Warehouses',
			'Car Dealerships'
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
	'roof-painting': {
		title: 'Roof Painting & Coating',
		shortDescription: 'Professional roof painting and coating to protect and beautify your roof.',
		description: 'Over time, exposure to UV rays, rain, and moss growth can cause roof discoloration, peeling paint, and premature aging. At Splash N Shine, we specialize in high-quality roof painting, roof coating, and roof restoration to extend your roof\'s lifespan and enhance your home\'s curb appeal. Our roof painting and coating services extend the life of your roof while improving its appearance and performance. Using high-quality, weather-resistant coatings specifically formulated for roofing materials, we provide protection against the harsh elements of the Pacific Northwest.',
		applications: [
			'Asphalt Shingle Roofs',
			'Metal Roofs',
			'Flat Roofs',
			'Tile Roofs',
			'Commercial Roofing',
			'Industrial Buildings'
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
	'post-construction-cleanup': {
		title: 'Post-Construction Cleanup',
		shortDescription: 'Thorough cleanup services after construction or renovation projects.',
		description: 'After a renovation, remodeling, or new build, dust, debris, and leftover materials can make your space look messy and unsafe. At Splash N Shine, we provide expert post-construction cleaning services to ensure your property is move-in ready, spotless, and safe. Our post-construction cleanup services provide comprehensive cleaning after building or renovation projects. We remove construction debris, dust, stickers, and protective coverings from all surfaces including windows, fixtures, flooring, and exterior surfaces. Using specialized equipment and techniques, we tackle tough construction residues like paint overspray, concrete dust, and adhesive marks.',
		applications: [
			'New Home Construction',
			'Home Renovations',
			'Commercial Building Projects',
			'Office Renovations',
			'Retail Build-Outs',
			'Industrial Construction'
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
	}
};
