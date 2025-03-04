<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { scrollThreshold } from '$lib/utils/animations.store';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import * as Card from '$lib/components/ui/card';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { isMobile, services, servicesPageNavigating } from '$lib/utils/stores.svelte';
	import Image from '$lib/components/Image.svelte';
	import Logo from '$lib/icons/Logo.svelte';
	import { whyPoints, knowMorePoints } from '$lib/data/landing';
	import type { Review } from '$lib/types/reviews';
	import type { PageData } from './$types';
	
	let { data }: {data: PageData} = $props();
	
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

<svelte:window bind:scrollY={initScroll} /> <!-- onscroll={handleScroll} -->

<main class="flex w-screen flex-col items-center gap-16 pb-48 lg:gap-8">
	<div id="logo" class="fixed top-[12vh] z-10 aspect-square h-[50vh] w-[50vh]">
		<Logo class="h-full w-full" width="50vh" height="50vh" />
	</div>

	<!-- landing screen -->
	<section class="relative flex h-[80vh] w-full flex-row justify-evenly gap-0">
		<!-- {#each Array(4) as _, i}
			<Image
				url={`/assets/landing/floor${i + 1}.png`}
				description=""
				class="h-[80vh] w-1/4 object-cover object-left"
				size={[480]}
				quality={i === 3 ? 50 : 80}
				fetchpriority="high"
			/>
		{/each} -->

		{#if initScroll > $scrollThreshold}
			<div
				transition:fade={{ duration: 300 }}
				class="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center"
			>
				<h1 class="text-shadow text-center text-[10vw] font-semibold text-white">Luxury Floors</h1>
				<p class="text-center font-[Cantarell] text-2xl text-white">
					Premium, seamless, and durable floors for modern homes and commercial spaces.
				</p>
			</div>
		{/if}
		<Button
			onclick={() => goto('/gallery')}
			variant="outline"
			aria-label="View portfolio"
			class="absolute bottom-[15%] mt-8 uppercase ">Portfolio</Button
		>
	</section>

	<!-- know more why -->
	<section class="flex w-full flex-col items-center px-[6%] pt-16 font-[Alatsi] lg:gap-12">
		<h1 class="text-2xl leading-10">Why Luxury Flooring ?</h1>

		<div class="grid w-full grid-flow-row-dense grid-cols-6 grid-rows-3 gap-10">
			<div class="col-span-6 flex w-full items-center justify-center">
				<div class="overflow-hidden rounded-3xl lg:w-1/2">
					<Image
						url="/assets/landing/tiles.jpeg"
						description=""
						class="aspect-video h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-110"
						size={[640]}
						quality={70}
					/>
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
						<Image
							url={`/assets/landing/more${i + 1}.jpeg`}
							description=""
							class="aspect-square h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-110"
							size={[480]}
							width="480"
							quality={50}
						/>
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
			<div class="flex flex-col items-center mb-4">
				<div class="text-2xl font-bold">{rating.toFixed(1)} ★</div>
				<div class="text-sm text-gray-600">Based on {userRatingCount} reviews</div>
			</div>
			
			<ScrollArea orientation="horizontal" class="w-full">
				<div class="flex flex-row gap-8 px-[30vw] pb-4">
					{#each reviews as review, idx (review.name)}
						<Card.Root class="min-h-[65vh] w-[80vw] bg-black lg:w-[30vw]">
							<Card.Header class="flex flex-row items-center gap-3">
								<div class="flex-shrink-0">
									{#if review.authorAttribution.photoUri}
										<img 
											src={review.authorAttribution.photoUri} 
											alt={review.authorAttribution.displayName}
											class="rounded-full w-12 h-12"
										/>
									{:else}
										<div class="rounded-full w-12 h-12 bg-gray-400 flex items-center justify-center text-white">
											{review.authorAttribution.displayName.charAt(0)}
										</div>
									{/if}
								</div>
								<div class="flex flex-col text-left text-white">
									<div class="font-semibold">{review.authorAttribution.displayName}</div>
									<div class="text-xs opacity-75">{review.relativePublishTimeDescription}</div>
									<div class="text-yellow-400 mt-1">{'★'.repeat(review.rating)}<span class="text-gray-600">{'★'.repeat(5 - review.rating)}</span></div>
								</div>
							</Card.Header>
							<Card.Content>
								<div class="text-left font-medium text-[#FFFFFFCC] lg:text-xl">
									{review.text.text}
								</div>
							</Card.Content>
							<Card.Footer class="text-right">
								<a href={review.googleMapsUri} target="_blank" rel="noopener noreferrer" class="text-sm text-blue-400 hover:underline">
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
