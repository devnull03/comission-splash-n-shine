<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import * as Card from '$lib/components/ui/card';
	import { goto } from '$app/navigation';
	// import { page } from '$app/stores';
	import { isMobile, servicesPageNavigating } from '$lib/utils/stores';
	import Image from '$lib/components/Image.svelte';
	import { serviceData, services } from '$lib/data/services';
	import type { Review } from '$lib/types/reviews';
	import type { PageData } from './$types';
	import { PUBLIC_COMPANY_NAME } from '$env/static/public';
	import { CaretDown, DoubleArrowDown } from 'svelte-radix';
	import { page } from '$app/state';
	import { contactInfo } from '$lib/data/locations';
	import PhoneCall from '$lib/icons/PhoneCall.svelte';

	import heroAddr from '$lib/icons/landingHero.webp?enhanced';

	let { data }: { data: PageData } = $props();

	const reviews: Review[] = data?.reviews || [];
	const rating: number = data?.rating || 0;
	const userRatingCount: number = data?.userRatingCount || 0;

	let initScroll = $state(0);
	let servicesSection: HTMLElement;

	// Get the base URL for absolute links
	const domain = $derived(`${page.url.protocol}//${page.url.host}`);

	onMount(() => {
		if (page.url.toString().includes('services')) {
			servicesSection.scrollIntoView({ behavior: 'smooth' });
		}
	});

	$effect(() => {
		if ($servicesPageNavigating || page.url.toString().includes('services')) {
			$servicesPageNavigating = false;
			console.log('services page navigating');
		}
	});
</script>

<svelte:head>
	<title>Splash n' Shine | Professional Exterior Cleaning Services in Vancouver & Surrey</title>
	<meta
		name="description"
		content="Transform your property with Splash n' Shine's premium exterior cleaning services. We specialize in power washing, soft washing, and roof cleaning throughout Vancouver, Surrey and the Lower Mainland."
	/>
	<meta
		name="keywords"
		content="power washing Vancouver, exterior cleaning Surrey, soft washing, roof cleaning, gutter cleaning, window washing, house washing, driveway cleaning, deck cleaning, property maintenance, Lower Mainland pressure washing"
	/>
	<meta property="og:title" content="Splash n' Shine | Professional Exterior Cleaning" />
	<meta
		property="og:description"
		content="Vancouver's premier exterior cleaning service. Restore your property's beauty with our professional power washing solutions."
	/>
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://www.splashnshine.ca" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://www.splashnshine.ca" />
</svelte:head>

<svelte:window bind:scrollY={initScroll} />

<main class="flex w-screen flex-col items-center gap-16 pb-48 lg:gap-16">
	<section
		class="relative flex h-[85vh] w-full flex-row justify-evenly gap-0 overflow-hidden object-cover text-background"
	>
		<!-- <Image
			url="/assets/landing/1.webp"
			description="Professional exterior cleaning service in action - Splash n' Shine hero image"
			fetchpriority="high"
		/> -->

		<enhanced:img
			class="h-full object-cover"
			src={heroAddr}
			sizes="min(1280px, 100vw)"
			alt="Professional exterior cleaning service in action - Splash n' Shine"
		/>

		<div class="absolute h-full w-full bg-black/30">&nbsp;</div>
		<div
			class="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center"
		>
			<h1 class="text-shadow text-center text-[6vh] md:text-[10vw] font-semibold">
				{PUBLIC_COMPANY_NAME}
			</h1>
			<span class="text-center font-[Cantarell] text-lg md:text-2xl font-semibold *:bg-primary/30 flex flex-wrap justify-center *:px-1">
				<span>Professional</span> <span>Residential</span> <span>&</span> <span>Commercial</span>
				<span>Exterior</span> <span>Cleaning</span> <span>Near</span> <span>You</span>
			</span>
			<p class="max-w-[80vw] text-center font-[Cantarell] text-lg md:text-2xl">
				Expert Soft Wash & Pressure Washing in Vancouver & Surrey! We clean roofs, gutters, siding,
				windows & driveways
			</p>
		</div>
		<Button
			onclick={() => goto('/contact')}
			aria-label="Get free quote"
			class="absolute bottom-[20%] text-lg"
			size="lg"
		>
			<a
				href={`${domain}/contact`}
				onclick={(e) => {
					e.preventDefault();
					goto('/contact');
				}}
			>
				Get Free Quote
			</a>
		</Button>
		<button onclick={() => {}} class="absolute bottom-10 flex flex-col items-center text-white">
			<span class="">Scroll Down</span>
			<CaretDown class="h-6 w-6 animate-bounce" />
		</button>
	</section>

	<section class="flex w-full flex-col items-center gap-6 px-4 py-8">
		<h1
			class="mx-auto max-w-4xl text-center text-2xl font-semibold leading-tight md:text-5xl lg:text-4xl"
		>
			Transform Your Home with Professional Cleaning
		</h1>
		<div class="my-2 h-1 w-24 rounded-full bg-primary"></div>
		<p class="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
			Experience the difference professional cleaning makes. Our expert team delivers exceptional
			results that will enhance your property's curb appeal and value.
		</p>
	</section>

	<!-- About -->
	<section class="container mx-auto flex flex-col items-center gap-8 px-4 py-12 lg:flex-row">
		<div class="w-full lg:w-1/2">
			<Image
				url="/assets/landing/team.jpg"
				description="Splash n' Shine professional cleaning team in Vancouver"
				class="h-[60vh] w-full rounded-lg object-cover shadow-xl"
			/>
		</div>
		<div class="w-full space-y-6 lg:w-1/2">
			<h2 class="text-3xl font-semibold">Vancouver's Trusted Exterior Cleaning Experts</h2>
			<div class="h-1 w-20 rounded-full bg-primary"></div>
			<p class="text-muted-foreground">
				Welcome to Splash n' Shine, your premier exterior cleaning service provider in the Greater
				Vancouver area. With years of expertise in <a
					href="/services/pressure-washing"
					class="rounded bg-primary/30 px-1 text-black">pressure washing</a
				>
				and
				<a href="/services/soft-washing" class="rounded bg-primary/30 px-1 text-black"
					>soft washing</a
				> solutions, we've built our reputation on delivering exceptional results for both residential
				and commercial properties.
			</p>
			<p class="text-muted-foreground">
				Serving <a href="/locations/vancouver" class="rounded bg-primary/30 px-1 text-black"
					>Vancouver</a
				>,
				<a href="/locations/surrey" class="rounded bg-primary/30 px-1 text-black">Surrey</a>, and
				the entire Lower Mainland, our professional team specializes in comprehensive exterior
				cleaning services, including
				<a href="/services/roof-cleaning" class="rounded bg-primary/30 px-1 text-black"
					>roof cleaning</a
				>,
				<a href="/services/gutter-cleaning" class="rounded bg-primary/30 px-1 text-black"
					>gutter maintenance</a
				>, and
				<a href="/services/window-cleaning" class="rounded bg-primary/30 px-1 text-black"
					>window washing</a
				>.
			</p>
			<p class="text-muted-foreground">
				What sets us apart is our commitment to using cutting-edge equipment and eco-friendly
				cleaning solutions, ensuring your property receives the care it deserves while protecting
				the environment.
			</p>
			<Button onclick={() => goto('/contact')} class="mt-4">
				<a
					href={`${domain}/contact`}
					onclick={(e) => {
						e.preventDefault();
						goto('/contact');
					}}
				>
					Schedule a Free Consultation
				</a>
			</Button>
		</div>
	</section>

	<!-- services -->
	<section
		class="flex scroll-mt-32 flex-col items-center gap-12 px-4 pb-8 lg:gap-16"
		id="services"
		bind:this={servicesSection}
	>
		<h1 class="text-center text-4xl font-semibold leading-10">Services</h1>

		<div class="grid w-full gap-2 lg:grid-cols-3">
			{#each Object.keys(serviceData) as serviceKey, i}
				{@const service = serviceData[serviceKey]}
				<div class="mb-6 flex flex-col items-center gap-4 text-center">
					<button
						onclick={() => goto(`/services/${serviceKey}`)}
						class="aspect-square overflow-hidden rounded object-cover"
						aria-label={`Learn more about ${service.title}`}
					>
						<a
							href={`${domain}/services/${serviceKey}`}
							onclick={(e) => {
								e.preventDefault();
								goto(`/services/${serviceKey}`);
							}}
						>
							<Image
								url={`/assets/services/${serviceKey}/1.webp`}
								description={`${service.title} service highlight - professional cleaning demonstration by Splash n' Shine`}
								class="aspect-square h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-110"
								width="480"
								quality={50}
							/>
						</a>
					</button>

					<span class="font-[Alatsi] text-xl"> {service.title}</span>
					<span class="font-[Cantarell] text-[#00000099]">{service.shortDescription}</span>
					<a
						href={`${domain}/services/${services[i]}`}
						class="border-b border-b-transparent text-xs italic transition-all duration-300 ease-in-out hover:border-b-black"
						>Read more...</a
					>
				</div>
			{/each}
		</div>
	</section>

	<!-- Phone CTA -->
	<section class="relative flex h-[60vh] w-full items-center justify-center py-24 text-white">
		<div class="absolute inset-0 z-0">
			<Image
				url="/assets/landing/2.jpg"
				description="Professional exterior cleaning background"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-secondary-foreground/65">&nbsp;</div>
		</div>
		<div class="container relative z-10 mx-auto my-auto text-center">
			<h2 class="mb-4 text-4xl font-semibold">Ready to Transform Your Property?</h2>
			<p class="mb-8 text-xl opacity-90">Call now for a free consultation and estimate</p>
			<a
				href="tel:778-804-5911"
				class="group inline-flex items-center gap-4 text-[8vw] font-bold hover:opacity-90"
			>
				<PhoneCall
					class="h-auto w-[6vw] transition-transform group-hover:scale-110"
					color="white"
				/>
				{contactInfo.phone.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
			</a>
		</div>
	</section>

	<!-- testimonials -->
	<section class="flex w-full flex-col gap-12 pb-16 text-center lg:gap-16">
		<h1 class="text-center text-4xl font-semibold leading-10">Testimonials</h1>

		{#if reviews.length > 0}
			<div class="mb-4 flex flex-col items-center">
				<div class="text-2xl font-bold">{rating.toFixed(1)} ★</div>
				<div class="text-sm text-gray-600">Based on {userRatingCount} reviews</div>
			</div>

			<ScrollArea orientation="horizontal" class="w-full">
				<div class="flex flex-row gap-8 px-[30vw] pb-4">
					{#each reviews as review, idx (review.name)}
						<Card.Root
							class="min-h-[65vh] w-[80vw] rounded-[var(--radius)] bg-foreground md:w-[50vw] lg:w-[30vw]"
						>
							<Card.Header class="flex flex-row items-center gap-3">
								<div class="flex-shrink-0">
									{#if review.authorAttribution.photoUri}
										<img
											src={review.authorAttribution.photoUri}
											alt={review.authorAttribution.displayName}
											class="h-12 w-12 rounded-full"
										/>
									{:else}
										<div
											class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 text-white"
										>
											{review.authorAttribution.displayName.charAt(0)}
										</div>
									{/if}
								</div>
								<div class="flex flex-col text-left text-white">
									<div class="font-semibold">{review.authorAttribution.displayName}</div>
									<div class="text-xs opacity-75">{review.relativePublishTimeDescription}</div>
									<div class="mt-1 text-yellow-400">
										{'★'.repeat(review.rating)}<span class="text-gray-600"
											>{'★'.repeat(5 - review.rating)}</span
										>
									</div>
								</div>
							</Card.Header>
							<Card.Content>
								<div class="text-left font-medium text-[#FFFFFFCC] lg:text-xl">
									{review.text.text}
								</div>
							</Card.Content>
							<Card.Footer class="text-right">
								<a
									href={review.googleMapsUri}
									target="_blank"
									rel="noopener noreferrer"
									class="text-sm text-blue-400 hover:underline"
								>
									View on Google Maps
								</a>
							</Card.Footer>
						</Card.Root>
					{/each}
				</div>
			</ScrollArea>
		{:else}
			<p class="text-center text-gray-500">No reviews available at this time.</p>
		{/if}
	</section>
</main>

<style>
	.text-shadow {
		text-shadow: 2px 3px 9px rgba(0, 0, 0, 0.59);
	}
</style>
