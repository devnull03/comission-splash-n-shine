<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { scrollThreshold } from '$lib/utils/animations.store';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import * as Card from '$lib/components/ui/card';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { isMobile, servicesPageNavigating } from '$lib/utils/stores';
	import Image from '$lib/components/Image.svelte';
	import { whyPoints, knowMorePoints } from '$lib/data/landing';
	import { services } from '$lib/data/services';
	import type { Review } from '$lib/types/reviews';
	import type { PageData } from './$types';
	import { PUBLIC_COMPANY_NAME } from '$env/static/public';
	import { CaretDown, DoubleArrowDown } from 'svelte-radix';

	let { data }: { data: PageData } = $props();

	const reviews: Review[] = data?.reviews || [];
	const rating: number = data?.rating || 0;
	const userRatingCount: number = data?.userRatingCount || 0;

	let initScroll = $state(0);
	let servicesSection: HTMLElement;

	// let tweenInstance: gsap.core.Tween;
	// const handleScroll = () => {
	// 	if (initScroll < $scrollThreshold) {
	// 		tweenInstance.reverse();
	// 	} else {
	// 		tweenInstance.play();
	// 	}
	// };

	onMount(() => {
		// tweenInstance = gsap.to('#logo', {
		// 	duration: 0.3,

		// 	width: '4rem',
		// 	height: '4rem',
		// 	top: '1rem',
		// 	left: '6%',
		// 	zIndex: 50,

		// 	filter: 'invert(1)',
		// 	webkitFilter: 'invert(1)',

		// 	ease: 'power2.inOut',
		// 	paused: initScroll < $scrollThreshold
		// });

		if ($page.url.toString().includes('services')) {
			servicesSection.scrollIntoView({ behavior: 'smooth' });
			// handleScroll();
		}
	});

	$effect(() => {
		if ($servicesPageNavigating || $page.url.toString().includes('services')) {
			// handleScroll();
			$servicesPageNavigating = false;
			console.log('services page navigating');
		}
	});
</script>

<svelte:window bind:scrollY={initScroll} />

<main class="flex w-screen flex-col items-center gap-16 pb-48 lg:gap-8">
	<section class="relative flex h-[85vh] w-full flex-row justify-evenly gap-0 text-background">
		<Image
			url="/assets/landing-hero.webp"
			description="landing hero banner"
			class="w-full object-cover"
			fetchpriority="high"
		/>
		<div class="absolute h-full w-full bg-black/30">&nbsp;</div>
		<div
			class="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center"
		>
			<h1 class="text-shadow text-center text-[10vw] font-semibold">
				{PUBLIC_COMPANY_NAME}
			</h1>
			<p class="bg-primary/30 text-center font-[Cantarell] text-2xl font-semibold">
				Professional Residential & Commercial Exterior Cleaning Near You
			</p>
			<p class="max-w-[80vw] text-center font-[Cantarell] text-2xl">
				Expert Soft Wash & Pressure Washing in Vancouver & Surrey! We clean roofs, gutters, siding,
				windows & driveways
			</p>
		</div>
		<Button
			onclick={() => goto('/gallery')}
			aria-label="View portfolio"
			class="absolute bottom-[20%] uppercase">Portfolio</Button
		>
		<button onclick={() => {}} class="absolute bottom-10 flex flex-col items-center text-white">
			<span class="">Scroll Down</span>
			<CaretDown class="h-6 w-6 animate-bounce" />
		</button>
	</section>

	<!-- know more why -->
	<section class="flex w-full flex-col items-center px-[6%] pt-16 font-[Alatsi] lg:gap-12">
		<h1 class="text-2xl leading-10">Why Luxury Flooring ?</h1>

		<div class="grid w-full grid-flow-row-dense grid-cols-6 grid-rows-3 gap-10">
			<div class="col-span-6 flex w-full items-center justify-center">
				<div class="overflow-hidden rounded-3xl lg:w-1/2">
					<!-- <Image
						url="/assets/landing/tiles.jpeg"
						description=""
						class="aspect-video h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-110"
						size={[640]}
						quality={70}
					/> -->
				</div>
			</div>

			{#each whyPoints as point, i}
				<div
					class="flex flex-row gap-2 font-[Alatsi] {$isMobile
						? 'col-span-6'
						: i <= 2
							? 'col-span-2 items-center'
							: 'col-span-3 px-[15%]'}"
				>
					<span class="mt-5 w-1/4 text-[7rem] leading-[50%] lg:w-auto lg:text-[9rem]">{i + 1}</span>
					<span class="w-3/4 lg:w-auto">
						{point.title} <br />
						<span class="font-[Cantarell]">{point.desc}</span>
					</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- services -->
	<section
		class="flex scroll-mt-32 flex-col items-center gap-12 px-[6%] pb-16 lg:gap-16"
		id="services"
		bind:this={servicesSection}
	>
		<h1 class="text-center text-4xl font-semibold leading-10">Services</h1>

		<div class="grid w-full gap-10 lg:grid-cols-3">
			{#each knowMorePoints as point, i}
				<div class="flex flex-col items-center gap-4 text-center">
					<button
						onclick={() => goto(`/services/${services[i]}`)}
						class="aspect-square overflow-hidden rounded-3xl object-cover"
						aria-label={`Learn more about ${point.title}`}
					>
						<!-- <Image
							url={`/assets/landing/more${i + 1}.jpeg`}
							description=""
							class="aspect-square h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-110"
							size={[480]}
							width="480"
							quality={50}
						/> -->
					</button>

					<span class="font-[Alatsi] text-xl"> {point.title}</span>
					<span class="font-[Cantarell] text-[#00000099]">{point.desc}</span>
					<a
						href="/services/{services[i]}"
						class="border-b border-b-transparent text-xs italic transition-all duration-300 ease-in-out hover:border-b-black"
						>Read more...</a
					>
				</div>
			{/each}
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
						<Card.Root class="min-h-[65vh] w-[80vw] bg-foreground md:w-[50vw] lg:w-[30vw] rounded-sm">
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
