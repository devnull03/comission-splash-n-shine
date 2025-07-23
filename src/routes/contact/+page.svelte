<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { fadeIn } from '$lib/utils/anims';
</script>

<svelte:head>
	<title>Contact Us | Splash n' Shine | Free Quotes</title>
	<meta
		name="description"
		content="Get a free quote for our professional exterior cleaning services. Our Vancouver team is ready to answer questions and provide personalized solutions."
	/>
	<meta name="keywords" content="exterior cleaning quote, free estimate, Vancouver power washing quote, house washing consultation, contact cleaning professionals, schedule power washing, book exterior cleaning, Surrey cleaning quote, pressure washing appointment" />
	<meta property="og:title" content="Contact Splash n' Shine | Free Quotes & Consultations" />
	<meta
		property="og:description"
		content="Get in touch for personalized exterior cleaning solutions and free estimates. Our Vancouver-based team is ready to transform your property."
	/>
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://www.splashnshine.ca/contact" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://www.splashnshine.ca/contact" />
</svelte:head>

<!-- Structured Data for Contact Page -->
{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ContactPage",
			"name": "Contact Us | Splash n' Shine | Free Quotes",
			"description": "Get a free quote for our professional exterior cleaning services. Our Vancouver team is ready to answer questions and provide personalized solutions.",
			"url": "https://www.splashnshine.ca/contact",
			"mainEntity": {
				"@type": "LocalBusiness",
				"name": "Splash n' Shine",
				"url": "https://www.splashnshine.ca",
				"contactPoint": {
					"@type": "ContactPoint",
					"contactType": "customer service",
					"availableLanguage": "English"
				},
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Vancouver",
					"addressRegion": "BC", 
					"addressCountry": "CA"
				}
			}
		}
	</script>
`}

<main use:fadeIn class="mt-24 flex w-full flex-col items-center pb-36 lg:mt-36">
	<section class="flex w-full flex-col items-center gap-6 px-4 py-8">
		<h1
			class="mx-auto max-w-4xl text-center text-2xl font-semibold leading-tight md:text-5xl lg:text-4xl"
		>
			Contact us | Get a Free Quote
		</h1>
		<div class="my-2 h-1 w-24 rounded-full bg-primary"></div>
		<p class="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
			We'd love to hear from you! Whether you have questions about our services, want to schedule a
			consultation, or just want to say hi, feel free to reach out.
		</p>
	</section>

	<section class="w-full">
		<ContactForm />
	</section>
</main>
