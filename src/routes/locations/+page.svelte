<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { locationsData } from '$lib/data/locations';
	import { DrawingPin, Mobile, ArrowRight } from 'svelte-radix';

	const locations = Object.entries(locationsData);
</script>

<main class="mt-24 p-10 lg:mt-16 lg:p-32">
	<section class="mb-16">
		<h1 class="mb-8 text-center text-4xl font-bold">Our Locations</h1>
		<p class="mx-auto mb-12 max-w-3xl text-center text-lg">
			Splash n' Shine provides top-quality concrete coatings and pressure washing services across
			multiple locations. Find your nearest branch below.
		</p>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each locations as [id, location]}
				<div class="flex flex-col rounded-lg border bg-white p-6 shadow-lg transition-all hover:shadow-xl">
					<h2 class="mb-4 text-2xl font-bold">{location.name}</h2>
					
					<div class="mb-4 flex flex-1 flex-col gap-3">
						<div class="flex items-start gap-2">
							<DrawingPin class="mt-1 shrink-0 text-primary" size="18" />
							<p>{location.address}</p>
						</div>
						
						<div class="flex items-center gap-2">
							<Mobile class="shrink-0 text-primary" size="18" />
							<a href="tel:{location.phone.replace(/[^\d+]/g, '')}" class="hover:text-primary">
								{location.phone}
							</a>
						</div>
					</div>
					
					<div class="mt-4">
						<Button href="/locations/{id}" class="flex w-full items-center justify-center gap-2">
							View Details <ArrowRight size="16" />
						</Button>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Call to action -->
	<section class="mb-16 rounded-lg bg-primary p-8 text-white shadow-lg">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-4 text-3xl font-bold">Don't see your location?</h2>
			<p class="mb-6 text-lg">
				We're constantly expanding our service area. Contact us to inquire about services in your area.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button href="/contact" variant="secondary" class="font-semibold text-primary">
					Contact Us
				</Button>
				<Button href="tel:+18005551234" variant="outline" class="border-white text-white hover:bg-white/10">
					Call (800) 555-1234
				</Button>
			</div>
		</div>
	</section>
</main>
