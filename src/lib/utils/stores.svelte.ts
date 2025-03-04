import { writable } from "svelte/store";

export const quoteDialogOpen = writable(false);
export const isMobile = writable(false);
export const servicesPageNavigating = writable(false);

export const services = [
	'metalic-epoxy-floors',
	'flake-epoxy-floors',
	'epoxy-countertops',
	'texture-deck',
	'concrete-walls'
];
export type Service = typeof services[number];

type ServiceData = {
	[key: Service]: {
		applications: string[];
		description: string;
		colorChartPoints: string[];
	};
};

export const serviceData: ServiceData = {
	'metalic-epoxy-floors': {
		applications: [
			"House Basement",
			"Car Dealerships",
			"Garages",
			"Residential",
			"Shopping Malls",
			"Showrooms",
		],
		description: "Transform your space with Luxury Floors' premium metallic epoxy flooring, a top choice for high-end, durable, and visually stunning floors in Vancouver, Richmond, Burnaby, Surrey, and the Lower Mainland. Our advanced metallic epoxy coatings offer a unique depth and high-gloss finish, creating a luxurious look that mimics marble, lava flow, or other natural aesthetics. Perfect for both residential and commercial settings, metallic epoxy floors are popular in homes, art galleries, retail stores, hospitals, and showrooms. <br> <br>With the global epoxy market expanding, it’s clear why this sought-after flooring solution is becoming a staple in modern interior design. Our experts bring precision and craftsmanship to every step of the process—from preparing surfaces to the meticulous application of primers, base coats, and highlights that enhance your space with mesmerizing swirl and shimmer effects. The process finishes with a high-wear urethane topcoat for added durability, ensuring your metallic epoxy floor will maintain its beauty and resilience for years to come. <br> <br>Our skilled team ensures flawless installation, creating long-lasting, luxury epoxy floors that elevate your interiors with unmatched style and durability. Choose Luxury Floors for superior metallic epoxy flooring services and turn your floors into a true work of art. <br>",
		colorChartPoints: [
			"High-Quality Finishes",
			"Versatile Looks",
			"Customizable",
		]
	},
	'flake-epoxy-floors': {
		applications: [
			"House Basement",
			"Patios",
			"Garages",
			"Schools",
			"Grocery Stores",
			"Showrooms",
		],
		description: "Elevate your interiors with Luxury Floors' flake epoxy flooring, the perfect blend of durability, style, and functionality for homes and businesses in Vancouver, Richmond, Burnaby, Surrey, and the Lower Mainland. Flake epoxy flooring is a versatile and eye-catching solution, combining multi-colored flakes with durable epoxy coatings to create a textured, seamless finish that is both slip-resistant and visually appealing.<br><br>Ideal for garages, basements, commercial spaces, and industrial settings, flake epoxy floors offer superior resistance to wear, chemicals, and heavy foot or vehicle traffic. The textured surface not only enhances safety but also provides a modern aesthetic that complements any space. Popular in automotive shops, gyms, warehouses, and residential spaces, flake epoxy floors are the go-to choice for those seeking long-lasting performance with a touch of personality.<br>Our expert team handles every step of the process with precision and care—from surface preparation and application of primers to the layering of decorative flakes in your chosen color palette. A clear topcoat is then applied for added durability, ensuring a smooth, low-maintenance surface that retains its beauty for years to come.<br><br>Choose Luxury Floors for premium flake epoxy flooring services and transform your space into a durable, stylish, and functional masterpiece. Trust our certified professionals to deliver exceptional quality that exceeds your expectations.<br><br>",
		colorChartPoints: [
			"High-Quality Finishes",
			"Versatile Looks",
			"Customizable",
		]
	},
	'epoxy-countertops': {
		applications: [
			"Bar Top",
			"Residential Kitchens",
			"Bathrooms",
			"Dining and Coffee Table",
			"Shopping Malls",
			"Retail and commercial Shops",
		],
		description: "Transform your countertops into stunning, high-end surfaces with Luxury Floors' premium epoxy countertop solutions. Serving Vancouver, Richmond, Burnaby, Surrey, and the Lower Mainland, we specialize in creating custom epoxy countertops that combine durability, functionality, and unmatched aesthetics. Whether you desire the look of marble, quartz, or unique artistic patterns, our advanced epoxy coatings deliver a luxurious, seamless finish that enhances any space.<br><br> Perfect for residential and commercial settings, epoxy countertops are a popular choice for kitchens, bathrooms, bar tops, and workspaces. With their high-gloss finish, non-porous surface, and exceptional resistance to scratches, stains, and heat, they provide both beauty and practicality. From elegant kitchens to statement-making office desks, epoxy countertops are the ultimate blend of form and function.<br><br> Our experts take pride in precision and artistry at every stage—from surface preparation to the meticulous application of colors, patterns, and protective topcoats. Each countertop is custom-crafted to reflect your vision and style, ensuring a truly personalized result. Our UV-resistant and high-wear finishes ensure that your epoxy countertop remains vibrant and resilient for years to come.<br><br> At Luxury Floors, we’re committed to delivering exceptional results that redefine interior spaces. Let our skilled team create epoxy countertops that not only serve as functional surfaces but also as conversation-worthy works of art. Choose Luxury Floors for the best in epoxy countertop solutions and experience the pinnacle of luxury and craftsmanship.",
		colorChartPoints: [
			"High-Quality Finishes",
			"Versatile Looks",
			"Customizable",
		]
	},
	'texture-deck': {
		applications: [
			"Walkways and Driveways",
			"Pool Decks",
			"Balconies and Rooftops",
			"Stairs and Ramps",
			"Commercial Areas",
			"Sports Complexes",
		],
		description: "Transform your decks, patios, and outdoor spaces with Luxury Floors' premium texture deck solutions. Serving Vancouver, Richmond, Burnaby, Surrey, and the Lower Mainland, we specialize in high-quality textured coatings that blend durability, safety, and stunning design. Whether you want a sleek modern look or a decorative custom finish, our advanced texture deck systems provide a stylish, slip-resistant surface that enhances both aesthetics and functionality.<br><br> Perfect for residential and commercial applications, texture deck coatings are ideal for pool decks, balconies, walkways, and driveways. With their weatherproof and UV-resistant properties, these coatings stand up to the elements while maintaining their vibrant appearance. Designed to withstand wear and tear, they ensure long-lasting performance in high-traffic areas.<br><br> Our experts excel in precision and craftsmanship, handling every detail—from surface preparation to the application of durable coatings in patterns and colors tailored to your vision. Each deck is finished with advanced sealing technology, ensuring your surface remains easy to maintain and resistant to moisture, cracking, and fading.<br><br> At Luxury Floors, we’re passionate about creating spaces that are as functional as they are beautiful. Our texture deck coatings not only add safety and style to your outdoor areas but also increase the value of your property. Choose Luxury Floors for premium texture deck solutions and experience the perfect blend of luxury, durability, and design expertise. Let us bring your outdoor vision to life with our commitment to excellence and innovation.",
		colorChartPoints: [
			"High-Quality Finishes",
			"Versatile Looks",
		]
	},
	'concrete-walls': {
		applications: [
			"Walkways and Driveways",
			"Parking Lots",
			"Residential",
			"Playgrounds",
			"Airports",
			"Commercial Areas",
		],
		description: "At Luxury Floors, we recognize the importance of maintaining the integrity and visual appeal of your asphalt surfaces. Serving Vancouver, Richmond, Burnaby, Surrey, and the Lower Mainland, we specialize in expert asphalt repair solutions designed to extend the lifespan of your surfaces while enhancing their functionality and aesthetics. Whether it's minor surface damage or significant wear, our services cater to a variety of residential, commercial, and industrial needs.<br><br> Ideal for driveways, parking lots, roads, walkways, and industrial yards, our asphalt repair solutions address common issues such as cracks, potholes, rutting, and surface degradation. Using high-quality materials and advanced techniques, we ensure that repaired surfaces are durable, weather-resistant, and capable of handling heavy traffic and constant wear.<br><br> Our skilled team of professionals begins each project with a thorough surface evaluation to determine the root cause of damage. We utilize cutting-edge repair methods—such as crack sealing, pothole patching, resurfacing, and full-depth reclamation—to restore your asphalt to its original strength and smoothness. Additionally, we offer sealing services that provide enhanced protection against moisture, UV damage, and the elements, prolonging the lifespan of your asphalt surfaces.<br><br> At Luxury Floors, we take pride in delivering high-quality, long-lasting results that combine durability, safety, and aesthetics. Whether you're restoring a residential driveway, upgrading a commercial parking lot, or maintaining an industrial facility, our asphalt repair services are tailored to meet your specific needs. Choose Luxury Floors for reliable and innovative asphalt repair solutions, and let us help you restore the strength and beauty of your surfaces with unmatched expertise and attention to detail.",
		colorChartPoints: [
			"High-Quality Finishes",
			"Versatile Looks",
		]
	},
};
