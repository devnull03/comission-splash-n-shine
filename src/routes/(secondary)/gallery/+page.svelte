<script lang="ts">
	import { PUBLIC_COMPANY_NAME } from '$env/static/public';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { serviceData, services } from '$lib/data/services';
	import Image from '$lib/components/Image.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let dialogOpen = $state(false);
	let dialogImageSrc = $state('');

	let domain = $derived(`${page.url.protocol}//${page.url.host}`);

	let exPath = $state('cleaning-example');
	let landingPath = $state('landing');
</script>

<svelte:head>
	<title>Project Gallery | Splash n' Shine</title>
</svelte:head>

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Content>
		<ScrollArea class="max-h-[80vh]">
			<Image
				url={dialogImageSrc}
				description="High resolution before/after comparison of our professional cleaning work"
				class=""
			/>
		</ScrollArea>
	</Dialog.Content>
</Dialog.Root>

{#snippet sectionFigure(gridCtrl: string, section: string, idx: number, ext: string, name?: string)}
	<Tooltip.Root openDelay={300}>
		<Tooltip.Trigger
			onclick={() => {
				dialogOpen = true;
				dialogImageSrc = `/assets/${section}/${name || idx}.${ext}`;
			}}
			class="overflow-hidden object-cover {gridCtrl}"
		>
			<Image
				url={`/assets/${section}/${name || idx}.${ext}`}
				description={`${section.replaceAll('-', ' ')} portfolio image ${idx + 1} - ${idx % 2 === 0 ? 'before' : 'after'} cleaning transformation`}
				class="h-full w-full object-cover transition-all duration-500 ease-in-out hover:scale-110"
			/>
		</Tooltip.Trigger>

		<Tooltip.Content>
			<span>Click to expand</span>
		</Tooltip.Content>
	</Tooltip.Root>
{/snippet}

<main class="mt-28 flex h-full flex-col gap-12 p-[6vw] px-4 font-[Cantarell] lg:mt-16 lg:gap-16">
	<section class="flex w-full flex-col items-center gap-6 px-4 py-8">
		<h1
			class="mx-auto max-w-4xl text-center text-2xl font-semibold leading-tight md:text-5xl lg:text-4xl"
		>
			Projects we are proud of
		</h1>
		<div class="my-2 h-1 w-24 rounded-full bg-primary"></div>
		<p class="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
			Discover our portfolio of stunning transformations. From driveways to decks, each image
			showcases our commitment to excellence in pressure washing and professional cleaning services.
		</p>
	</section>

	<section class="">
		<h5 class="mb-4 flex items-baseline justify-between text-xl">Cleaning Examples</h5>

		<div class="grid grid-cols-7 grid-rows-4 gap-1 overflow-clip lg:gap-2">
			{@render sectionFigure('col-span-4', exPath, 1, 'jpg')}
			{@render sectionFigure('col-span-3', exPath, 2, 'jpg')}
			{@render sectionFigure('col-span-3', exPath, 3, 'jpg')}
			{@render sectionFigure('col-span-4', exPath, 4, 'jpg')}
			{@render sectionFigure('col-span-4', exPath, 6, 'jpg')}
			{@render sectionFigure('col-span-3', exPath, 5, 'jpg')}
			{@render sectionFigure('col-span-4', exPath, 7, 'jpg')}
			{@render sectionFigure('col-span-3', exPath, 9, 'jpg')}
		</div>
	</section>

	<section class="">
		<h5 class="mb-4 flex items-baseline justify-between text-xl">More team photos</h5>

		<div class="grid grid-cols-7 grid-rows-4 gap-1 overflow-clip lg:gap-2">
			{@render sectionFigure('col-span-4', landingPath, 1, 'webp')}
			{@render sectionFigure('col-span-3', landingPath, 2, 'jpg')}
			{@render sectionFigure('col-span-3', landingPath, 3, 'jpg')}
			{@render sectionFigure('col-span-4', landingPath, 4, 'jpg')}
			{@render sectionFigure('col-span-3', landingPath, 5, 'jpg')}
			{@render sectionFigure('col-span-4', landingPath, 7, 'jpg')}
			{@render sectionFigure('col-span-3', landingPath, 9, 'webp')}
			{@render sectionFigure('col-span-4', landingPath, 6, 'jpg', 'team')}
		</div>
	</section>

	{#each Object.entries(serviceData) as [section, data]}
		{@const sectionTitle = section.replaceAll('-', ' ')}
		<section class="">
			<h5 class="mb-4 flex items-baseline justify-between text-xl">
				{sectionTitle[0].toUpperCase() + sectionTitle.slice(1)}
				<a
					href="{domain}/services/{section}"
					onclick={(e) => {
						e.preventDefault();
						goto(`/services/${section}`);
					}}
					class="text-xs transition-all duration-300 ease-in-out hover:border-b hover:border-b-black"
					>Read more</a
				>
			</h5>

			<div
				class="grid grid-cols-7 grid-rows-[{(data.images.length - 1) /
					2}] gap-1 overflow-clip lg:gap-2"
			>
				{#each data.images as image, idx}
					{@const splitPath = image.split('.')}
					{@render sectionFigure(
						idx % 9 < 1
							? 'col-span-4'
							: idx % 9 < 2
								? 'col-span-3'
								: idx % 9 < 3
									? 'col-span-3'
									: idx % 9 < 4
										? 'col-span-4'
										: idx % 9 < 5
											? 'col-span-4'
											: idx % 9 < 6
												? 'col-span-3'
												: idx % 9 < 7
													? 'col-span-3'
													: idx % 9 < 8
														? 'col-span-4'
														: 'col-span-4',
						`services/${section}`,
						idx + 1,
						splitPath[splitPath.length - 1]
					)}
				{/each}
			</div>
		</section>
	{/each}
</main>
