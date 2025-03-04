<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { serviceData } from '$lib/stores.svelte';
	import * as Carousel from '$lib/components/ui/carousel';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context';
	import { Button } from '$lib/components/ui/button';
	import Autoplay from 'embla-carousel-autoplay';
	import { slide } from 'svelte/transition';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import Image from '$lib/components/Image.svelte';

	let selectedServiceData = $derived(serviceData[$page.params.id]);

	let carouselAPI: CarouselAPI | undefined = $state();
	let currentSlide = $state(0);
	let carouselCaptions = [
		'Vibrant Colors',
		'Infinite Creation',
		'Easy to Install',
		'UV Stable',
		'2-Day Application',
		'Can Be Polished'
	];

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
</script>

<main class="mt-24 *:p-10 lg:mt-16 *:lg:p-32">
	<!-- Carousel -->
	<section
		class="flex flex-col overflow-hidden bg-black text-center text-2xl text-white lg:text-4xl"
	>
		<h1 class="mb-8 font-[Cantarell] lg:mb-16">
			Why {$page.params.id
				.split('-')
				.map((x) => x[0].toUpperCase() + x.slice(1))
				.join(' ')}?
		</h1>

		<Carousel.Root
			plugins={[Autoplay({ delay: 2000 })]}
			class="-mx-10 mb-8 select-none lg:-mx-32"
			bind:api={carouselAPI}
		>
			<Carousel.Content class="ml-[14vw] max-w-[75vw] pr-1 lg:ml-[25vw] lg:max-w-[50vw]">
				{#each Array(6) as _, idx}
					<Carousel.Item
						onclick={() => carouselAPI?.scrollTo(idx)}
						class="-ml-6 cursor-pointer pl-1 first:ml-auto {currentSlide === idx ||
							'scale-75 lg:scale-90'} transition-all duration-300 ease-in-out"
						aria-label={`View slide ${idx + 1}`}
					>
						<Card.Root class="overflow-hidden !border-black">
							<Card.Content class="lg:aspect-16/9 aspect-9/16 overflow-hidden object-cover p-0">
								<Image 
									url={`/assets/${$page.params.id}/carousel/${idx}.jpg`} 
									description="" 
									class="lg:aspect-16/9 aspect-9/16 h-[50vh] max-h-[50vh] w-full scale-125 rounded-2xl object-cover object-center lg:h-auto" 
								/>
							</Card.Content>
						</Card.Root>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>

		{#key currentSlide}
			<h2 transition:slide={{ duration: 1000 }} class="font-[Alatsi] text-2xl font-semibold">
				{carouselCaptions[currentSlide]}
			</h2>
		{/key}
	</section>

	<!-- Applications -->
	<section class="font-[Cantarell]">
		<h3 class="mb-16 text-center text-2xl font-semibold">Applications</h3>
		<div class="grid w-full grid-cols-3 grid-rows-2 gap-4 lg:gap-0">
			{#each selectedServiceData.applications as application, idx}
				<figure class="flex aspect-square flex-col items-center justify-center gap-4">
					<Image 
						url={`/assets/${$page.params.id}/applications/${idx}.png`} 
						description="" 
						class="w-[10vw]" 
					/>
					<figcaption class="text-center text-xs">{application}</figcaption>
				</figure>
			{/each}
		</div>
	</section>

	<!-- Description -->
	<section class="bg-black font-[Cantarell] leading-8 text-white">
		{@html selectedServiceData.description}
	</section>

	<!-- Materials -->
	<section>
		<Dialog.Root>
			<Dialog.Trigger>
				<Image 
					url={`/assets/${$page.params.id}/pallet/mats.png`} 
					description="" 
					class="mb-4" 
				/>
			</Dialog.Trigger>

			<Dialog.Content>
				<ScrollArea class="max-h-[80vh]">
					<Image 
						url={`/assets/${$page.params.id}/pallet/mats.png`} 
						description="" 
						class="" 
					/>
				</ScrollArea>
			</Dialog.Content>
		</Dialog.Root>

		<div class="flex flex-col items-center gap-6 rounded-3xl bg-black p-10 lg:py-20">
			<div class="mx-auto flex flex-col gap-6 lg:flex-row">
				<div
					class="flex flex-row-reverse justify-center gap-0 *:-mr-[10%] lg:w-1/2 lg:justify-start"
				>
					{#each Array(4) as _, idx}
						<Image 
							url={`/assets/${$page.params.id}/pallet/${idx}.png`} 
							description="" 
							class="aspect-square w-1/3 first:mr-auto lg:w-1/4 first:lg:mr-0" 
						/>
					{/each}
				</div>

				<div class="pl-4 font-semibold text-white lg:pl-8 lg:text-2xl">
					<ul class="flex h-full list-inside list-disc flex-col justify-center">
						{#each selectedServiceData.colorChartPoints as point}
							<li>{point}</li>
						{/each}
					</ul>
				</div>
			</div>

			<Button
				download="{$page.params.id}_color_scheme.pdf"
				target="_blank"
				href="/assets/{$page.params.id}/pallet/color_scheme.pdf"
				variant="secondary"
				aria-label="Download color chart PDF"
				class="w-min">Download Color Chart</Button
			>
		</div>
	</section>
</main>
