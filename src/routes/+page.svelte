<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Accordion from '$lib/components/ui/accordion';
	import * as Carousel from '$lib/components/ui/carousel';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context';
	import Autoplay from 'embla-carousel-autoplay';
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
	import ReviewCard from '$lib/components/ReviewCard.svelte';

	import heroAddr from '$lib/icons/landingHero.webp?enhanced';
	import team from '$lib/icons/team.jpg?enhanced';
	import aboutbg from '$lib/icons/aboutbg.jpg?enhanced';
	import { serviceImages, serviceImagesDict } from '$lib/icons/services/service_images';
	import { base } from '$app/paths';
	// import { optimize } from '$lib/utils/image';

	let { data }: { data: PageData } = $props();

	$inspect(data);

	let reviews: Review[] = $state([]);
	let rating: number = $state(0);
	let userRatingCount: number = $state(0);
	let isLoadingReviews = $state(false);
	let reviewsLoaded = $state(false);

	let initScroll = $state(0);
	let servicesSection: HTMLElement;
	let reviewsSection: HTMLElement;

	let reviewCarouselAPI: CarouselAPI | undefined = $state();
	let currentReviewSlide = $state(0);

	// Get the base URL for absolute links
	const domain = $derived(`${page.url.protocol}//${page.url.host}`);

	onMount(() => {
		if (page.url.toString().includes('services')) {
			servicesSection.scrollIntoView({ behavior: 'smooth' });
		}

		// Create intersection observer for reviews section
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !reviewsLoaded && !isLoadingReviews) {
						loadReviews();
					}
				});
			},
			{ threshold: 0.1 } // Trigger when at least 10% of the element is visible
		);

		// Start observing the reviews section
		if (reviewsSection) {
			observer.observe(reviewsSection);
		}

		return () => {
			// Clean up observer on component unmount
			if (reviewsSection) {
				observer.unobserve(reviewsSection);
			}
		};
	});

	async function loadReviews() {
		isLoadingReviews = true;
		try {
			const response = await fetch('/api/reviews');
			if (!response.ok) {
				throw new Error('Failed to fetch reviews');
			}
			const data = await response.json();
			reviews = data.reviews || [];
			rating = data.rating || 0;
			userRatingCount = data.userRatingCount || 0;
			reviewsLoaded = true;
		} catch (error) {
			console.error('Error loading reviews:', error);
		} finally {
			isLoadingReviews = false;
		}
	}

	$effect(() => {
		if ($servicesPageNavigating || page.url.toString().includes('services')) {
			$servicesPageNavigating = false;
			console.log('services page navigating');
		}
	});

	$effect(() => {
		if (reviewCarouselAPI) {
			reviewCarouselAPI.on('select', () => {
				if (reviewCarouselAPI) currentReviewSlide = reviewCarouselAPI.selectedScrollSnap();
			});
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

	<!-- <link
		rel="preload"
		href={optimize('/assets/landing/1.webp', [640], 70)}
		as="image"
		media="(min-width: 481px) and (max-width: 820px)"
	/> -->
</svelte:head>

<svelte:window bind:scrollY={initScroll} />

{#snippet desktopServiceBlock(serviceKey: string, i: number)}
	{@const service = serviceData[serviceKey]}
	<div class="mb-6 flex flex-col gap-4 text-center">
		<h3 class="font-[Alatsi] text-3xl text-primary-foreground">{service.title}</h3>

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
				class="block"
				aria-label={`${service.title} service highlight - professional cleaning demonstration by Splash n' Shine`}
			>
				<!-- <Image
					url={`/assets/services/${serviceKey}/1.webp`}
					description={`${service.title} service highlight - professional cleaning demonstration by Splash n' Shine`}
					class="aspect-square h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-110"
					width="480"
					height="480"
					quality={50}
				/> -->
				<enhanced:img
					class="aspect-square h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-110"
					src={serviceImagesDict[serviceKey]}
					sizes="640px"
					alt={`${service.title} service highlight - professional cleaning demonstration by Splash n' Shine`}
				/> 
			</a>
		</button>

		<span class="font-[Cantarell] text-[#00000099]">{service.shortDescription}</span>
		<a
			href={`${domain}/services/${services[i]}`}
			onclick={(e) => {
				e.preventDefault();
				goto(`/services/${serviceKey}`);
			}}
			class="py-2 text-xs italic hover:underline"
			>Read more...</a
		>
	</div>
{/snippet}

{#snippet mobileServiceBlock(serviceKey: string, i: number)}
	{@const service = serviceData[serviceKey]}
	<Accordion.Root class="mb-2 w-[90vw]" value={!i ? [serviceKey] : []}>
		<Accordion.Item value={serviceKey}>
			<Accordion.Trigger class="group relative w-full rounded-lg bg-primary/10 px-4 py-3 text-left">
				<div class="flex w-full items-center justify-between">
					<h3 class="font-[Alatsi] text-xl text-primary-foreground">
						{@html service.title.split('|').join('<br>')}
					</h3>
				</div>
			</Accordion.Trigger>
			<Accordion.Content class="px-1 pt-2">
				<div class="flex flex-col gap-3">
					<div class="aspect-video h-48 max-h-48 w-full overflow-hidden rounded">
						<Image
							url={`/assets/services/${serviceKey}/1.webp`}
							description={`${service.title} service highlight - professional cleaning demonstration by Splash n' Shine`}
							class="h-full w-full object-cover"
							width="400"
							height="225"
							quality={40}
						/>
						<!-- <enhanced:img
							class="h-full w-full object-cover"
							src={serviceImagesDict[serviceKey]}
							sizes="640px"
							alt={`${service.title} service highlight - professional cleaning demonstration by Splash n' Shine`}
						/> -->
					</div>
					<p class="py-1 font-[Cantarell] text-sm text-[#00000099]">{service.shortDescription}</p>
					<div class="mt-1 flex justify-between gap-2">
						<Button
							variant="outline"
							size="sm"
							onclick={() => goto(`/services/${serviceKey}`)}
							class="min-h-[44px] min-w-[44px] flex-1"
						>
							<a
								href={`${domain}/services/${serviceKey}`}
								onclick={(e) => {
									e.preventDefault();
									goto(`/services/${serviceKey}`);
								}}
								class="flex h-full w-full items-center justify-center text-left"
							>
								<span class="block truncate">
									Learn More about {serviceKey
										.split('-')
										.map((v) => v.charAt(0).toUpperCase() + v.slice(1))
										.join(' ')}
								</span>
							</a>
						</Button>
						<Button
							size="sm"
							onclick={() => goto('/contact')}
							class="min-h-[44px] min-w-[44px] flex-none"
						>
							<a
								href={`${domain}/contact`}
								onclick={(e) => {
									e.preventDefault();
									goto('/contact');
								}}
								class="flex h-full w-full items-center justify-center"
							>
								Get Quote
							</a>
						</Button>
					</div>
				</div>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
{/snippet}

<main class="flex w-full flex-col items-center gap-16 pb-48 lg:gap-16">
	<section
		class="relative flex h-[85vh] w-full flex-row justify-evenly gap-0 overflow-hidden object-cover text-background"
	>
		<Image
			url="/assets/landing/1.webp"
			description="Professional exterior cleaning service in action - Splash n' Shine hero image"
			fetchpriority="high"
			class="h-full w-full object-cover"
			width="1920"
			height="1080"
			size={[640]}
			quality={80}
		/>

		<!-- <enhanced:img
			class="h-full object-cover"
			src={heroAddr}
			sizes="640px"
			alt="Professional exterior cleaning service in action - Splash n' Shine"
		/> -->

		<div class="absolute h-full w-full bg-black/30">&nbsp;</div>
		<div
			class="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center h-full mt-12"
		>
			<h1 class="text-shadow text-center text-[6vh] font-semibold md:text-[10vw]">
				{PUBLIC_COMPANY_NAME}
			</h1>
			<span
				class="flex flex-wrap justify-center text-center font-[Cantarell] text-lg font-semibold *:bg-primary/30 *:px-1 md:text-2xl"
			>
				<span>Professional</span> <span>Residential</span> <span>&</span> <span>Commercial</span>
				<span>Exterior</span> <span>Cleaning</span> <span>Near</span> <span>You</span>
			</span>
			<p class="max-w-[80vw] text-center font-[Cantarell] text-lg md:text-2xl">
				Expert Soft Wash & Pressure Washing in Vancouver & Surrey! We clean roofs, gutters, siding,
				windows & driveways
			</p>
		<Button
			onclick={() => goto('/contact')}
			aria-label="Get free quote"
			class="mt-12 text-lg"
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
		<button
			onclick={() => {}}
			class="flex flex-col items-center text-white mt-4"
			aria-label="Scroll down to view more content"
		>
			<span class="">Scroll Down</span>
			<CaretDown class="h-6 w-6 animate-bounce" />
		</button>
		</div>
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
				class="h-[60vh] w-full rounded-lg object-cover shadow-xl saturate-50"
				width="800"
				height="600"
			/>
			<!-- <enhanced:img
				src={team}
				sizes="640px"
				alt="Splash n' Shine professional cleaning team in Vancouver"
				class="h-[60vh] w-full rounded-lg object-cover shadow-xl saturate-50"
			/> -->
		</div>
		<div class="w-full space-y-6 lg:w-1/2">
			<h2 class="text-3xl font-semibold">Vancouver's Trusted Exterior Cleaning Experts</h2>
			<div class="h-1 w-20 rounded-full bg-primary"></div>
			<p class="text-muted-foreground">
				Welcome to Splash n' Shine, your premier exterior cleaning service provider in the Greater
				Vancouver area. With years of expertise in <a
					href="{domain}/services/pressure-washing"
					class="rounded bg-primary/30 px-1 text-black">pressure washing</a
				>
				and
				<a href="{domain}/services/pressure-washing" class="rounded bg-primary/30 px-1 text-black"
					>soft washing</a
				> solutions, we've built our reputation on delivering exceptional results for both residential
				and commercial properties.
			</p>
			<p class="text-muted-foreground">
				Serving <a href="{domain}/locations/vancouver" class="rounded bg-primary/30 px-1 text-black"
					>Vancouver</a
				>,
				<a href="{domain}/locations/surrey" class="rounded bg-primary/30 px-1 text-black">Surrey</a>, and
				the entire Lower Mainland, our professional team specializes in comprehensive exterior
				cleaning services, including
				<a href="{domain}/services/roof-cleaning" class="rounded bg-primary/30 px-1 text-black"
					>roof cleaning</a
				>,
				<a href="{domain}/services/gutter-cleaning" class="rounded bg-primary/30 px-1 text-black"
					>gutter maintenance</a
				>, and
				<a href="{domain}/services/window-washing" class="rounded bg-primary/30 px-1 text-black"
					>window washing</a
				>.
			</p>
			<p class="text-muted-foreground">
				What sets us apart is our commitment to using cutting-edge equipment and eco-friendly
				cleaning solutions, ensuring your property receives the care it deserves while protecting
				the environment.
			</p>
			<Button onclick={() => goto('/contact')} class="mt-4 min-h-[44px] min-w-[44px]">
				<a
					href={`${domain}/contact`}
					onclick={(e) => {
						e.preventDefault();
						goto('/contact');
					}}
					class="flex h-full w-full items-center justify-center"
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
		<h1 class="text-center text-5xl font-semibold leading-10">Services we offer</h1>

		<div class="grid w-full items-end gap-2 lg:grid-cols-3">
			{#each Object.keys(serviceData) as serviceKey, i}
				{#if !$isMobile}
					{@render desktopServiceBlock(serviceKey, i)}
				{:else}
					{@render mobileServiceBlock(serviceKey, i)}
				{/if}
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
				width="1920"
				height="1080"
			/>
			<!-- <enhanced:img
				src={aboutbg}
				sizes="640px"
				alt="Professional exterior cleaning background"
				class="h-full w-full object-cover"
			/> -->

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
	<section
		bind:this={reviewsSection}
		class="flex w-full flex-col gap-8 overflow-hidden pb-16 text-center lg:gap-10"
	>
		<h1 class="text-center text-4xl font-semibold leading-10">Testimonials</h1>

		{#if isLoadingReviews}
			<div class="py-12 text-center">
				<div
					class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"
				></div>
				<p class="mt-4 text-muted-foreground">Loading reviews...</p>
			</div>
		{:else if reviews.length > 0}
			<div class="flex flex-col items-center">
				<div class="text-2xl font-bold">{rating.toFixed(1)} ★</div>
				<div class="text-sm text-gray-600">Based on {userRatingCount} reviews</div>
			</div>

			<Carousel.Root
				plugins={[Autoplay({ delay: 6000 })]}
				class="w-full select-none px-4 md:px-8 lg:px-16"
				bind:api={reviewCarouselAPI}
				opts={{ align: 'start', containScroll: 'trimSnaps' }}
			>
				<div class="relative mb-4 flex items-center justify-center gap-2">
					<Carousel.Previous
						class="relative top-4 scale-[1.3] bg-primary text-primary-foreground"
					/>
					{#each Array($isMobile ? reviews.length : Math.ceil(reviews.length / 2)) as _, i}
						<button
							class="flex h-[12px] w-[12px] items-center justify-center rounded-full"
							aria-label={`Go to slide ${i + 1}`}
							onclick={() => reviewCarouselAPI?.scrollTo(i)}
						>
							<span
								class="block h-3 w-3 rounded-full {i === currentReviewSlide
									? 'bg-primary'
									: 'bg-gray-300'}"
							></span>
						</button>
					{/each}
					<Carousel.Next class="relative top-4 scale-[1.3] bg-primary text-primary-foreground" />
				</div>

				<Carousel.Content class="-ml-4 flex">
					{#each reviews as review, idx}
						<Carousel.Item
							class="min-w-0 basis-full pl-4 transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3"
							aria-label={`Review from ${review.authorAttribution.displayName}`}
						>
							<ReviewCard {review} />
						</Carousel.Item>
					{/each}
				</Carousel.Content>
			</Carousel.Root>
		{:else if reviewsLoaded}
			<p class="text-center text-gray-500">No reviews available at this time.</p>
		{:else}
			<p class="text-center text-gray-500">Reviews loading soon...</p>
		{/if}
	</section>
</main>

<style>
	.text-shadow {
		text-shadow: 2px 3px 9px rgba(0, 0, 0, 0.59);
	}
</style>
