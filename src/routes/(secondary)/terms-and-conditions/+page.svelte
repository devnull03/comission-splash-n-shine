<script lang="ts">
	import Image from '$lib/components/Image.svelte';
</script>

<svelte:head>
	<title>Service Agreement & Terms | Splash n' Shine Exterior Cleaning</title>
	<meta
		name="description"
		content="Important information about our service agreements, booking policies, payments, and client responsibilities. Review Splash n' Shine's terms for our exterior cleaning services."
	/>
	<meta name="keywords" content="exterior cleaning terms, service agreement, booking policy, deposit requirements, cancellation policy, client responsibilities, payment terms, service guarantee, exterior cleaning liability, weather policy" />
	<meta property="og:title" content="Terms & Conditions for Splash n' Shine Services" />
	<meta
		property="og:description"
		content="Important information about booking, payments, and service expectations for our exterior cleaning services in Vancouver and the Lower Mainland."
	/>
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://www.splashnshine.ca/terms-and-conditions" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://www.splashnshine.ca/terms-and-conditions" />
</svelte:head>

<main class="mt-24 lg:mt-16">
	<!-- landing -->
	<section class="flex flex-col items-center justify-center gap-16 bg-black py-28 lg:flex-row">
		<div class="foot-logo aspect-square h-[25vh]">
			<Image
				url="/assets/logo.png"
				description="Luxury Floors Logo"
				class="h-auto w-full"
				size={[480]}
				width="480"
				quality={50}
			/>
		</div>

		<h1 class="text-center text-3xl font-semibold text-white lg:text-4xl">
			Terms and Conditions
		</h1>
	</section>

	<section class="p-10 font-[Cantarell] leading-10 lg:p-28">
		<p class="mb-6">
			Welcome to Splash N Shine! By accessing or using our services, you agree to abide by the
			following Terms and Conditions. Please read them carefully before proceeding.
		</p>

		<h3>1. Service Agreement</h3>
		<ol>
			<li>
				1.1. By booking our services, you enter into a binding agreement with Splash N Shine. All
				services will be rendered as per the details confirmed during the booking process.
			</li>
			<li>
				1.2. We reserve the right to modify or refuse services based on safety, accessibility, or
				weather conditions.
			</li>
		</ol>
		<br />

		<h3>2. Booking and Deposits</h3>
		<ol>
			<li>
				2.1. To secure your appointment, a $50 non-refundable deposit is required at the time of
				booking.
			</li>
			<li>2.2. The deposit will be applied toward the total cost of your service.</li>
			<li>
				2.3. Rescheduling is permitted up to 48 hours before your appointment. Cancellations or
				reschedules within 48 hours of the appointment will result in the forfeiture of the deposit.
			</li>
		</ol>
		<br />

		<h3>3. Pricing and Payment</h3>
		<ol>
			<li>
				3.1. All pricing is provided based on the information shared by the client, including total
				house square footage, roof dimensions, and specific service requirements.
			</li>
			<li>
				3.2. Final pricing may vary if the information provided is inaccurate or if additional
				services are requested on-site.
			</li>
			<li>
				3.3. Full payment is due upon completion of the service unless otherwise agreed upon in
				writing.
			</li>
			<li>
				3.4. Accepted payment methods include cash, credit/debit cards, or electronic transfers.
			</li>
		</ol>
		<br />

		<h3>4. Client Responsibilities</h3>
		<ol>
			<li>
				4.1. Clients must provide accurate information regarding their property dimensions and
				requirements.
			</li>
			<li>
				4.2. Clients are responsible for ensuring access to the property, including unlocking gates
				and removing obstacles that could hinder service.
			</li>
			<li>
				4.3. Splash N Shine is not liable for damage caused by pre-existing conditions, including
				loose fixtures, fragile materials, or deteriorating surfaces.
			</li>
		</ol>
		<br />

		<h3>5. Liability and Warranty</h3>
		<ol>
			<li>
				5.1. Splash N Shine will not be held responsible for damages caused by inaccurate
				information provided by the client or pre-existing structural issues.
			</li>
			<li>
				5.2. While we strive for exceptional service, minor aesthetic imperfections may occur and
				are not grounds for claims.
			</li>
			<li>
				5.3. In the rare case of damage caused directly by our team, please notify us within 24
				hours for resolution.
			</li>
		</ol>
		<br />

		<h3>6. Weather Policy</h3>
		<ol>
			<li>
				6.1. Weather conditions may impact our ability to perform services safely and effectively.
			</li>
			<li>
				6.2. In the event of inclement weather, appointments may be rescheduled at no additional
				cost to the client.
			</li>
		</ol>
		<br />

		<h3>7. Privacy Policy</h3>
		<ol>
			<li>
				7.1. We respect your privacy and are committed to protecting your personal information.
			</li>
			<li>
				7.2. Client information will only be used for service-related purposes and will not be
				shared with third parties without consent.
			</li>
		</ol>
		<br />

		<h3>8. Cancellation Policy</h3>
		<ol>
			<li>
				8.1. Clients must notify us at least 48 hours in advance for cancellations or rescheduling.
			</li>
			<li>8.2. Failure to provide adequate notice will result in the forfeiture of the deposit.</li>
			<li>
				8.3. In the rare case of a cancellation initiated by Splash N Shine, clients will receive a
				full refund of the deposit.
			</li>
		</ol>
		<br />

		<h3>9. Indemnification</h3>
		<ol>
			<li>
				9.1. Clients agree to indemnify and hold Splash N Shine harmless from any claims, damages,
				or expenses arising from the use of our services, except in cases of proven negligence by
				our team.
			</li>
		</ol>
		<br />

		<h3>10. Governing Law</h3>
		<ol>
			<li>
				10.1. These Terms and Conditions are governed by the laws of British Columbia, and any
				disputes will be resolved in accordance with local jurisdiction.
			</li>
		</ol>
	</section>
</main>

<style type="postcss">
	h3 {
		@apply text-2xl font-bold;
	}

	ol {
		@apply list-inside list-decimal pl-4;
	}
</style>
