<script lang="ts">
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';
	import { quoteDialogOpen } from '$lib/utils/stores';
	// Import enhanced logo image
	import logoAddr from '$lib/icons/logo.png?enhanced';

	const menuItems = [
		{ label: 'SERVICES', route: '/services' },
		{ label: 'OUR STORY', route: '/our-story' },
		{ label: 'TERMS AND CONDITIONS', route: '/terms-and-conditions' },
		{ label: 'PRIVACY POLICY', route: '/privacy-policy' },
	];
</script>

<footer class="flex h-[70vh] flex-col items-center gap-8 bg-foreground px-[6%] pb-4 pt-16 text-muted">
	<div
		class="flex w-full flex-row justify-between *:*:underline *:*:transition-all *:*:duration-300 *:*:ease-in-out hover:*:*:text-[#FFFFFF99]"
	>
		<div class="">
			<button onclick={() => ($quoteDialogOpen = true)} aria-label="Open quote request form"
				>Book A Call</button
			>
		</div>
		<div class="flex gap-2 lg:gap-8">
			<!-- TODO: add social links -->
			<a href="https://www.instagram.com/splashnshine.ca/">Instagram</a>
			<a href="https://www.tiktok.com/@splashnshine.ca?_t=ZM-8uAbspTLuI1&_r=1">TikTok</a>
			<a href="https://www.facebook.com/105341482673651">Facebook</a>
		</div>
	</div>

	<div class="aspect-square h-[40vh] overflow-hidden">
		 <!-- <Logo class="aspect-square h-[40vh] w-auto" /> -->
		 <!-- <Image url="/assets/logo.png" description="company logo" height="200px" width="200px" /> -->
		 <enhanced:img 
			src={logoAddr}
			sizes="400px"
			alt="company logo" 
			class="aspect-square h-[40vh] w-auto" 
		/>
	</div>

	<div
		class="flex w-full flex-wrap justify-evenly gap-4 *:transition-all *:duration-300 *:ease-in-out lg:justify-around"
	>
		{#each menuItems as item, i}
			<a
				href={item.route}
				onclick={(e) => {
					if (item.label === 'FREE QUOTES') {
						e.preventDefault();
						$quoteDialogOpen = true;
					}
				}}
				aria-label={item.label === 'FREE QUOTES'
					? 'Open quote request form'
					: `Go to ${item.label.toLowerCase()} page`}
				class="whitespace-normal break-keep font-[Cantarell] text-sm font-bold text-muted hover:text-[#FFFFFF99] lg:text-lg"
			>
				{item.label}
			</a>
		{/each}
	</div>

	<div class="w-full text-center font-[Cantarell] text-sm text-[#FFFFFF99]">
		<p>{PUBLIC_DOMAIN}</p>
		<p>
			Copyright © 2024 - 2028 {PUBLIC_COMPANY_NAME}. All rights reserved.
		</p>
	</div>
</footer>
