<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { Review } from '$lib/types/reviews';

	export let review: Review;
</script>

<Card.Root class="h-full w-full bg-foreground">
	<Card.Header class="flex flex-row items-center gap-3">
		<div class="flex-shrink-0">
			{#if review.authorAttribution.photoUri}
				<img
					src={review.authorAttribution.photoUri}
					alt={review.authorAttribution.displayName}
					class="h-12 w-12 rounded-full"
				/>
			{:else}
				<div class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 text-white">
					{review.authorAttribution.displayName.charAt(0)}
				</div>
			{/if}
		</div>
		<div class="flex flex-col text-left text-white">
			<div class="font-semibold overflow-clip whitespace-nowrap">{review.authorAttribution.displayName}</div>
			<div class="text-xs opacity-75">{review.relativePublishTimeDescription}</div>
			<div class="mt-1 text-yellow-400">
				{'★'.repeat(review.rating)}<span class="text-gray-600">{'★'.repeat(5 - review.rating)}</span
				>
			</div>
			<a
				href={review.googleMapsUri}
				target="_blank"
				rel="noopener noreferrer"
				class="-mb-1 text-sm text-blue-400 hover:underline"
			>
				View on Google Maps
			</a>
		</div>
	</Card.Header>
	<Card.Content class="overflow-y-auto pb-16">
		<div class="text-left font-medium text-[#FFFFFFCC] lg:text-lg">
			{review.text.text}
		</div>
	</Card.Content>
</Card.Root>
