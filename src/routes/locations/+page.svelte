<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { contactInfo, locationsData } from '$lib/data/locations';
	import { DrawingPin, Mobile, ArrowRight } from 'svelte-radix';
	import { page } from '$app/state';
	import { fadeIn } from '$lib/utils/anims';

	const locations = Object.entries(locationsData);
	
	const domain = $derived(`${page.url.protocol}//${page.url.host}`);
</script>

<svelte:head>
	<title>Service Locations | Splash n' Shine Vancouver</title>
	<meta 
		name="description" 
		content="Find premium exterior cleaning services across Metro Vancouver. From Vancouver to Surrey, Burnaby, Richmond, and beyond, we serve your neighborhood." 
	/>
	<meta name="keywords" content="exterior cleaning Vancouver, pressure washing Surrey, roof cleaning Burnaby, house washing Richmond, gutter cleaning Coquitlam, window washing Delta, driveway cleaning Langley, commercial cleaning White Rock, strata cleaning North Vancouver" />
	<meta property="og:title" content="Locations Served | Splash n' Shine Cleaning Services" />
	<meta property="og:description" content="Discover our service areas throughout Metro Vancouver. Professional exterior cleaning for residential and commercial properties in all major communities." />
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://www.splashnshine.ca/locations" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://www.splashnshine.ca/locations" />
</svelte:head>

<!-- Structured Data for Locations Page -->
{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			"name": "Service Locations | Splash n' Shine Vancouver",
			"description": "Find premium exterior cleaning services across Metro Vancouver. From Vancouver to Surrey, Burnaby, Richmond, and beyond, we serve your neighborhood.",
			"url": "${domain}/locations",
			"provider": {
				"@type": "LocalBusiness",
				"name": "Splash n' Shine",
				"url": "${domain}"
			},
			"mainEntity": {
				"@type": "ItemList",
				"name": "Service Areas",
				"numberOfItems": ${locations.length},
				"itemListElement": [
					${locations.map((location, index) => `
						{
							"@type": "ListItem",
							"position": ${index + 1},
							"item": {
								"@type": "Place",
								"name": "${location[1].name}",
								"url": "${domain}/locations/${location[0]}"
							}
						}`
					).join(',')}
				]
			}
		}
	</script>
`}

<main use:fadeIn class="mt-24 p-10 lg:mt-16 lg:p-32">
	<section class="mb-16">
		<h1 class="mb-8 text-center text-4xl font-bold">Our Locations</h1>
		<p class="mx-auto mb-12 max-w-3xl text-center text-lg">
			Splash n' Shine provides top-quality concrete coatings and pressure washing services across
			multiple locations. Find your nearest branch below.
		</p>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each locations as [id, location]}
				<div
					class="flex flex-col rounded-lg border bg-white p-6 shadow-lg transition-all hover:shadow-xl"
				>
					<h2 class="mb-4 text-2xl font-bold">{location.name}</h2>

					<div class="mb-4 flex flex-1 flex-col gap-3">
						<div class="flex items-center gap-2">
							<Mobile class="shrink-0 text-primary" size="18" />
							<a href="tel:{contactInfo.phone.replace(/[^\d+]/g, '')}" class="hover:text-primary">
								{contactInfo.phone}
							</a>
						</div>
						<div class="flex items-center gap-2">
							<Mobile class="shrink-0 text-primary" size="18" />
							<a href="mailto:{contactInfo.email}" class="hover:text-primary">
								{contactInfo.email}
							</a>
						</div>
					</div>

					<div class="mt-4">
						<Button href={`${domain}/locations/${id}`} class="flex w-full items-center justify-center gap-2">
							View Details <ArrowRight size="16" />
						</Button>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Call to action -->
	<section class="mb-16 rounded-lg bg-primary p-8 shadow-lg">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-4 text-3xl font-bold">Don't see your location?</h2>
			<p class="mb-6 text-lg">
				We're constantly expanding our service area. Contact us to inquire about services in your
				area.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button href={`${domain}/contact`} variant="secondary">Contact Us</Button>
				<Button href="tel:+1{contactInfo.phone}" variant="secondary">
					Call {contactInfo.phone}
				</Button>
			</div>
		</div>
	</section>
</main>
