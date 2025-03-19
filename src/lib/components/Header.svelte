<script lang="ts">
	import Instagram from '../icons/Instagram.svelte';
	import PhoneCall from '../icons/PhoneCall.svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { onMount } from 'svelte';
	import { scrollThreshold } from '$lib/utils/animations.store';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Slider } from './ui/slider';
	import { Input } from './ui/input';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Image from '$lib/components/Image.svelte';
	import { isMobile, quoteDialogOpen, servicesPageNavigating } from '$lib/utils/stores';
	import { slide } from 'svelte/transition';
	import { toast } from 'svelte-sonner';
	import { PUBLIC_COMPANY_NAME, PUBLIC_FORM_KEY } from '$env/static/public';
	import { Cross2, HamburgerMenu } from 'svelte-radix';
	import { services, serviceData } from '$lib/data/services';
	import { locationsData } from '$lib/data/locations';
	// Import our custom dropdown components
	import Dropdown from '$lib/components/Dropdown.svelte';
	import DropdownItem from '$lib/components/DropdownItem.svelte';

	let initScroll = $state(0);
	let isLandingPage = $derived($page.route.id === '/');

	let quoteArea = $state([0]);
	let quoteEpoxyType = $state<'Metalic' | 'Flake'>('Metalic');
	let quoteTotal = $derived(() => {
		let epoxyMultiplier = quoteEpoxyType === 'Metalic' ? 10 : 5;
		return quoteArea[0] * epoxyMultiplier;
	});

	let mobileNavButtonWidth: number = $state(0);
	let mobileNavOpen = $state(false);
	let firstLoad = $state(true);

	$effect(() => {
		$isMobile = mobileNavButtonWidth !== 0;
	});

	let colorState = $derived(!$isMobile ? initScroll < $scrollThreshold && isLandingPage : false);

	onMount(() => {
		// setTimeout(() => {
		firstLoad = false;
		// }, 10);
	});
</script>

<svelte:window bind:scrollY={initScroll} />

<nav class="realtive">
	<!-- {#if !isLandingPage} -->
	<div class="fixed left-[6%] top-2 z-[55] aspect-square h-16 w-16">
		<!-- <Logo class="h-full w-full" /> -->
		<Image url="/assets/logo.png" description="company logo header" />
	</div>
	<!-- {/if} -->

	<div
		class="fixed top-0 z-50 flex h-20 w-full flex-row justify-between border-b px-[6%] {initScroll <
			$scrollThreshold && isLandingPage
			? 'border-transparent bg-transparent'
			: ' bg-secondary'} border-black transition-all duration-500 ease-in-out"
	>
		<button
			class="flex items-center pl-20 font-[Cantarell] text-xl lg:text-2xl {initScroll <
				$scrollThreshold && isLandingPage
				? 'text-transparent'
				: 'text-[#00000080]'}"
			id="header-logo-area"
			onclick={() => goto('/')}
			aria-label="Go to home page"
		>
			{PUBLIC_COMPANY_NAME}
		</button>

		<button
			class="absolute right-4 top-0 px-8 py-10 lg:hidden {initScroll < $scrollThreshold &&
			isLandingPage
				? 'text-white'
				: 'text-black'}"
			bind:clientWidth={mobileNavButtonWidth}
			onclick={() => (mobileNavOpen = !mobileNavOpen)}
			aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
		>
			{#if mobileNavOpen}
				<Cross2 />
			{:else}
				<HamburgerMenu />
			{/if}
		</button>

		{#if (!firstLoad && !$isMobile) || mobileNavOpen}
			<div
				in:slide
				class="absolute top-24 -mx-[6%] flex w-screen flex-col items-center justify-evenly gap-8 border-b border-black bg-white py-4 lg:relative lg:top-0 lg:mx-0 lg:w-auto lg:flex-row lg:border-transparent lg:bg-transparent lg:py-0"
			>
				<Dropdown
					label="Services"
					buttonClass={colorState ? 'text-white' : 'text-black'}
					title="Our Services"
					menuClass="w-56"
				>
					{#each services as service}
						<DropdownItem
							onclick={() => {
								goto(`/services/${service}`);
								$servicesPageNavigating = true;
							}}
						>
							 {service.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
						</DropdownItem>
					{/each}
				</Dropdown>

				<Dropdown
					label="Locations"
					buttonClass={colorState ? 'text-white' : 'text-black'}
					title="Service Areas"
					menuClass="w-56"
				>
					<DropdownItem
						onclick={() => {
							goto('/locations');
							$servicesPageNavigating = true;
						}}
						class="border-b"
					>
						All Locations
					</DropdownItem>
					{#each Object.entries(locationsData) as [slug, data]}
						<DropdownItem
							onclick={() => {
								goto(`/locations/${slug}`);
								$servicesPageNavigating = true;
							}}
						>
							{data.name}
						</DropdownItem>
					{/each}
				</Dropdown>

				<a
					href="https://www.instagram.com/luxuryfloors.ca/"
					aria-label="Go to instagram page"
					class="text-xs font-semibold uppercase"
				>
					<Instagram color={colorState ? 'white' : 'black'} />
				</a>
				<a
					href="tel:7783085911"
					aria-label="Call phone number"
					class="text-xs font-semibold uppercase"
				>
					<PhoneCall color={colorState ? 'white' : 'black'} />
				</a>

				<Button
					onclick={() => goto('/contact')}
					variant={colorState ? 'secondary' : 'default'}
					aria-label="Open quote request form">Get Free Quote</Button
				>
			</div>
		{/if}
	</div>
</nav>
