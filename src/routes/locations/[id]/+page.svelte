<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';
	import { contactInfo, locationIds, locationsData } from '$lib/data/locations';
	import { serviceData } from '$lib/data/services';
	import { ChevronRight, DrawingPin, Mobile, EnvelopeClosed, Clock } from 'svelte-radix';
	import type { PageData } from './$types';
	import ContactForm from '$lib/components/ContactForm.svelte';

	// let selectedLocation = $derived(locationsData[$page.params.id]);

	let { data }: { data: PageData } = $props();
	let selectedLocation =  $derived(data?.location || null);
	let locationId = $derived(data?.id || null);

	// Get the base URL for absolute links
	const domain = $derived(`${page.url.protocol}//${page.url.host}`);

	$effect(() => {
		if (!selectedLocation) {
			goto('/');
		}
	});
</script>

<svelte:head>
	<title>{selectedLocation?.name} Exterior Cleaning | Splash n' Shine | Local Experts</title>
	<meta
		name="description"
		content="Splash n' Shine provides specialized exterior cleaning services in {selectedLocation?.name}. Our local team delivers exceptional power washing, soft washing, and property maintenance for homes and businesses."
	/>
	<meta
		name="keywords"
		content="{selectedLocation?.name} exterior cleaning, {selectedLocation?.name} power washing, {selectedLocation?.name} soft washing, local cleaning services, {selectedLocation?.name} property maintenance, {selectedLocation?.name} house washing, {selectedLocation?.name} commercial cleaning, {selectedLocation?.name} roof cleaning, {selectedLocation?.name} window cleaning"
	/>
	<meta
		property="og:title"
		content="{selectedLocation?.name} Exterior Cleaning Specialists | Splash n' Shine"
	/>
	<meta
		property="og:description"
		content="Your trusted local cleaning experts in {selectedLocation?.name}. Professional power washing and exterior cleaning services tailored to your community's unique needs."
	/>
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://www.splashnshine.ca/locations/{locationId}" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Splash n' Shine" />

	<link rel="canonical" href="https://www.splashnshine.ca/locations/{locationId}" />
</svelte:head>

<main class="mt-24 bg-background p-10 lg:mt-16 lg:p-32">
	<!-- Location Header -->
	<section class="mb-16">
		<h1 class="mb-4 text-center text-4xl font-bold">Splash n' Shine - {selectedLocation.name}</h1>
		<div class="mx-auto max-w-3xl text-center">
			<p class="mb-8 text-lg">
				Your premier source for concrete coatings and pressure washing services in the
				{selectedLocation.name} area
			</p>

			<div class="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button
					href="tel:{contactInfo.phone.replace(/[^\d+]/g, '')}"
					class="flex items-center gap-2 bg-primary hover:bg-primary/90"
				>
					<Mobile size="18" /> Call Now: {contactInfo.phone}
				</Button>
				<Button href="#contact" variant="outline" class="flex items-center gap-2">
					Contact Us <ChevronRight size="18" />
				</Button>
			</div>
		</div>

		<!-- Google Maps -->
		<div class="mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-lg shadow-lg">
			<iframe
				title="{selectedLocation.name} location map"
				src={selectedLocation.mapEmbedUrl}
				width="100%"
				height="100%"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</section>

	<!-- Services -->
	<section class="mb-16">
		<h2 class="mb-8 text-center text-3xl font-bold">Our Services in {selectedLocation.name}</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
			{#each selectedLocation.services as serviceId}
				{#if serviceData[serviceId]}
					<div
						class="flex flex-col rounded-lg border bg-white p-6 shadow-md transition-transform hover:scale-105"
					>
						<h3 class="mb-4 text-xl font-semibold">
							{serviceId
								.split('-')
								.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
								.join(' ')}
						</h3>
						<p class="mb-4 flex-1 text-gray-600">
							{serviceData[serviceId].shortDescription || 'Professional service tailored to your needs.'}
						</p>
						<Button href={`${domain}/services/${serviceId}`} variant="outline" class="w-full"
							>Learn More</Button
						>
					</div>
				{/if}
			{/each}
		</div>
	</section>

	<!-- Contact Information -->
	<section id="contact" class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
		<div>
			<h2 class="mb-6 text-3xl font-bold">Contact Information</h2>
			<div class="space-y-4">
				<div class="flex items-start gap-3">
					<Mobile class="mt-1" />
					<div>
						<h3 class="font-semibold">Phone</h3>
						<p>
							<a href="tel:{contactInfo.phone.replace(/[^\d+]/g, '')}" class="hover:text-primary">
								{contactInfo.phone}
							</a>
						</p>
					</div>
				</div>

				<div class="flex items-start gap-3">
					<EnvelopeClosed class="mt-1" />
					<div>
						<h3 class="font-semibold">Email</h3>
						<p>
							<a href="mailto:{contactInfo.email}" class="hover:text-primary">
								{contactInfo.email}
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Contact Form -->
		<div class="md:col-span-2 -mx-10 md:mx-auto">
			<ContactForm />
		</div>
	</section>

	<!-- FAQ -->
	<section class="mb-16">
		<h2 class="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
		<div class="mx-auto max-w-3xl">
			<Accordion.Root class="w-full">
				{#each selectedLocation.faqItems as faq, index}
					<Accordion.Item value="item-{index}">
						<Accordion.Trigger class="text-left font-semibold">
							{faq.question}
						</Accordion.Trigger>
						<Accordion.Content class="text-gray-600">
							{faq.answer}
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		</div>
	</section>
</main>
