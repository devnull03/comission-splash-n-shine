<script lang="ts">
	import '../app.css';
	import { fade, slide } from 'svelte/transition';
	import { PUBLIC_COMPANY_NAME } from '$env/static/public';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { CaretUp } from 'svelte-radix';
	import FloatingShare from '$lib/components/FloatingShare.svelte';
	import { isMobile } from '$lib/utils/stores';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let scrollY = $state(0);
	let { children }: Props = $props();

	const metadata = {
		title: 'Splash n Shine',
		description:
			'Expert Soft Wash & Pressure Washing in Vancouver & Surrey! We clean roofs, gutters, siding, windows & driveways ',
		keywords:
			'pressure washing, soft wash, roof cleaning, gutter cleaning, siding cleaning, window cleaning, driveway cleaning, Vancouver, Surrey, British Columbia, exterior cleaning, house washing, power washing, professional cleaning, residential cleaning, commercial cleaning',
		url: 'https://splashnshine.ca/'
	};
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
	<link rel="manifest" href="/favicon/manifest.json" />
	<meta name="msapplication-TileColor" content="#ffffff" />
	<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
	<meta name="theme-color" content="#e0b23d" />

	<meta name="msvalidate.01" content="B6452AF26DC66424390A9A5C30B9741C" />
	<meta name="google-site-verification" content="DXvftpzIopYp2VylaucB6Z-fTwgSBnj2isOeYsu29Yo" />

	<!-- microsoft clarity -->
	<script type="text/javascript">
		(function (c, l, a, r, i, t, y) {
			c[a] =
				c[a] ||
				function () {
					(c[a].q = c[a].q || []).push(arguments);
				};
			t = l.createElement(r);
			t.async = 1;
			t.src = 'https://www.clarity.ms/tag/' + i;
			y = l.getElementsByTagName(r)[0];
			y.parentNode.insertBefore(t, y);
		})(window, document, 'clarity', 'script', 'sizv7mjncs');
	</script>

	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-S6214ND4P9"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-S6214ND4P9');
	</script>

</svelte:head>

<svelte:window bind:scrollY />

<Toaster />

{#if scrollY}
	<div transition:slide={{ axis: 'x', duration: 500 }}>
		<FloatingShare mobile={$isMobile} />
	</div>
{/if}

<div class="flex h-screen flex-col justify-between">
	<Header />
	<main class="">
		{@render children?.()}
	</main>
	<Footer />
</div>

{#if scrollY !== 0}
	<button
		transition:fade
		class="group fixed bottom-4 right-4 z-[999] rounded-full bg-primary/90 object-cover p-4 shadow-lg transition-all duration-500 hover:-translate-y-1"
		aria-label="Scroll to top"
		onclick={() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}}
	>
		<CaretUp class="scale-125 text-foreground transition-all duration-500 group-hover:scale-110" />
	</button>
{/if}

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
<link
	href="https://fonts.googleapis.com/css2?family=Alatsi&family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&display=swap"
	rel="stylesheet"
/>
