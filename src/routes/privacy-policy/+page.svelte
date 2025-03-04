<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Logo from '$lib/icons/Logo.svelte';
</script>

<main class="mt-24 lg:mt-16">
	<!-- landing -->
	<section class="flex flex-col items-center justify-center gap-16 bg-black py-28 lg:flex-row">
		<div class="foot-logo aspect-square h-[25vh]">
			<Logo class="h-auto w-full" />
		</div>

		<div class="text-center text-3xl font-semibold text-white lg:text-4xl">Privacy Policy</div>
	</section>

	<section class="p-10 font-[Cantarell] leading-10 lg:p-28">
		<h3>1. Introduction</h3>
		<p class="mb-6">
			Welcome to Splash N Shine ("Company," "we," "our," or "us"). Your privacy is important to us.
			This Privacy Policy explains how we collect, use, disclose, and safeguard your information
			when you visit our website, book services, or interact with our social media and advertising
			campaigns.
		</p>

		<h3>2. Information We Collect</h3>
		<p class="mb-4">We may collect the following types of personal information:</p>
		<ul class="mb-6 list-disc pl-8">
			<li>Contact Information: Name, phone number, email address, and location.</li>
			<li>Service Requests: Details of requested services, property type, and preferences.</li>
			<li>
				Payment Information: Billing details for deposits and service payments (processed securely
				through third-party payment processors).
			</li>
			<li>Technical Data: IP address, device type, and browsing activity on our website.</li>
			<li>Social Media Interactions: Engagement on TikTok, Instagram, Facebook, and Google ads.</li>
		</ul>

		<h3>3. How We Use Your Information</h3>
		<p class="mb-4">We use your information to:</p>
		<ul class="mb-6 list-disc pl-8">
			<li>Provide and schedule cleaning services.</li>
			<li>Process payments and send invoices.</li>
			<li>Respond to inquiries and customer support requests.</li>
			<li>Improve our website and marketing efforts.</li>
			<li>Send promotional offers and service updates (with opt-out options).</li>
			<li>Ensure compliance with legal obligations.</li>
		</ul>

		<h3>4. How We Share Your Information</h3>
		<p class="mb-4">We do not sell or trade your personal data. However, we may share it with:</p>
		<ul class="mb-6 list-disc pl-8">
			<li>
				Service Providers: Third-party tools for payments, scheduling, and customer management.
			</li>
			<li>Marketing Platforms: Google, TikTok, and Facebook for targeted ads.</li>
			<li>Legal Compliance: If required by law or to protect our rights.</li>
		</ul>

		<h3>5. Data Security</h3>
		<p class="mb-6">
			We implement industry-standard security measures to protect your data. However, no method is
			100% secure, and we cannot guarantee absolute security.
		</p>

		<h3>6. Your Rights & Choices</h3>
		<ul class="mb-4 list-disc pl-8">
			<li>Access & Correction: Request a copy or correction of your personal data.</li>
			<li>Opt-Out: Unsubscribe from marketing emails and promotional messages.</li>
			<li>Delete Data: Request deletion of your data unless required for legal purposes.</li>
		</ul>
		<p class="mb-6">To exercise your rights, contact us at info@splashnshine.ca or 778-804-5911.</p>

		<h3>7. Cookies & Tracking Technologies</h3>
		<p class="mb-6">
			We use cookies and analytics tools to enhance your browsing experience. You can manage cookie
			preferences in your browser settings.
		</p>

		<h3>8. Changes to This Policy</h3>
		<p class="mb-6">
			We may update this Privacy Policy from time to time. Changes will be posted on this page with
			the updated date.
		</p>

		<h3>9. Contact Us</h3>
		<p class="mb-4">For questions or concerns about this Privacy Policy, please contact us at:</p>
		<p class="mb-2">Splash N Shine</p>
		<p class="mb-2">📞 Phone: <a href="tel:7788045911" class="underline hover:text-blue-600">778-804-5911</a></p>
		<p class="mb-2">📧 Email: <a href="mailto:info@splashnshine.ca" class="underline hover:text-blue-600">info@splashnshine.ca</a></p>
		<p class="mb-6">🌐 Website: <a href="https://www.splashnshine.ca" class="underline hover:text-blue-600">www.splashnshine.ca</a></p>

		<p class="font-bold">By using our services, you agree to this Privacy Policy.</p>
	</section>
</main>

<style type="postcss">
	h3 {
		@apply text-2xl font-bold;
	}

	ul {
		@apply list-inside;
	}
</style>
