<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { services, serviceData } from '$lib/data/services';
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import Image from '$lib/components/Image.svelte';
	import { page } from '$app/state';
	import { serviceImagesDict } from '$lib/icons/services/service_images';

	onMount(() => {
		// Check if we're on the base services page without a specific service
		// if (window.location.pathname === '/services') {
		//	// Instead of redirecting immediately, show a service list
		// 	return;
		// }
	});

	const formatServiceName = (id: string) => {
		return id
			.split('-')
			.map((x) => x[0].toUpperCase() + x.slice(1))
			.join(' ');
	};

	const domain = $derived(`${page.url.protocol}//${page.url.host}`);
</script>

<svelte:head>
	<title>Exterior Cleaning Services | Splash n' Shine</title>
	<meta
		name="description"
		content="Professional house washing, roof cleaning, gutter maintenance, window cleaning, and more. Serving Vancouver and surrounding communities."
	/>
	<meta
		name="keywords"
		content="exterior cleaning services, house washing Vancouver, roof cleaning Surrey, gutter maintenance, window cleaning services, driveway power washing, deck restoration, commercial cleaning, strata cleaning, environmental cleaning solutions"
	/>
	<meta property="og:title" content="Complete Exterior Cleaning Services | Splash n' Shine" />
	<meta
		property="og:description"
		content="Explore our full range of professional power washing and exterior cleaning services. Exceptional results for homes and businesses across the Lower Mainland."
	/>
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://www.splashnshine.ca/services" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://www.splashnshine.ca/services" />
</svelte:head>

<main class="mt-24 p-10 lg:mt-16 lg:p-32">
	<section class="mb-16">
		<h1 class="mb-8 text-center text-4xl font-bold">Our Services</h1>
		<p class="mx-auto mb-12 max-w-3xl text-center text-lg">
			Splash n' Shine offers professional powerwashing and exterior cleaning services in Vancouver,
			Surrey, and surrounding areas. Our expert team delivers exceptional results for residential
			and commercial properties.
		</p>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each services as serviceId}
				{#if serviceData[serviceId]}
					<div class="flex flex-col items-center gap-4 text-center">
						<div class="aspect-square w-full overflow-hidden rounded">
							<!-- <Image
								url={`/assets/services/${serviceId}/1.webp`}
								description={serviceData[serviceId].title || formatServiceName(serviceId)}
								class="aspect-square h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
								size={[480]}
								width="480"
								quality={75}
							/> -->
							<enhanced:img
								class="aspect-square h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
								src={serviceImagesDict[serviceId]}
								sizes="640px"
								alt={`${serviceData[serviceId].title} service highlight - professional cleaning demonstration by Splash n' Shine`}
							/>
						</div>

						<span class="font-[Alatsi] text-xl"
							>{serviceData[serviceId].title || formatServiceName(serviceId)}</span
						>
						<span class="font-[Cantarell] text-[#00000099]"
							>{serviceData[serviceId].shortDescription}</span
						>
						<div class="mt-2">
							<p class="mb-4 line-clamp-3 text-sm text-muted-foreground">
								{serviceData[serviceId].description.substring(0, 100).replace(/<[^>]*>/g, '')}...
							</p>
							<Button on:click={() => goto(`/services/${serviceId}`)} variant="default">
								<a
									href={`${domain}/services/${serviceId}`}
									onclick={(e) => {
										e.preventDefault();
										goto(`/services/${serviceId}`);
									}}
								>
									Learn More
								</a>
							</Button>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</section>

	<!-- Call to action -->
	<section class="mb-16 rounded-lg bg-primary p-8 shadow-lg">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-4 text-3xl font-bold">Ready to transform your property?</h2>
			<p class="mb-6 text-lg">
				Contact us today for a free quote on any of our professional cleaning services.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button href={`${domain}/contact`} variant="secondary">Get a Free Quote</Button>
				<Button href={`${domain}/locations`} variant="secondary">View Service Areas</Button>
			</div>
		</div>
	</section>
</main>
