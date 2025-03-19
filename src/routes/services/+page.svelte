<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { services, serviceData } from '$lib/data/services';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';

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
</script>

<main class="container mx-auto mt-24 px-4 py-10 lg:mt-16 lg:py-16">
	<h1 class="mb-8 text-center text-3xl font-bold lg:mb-12 lg:text-5xl">Our Services</h1>
	
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each services as serviceId}
			{#if serviceData[serviceId]}
				<Card class="h-full transition-all hover:shadow-lg">
					<CardHeader>
						<CardTitle>{serviceData[serviceId].title || formatServiceName(serviceId)}</CardTitle>
						<CardDescription>{serviceData[serviceId].shortDescription}</CardDescription>
					</CardHeader>
					<CardContent class="flex flex-col">
						<div class="flex-grow">
							<p class="line-clamp-3">{serviceData[serviceId].description.substring(0, 100).replace(/<[^>]*>/g, '')}...</p>
						</div>
						<div class="mt-4">
							<Button on:click={() => goto(`/services/${serviceId}`)} variant="default">Learn More</Button>
						</div>
					</CardContent>
				</Card>
			{/if}
		{/each}
	</div>
</main>
