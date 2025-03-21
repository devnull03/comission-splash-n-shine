<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import * as Carousel from '$lib/components/ui/carousel';
	import * as Card from '$lib/components/ui/card';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context';
	import { Button } from '$lib/components/ui/button';
	import Autoplay from 'embla-carousel-autoplay';
	import { slide } from 'svelte/transition';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import Image from '$lib/components/Image.svelte';
	import { serviceData } from '$lib/data/services';

	let selectedServiceData = $derived(serviceData[page.params.id]);

	let carouselAPI: CarouselAPI | undefined = $state();
	let currentSlide = $state(0);

	let carouselCaptions: string[] = $derived(
		selectedServiceData && selectedServiceData.benefits
			? selectedServiceData.benefits
			: selectedServiceData && selectedServiceData.keyFeatures
				? selectedServiceData.keyFeatures
				: []
	);

	const domain = $derived(`${page.url.protocol}//${page.url.host}`);

	$effect(() => {
		if (carouselAPI) {
			carouselAPI.on('select', () => {
				if (carouselAPI) currentSlide = carouselAPI.selectedScrollSnap();
			});
		}
	});

	$effect(() => {
		if (!selectedServiceData) {
			goto('/?services');
		}
	});

	const formatServiceName = (id: string) => {
		return id
			.split('-')
			.map((x) => x[0].toUpperCase() + x.slice(1))
			.join(' ');
	};
</script>

<svelte:head>
	<title
		>{selectedServiceData?.title || formatServiceName(page.params.id)} Specialists | Splash n' Shine
		| Vancouver</title
	>
	<meta
		name="description"
		content="Expert {selectedServiceData?.title ||
			formatServiceName(
				page.params.id
			)} in Vancouver and the Lower Mainland. Our professional team uses eco-friendly methods and cutting-edge equipment for superior results."
	/>
	<meta
		name="keywords"
		content="{selectedServiceData?.title || formatServiceName(page.params.id)}, {page.params
			.id} Vancouver, {page.params.id} Surrey, professional {page.params.id}, affordable {page
			.params.id}, eco-friendly {page.params.id}, residential {page.params.id}, commercial {page
			.params.id}, Lower Mainland"
	/>
	<meta
		property="og:title"
		content="Professional {selectedServiceData?.title ||
			formatServiceName(page.params.id)} | Splash n' Shine"
	/>
	<meta
		property="og:description"
		content="Transform your property with our expert {selectedServiceData?.title ||
			formatServiceName(
				page.params.id
			)} services. Serving Vancouver, Surrey and the entire Lower Mainland with quality and care."
	/>
	<meta property="og:image" content="/assets/services/{page.params.id}/1.webp" />
	<meta property="og:url" content="https://www.splashnshine.ca/services/{page.params.id}" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Splash n' Shine" />

	<link rel="canonical" href="https://www.splashnshine.ca/services/{page.params.id}" />
</svelte:head>

<main class="mt-24 *:p-10 lg:mt-16 *:lg:p-32 *:lg:pb-0">
	<!-- Carousel -->
	<section
		class="flex flex-col overflow-hidden bg-black text-center text-2xl text-white lg:text-4xl lg:!pb-32"
	>
		<h1 class="mb-8 font-[Cantarell] lg:mb-16">
			<!-- Why {formatServiceName(page.params.id)}? -->
			{selectedServiceData.shortDescription}
		</h1>

		<Carousel.Root
			plugins={[Autoplay({ delay: 4000 })]}
			class="-mx-10 mb-8 select-none lg:-mx-32"
			bind:api={carouselAPI}
		>
			<Carousel.Content class="ml-[14vw] max-w-[75vw] pr-1 lg:ml-[25vw] lg:max-w-[50vw]">
				{#each selectedServiceData.images as image, idx}
					<Carousel.Item
						onclick={() => carouselAPI?.scrollTo(idx)}
						class="-ml-6 cursor-pointer pl-1 first:ml-auto {currentSlide === idx ||
							'scale-75 lg:scale-90'} transition-all duration-300 ease-in-out"
						aria-label={`View slide ${idx + 1}`}
					>
						<Card.Root class="overflow-hidden !border-black">
							<Card.Content class="lg:aspect-16/9 aspect-9/16 overflow-hidden object-cover p-0">
								<Image
									url={image}
									description={`${formatServiceName(page.params.id)} process demonstration - step ${idx + 1} showing ${carouselCaptions[idx] || 'professional cleaning technique'}`}
									class="lg:aspect-16/9 aspect-9/16 h-[50vh] max-h-[50vh] w-full scale-125 rounded-2xl object-cover object-center lg:h-auto"
								/>
							</Card.Content>
						</Card.Root>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>

		{#if carouselCaptions.length > 0 && currentSlide < carouselCaptions.length}
			{#key currentSlide}
				<h2 transition:slide={{ duration: 1000 }} class="font-[Alatsi] text-2xl font-semibold">
					{carouselCaptions[currentSlide]}
				</h2>
			{/key}
		{/if}
	</section>

	<!-- Available Cities -->
	{#if selectedServiceData.cities && selectedServiceData.cities.length > 0}
		<section class="font-[Cantarell]">
			<h3 class="mb-8 text-center text-2xl font-semibold">Service Areas</h3>
			<div class="flex flex-wrap justify-center gap-4">
				{#each selectedServiceData.cities as city}
					<a
						href="{domain}/locations/{city
							.split(' ')
							.map((v) => v.toLowerCase())
							.join('-')}"
						class="rounded-full bg-black px-4 py-2 text-white">{city}</a
					>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Applications -->
	<section class="font-[Cantarell]">
		<h3 class="mb-16 text-center text-2xl font-semibold">Applications</h3>
		<div class="grid w-full grid-cols-3 grid-rows-2 gap-4 lg:gap-0">
			{#each selectedServiceData.applications as application, idx}
				<figure class="flex aspect-square flex-col items-center justify-center gap-4">
					<Image
						url={`/assets/${page.params.id}/applications/${idx}.png`}
						description={`${application} service icon - suitable for ${selectedServiceData.title} applications`}
						class="w-[10vw]"
					/>
					<figcaption class="text-center text-xs">{application}</figcaption>
				</figure>
			{/each}
		</div>
	</section>
	
	<!-- FAQ Section -->
	{#if selectedServiceData.faqItems && selectedServiceData.faqItems.length > 0}
		<section class="bg-gray-100 font-[Cantarell] lg:!pb-32">
			<h3 class="mb-8 text-center text-2xl font-semibold">Frequently Asked Questions</h3>
			<div class="grid gap-4">
				{#each selectedServiceData.faqItems as faq}
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="mb-2 text-lg font-bold">{faq.question}</h4>
						<p>{faq.answer}</p>
					</div>
				{/each}
			</div>
		</section>
	{/if}
</main>
