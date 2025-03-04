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

		<div class="text-center text-3xl font-semibold text-white lg:text-4xl">
			Terms and Conditions
		</div>
	</section>

	<section class="p-10 font-[Cantarell] leading-10 lg:p-28">
		<p class="mb-6">
			Welcome to Splash N Shine! By accessing or using our services, you agree to abide by the following
			Terms and Conditions. Please read them carefully before proceeding.
		</p>

		<h3>1. Service Agreement</h3>
		<ol>
			<li>
				By booking our services, you enter into a binding agreement with Splash N Shine. All services
				will be rendered as per the details confirmed during the booking process.
			</li>
			<li>
				We reserve the right to modify or refuse services based on safety, accessibility, or weather
				conditions.
			</li>
		</ol>
		<br />

		<h3>2. Booking and Deposits</h3>
		<ol>
			<li>To secure your appointment, a $50 non-refundable deposit is required at the time of booking.</li>
			<li>The deposit will be applied toward the total cost of your service.</li>
			<li>
				Rescheduling is permitted up to 48 hours before your appointment. Cancellations or reschedules
				within 48 hours of the appointment will result in the forfeiture of the deposit.
			</li>
		</ol>
		<br />

		<h3>3. Pricing and Payment</h3>
		<ol>
			<li>
				All pricing is provided based on the information shared by the client, including total house
				square footage, roof dimensions, and specific service requirements.
			</li>
			<li>
				Final pricing may vary if the information provided is inaccurate or if additional services are
				requested on-site.
			</li>
			<li>
				Full payment is due upon completion of the service unless otherwise agreed upon in writing.
			</li>
			<li>Accepted payment methods include cash, credit/debit cards, or electronic transfers.</li>
		</ol>
		<br />

		<h3>4. Client Responsibilities</h3>
		<ol>
			<li>
				Clients must provide accurate information regarding their property dimensions and requirements.
			</li>
			<li>
				Clients are responsible for ensuring access to the property, including unlocking gates and removing
				obstacles that could hinder service.
			</li>
			<li>
				Splash N Shine is not liable for damage caused by pre-existing conditions, including loose fixtures,
				fragile materials, or deteriorating surfaces.
			</li>
		</ol>
		<br />

		<h3>5. Liability and Warranty</h3>
		<ol>
			<li>
				Splash N Shine will not be held responsible for damages caused by inaccurate information provided
				by the client or pre-existing structural issues.
			</li>
			<li>
				While we strive for exceptional service, minor aesthetic imperfections may occur and are not grounds
				for claims.
			</li>
			<li>
				In the rare case of damage caused directly by our team, please notify us within 24 hours for resolution.
			</li>
		</ol>
		<br />

		<h3>6. Weather Policy</h3>
		<ol>
			<li>
				Weather conditions may impact our ability to perform services safely and effectively.
			</li>
			<li>
				In the event of inclement weather, appointments may be rescheduled at no additional cost to the
				client.
			</li>
		</ol>
		<br />

		<h3>7. Privacy Policy</h3>
		<ol>
			<li>We respect your privacy and are committed to protecting your personal information.</li>
			<li>
				Client information will only be used for service-related purposes and will not be shared with
				third parties without consent.
			</li>
		</ol>
		<br />

		<h3>8. Cancellation Policy</h3>
		<ol>
			<li>Clients must notify us at least 48 hours in advance for cancellations or rescheduling.</li>
			<li>Failure to provide adequate notice will result in the forfeiture of the deposit.</li>
			<li>
				In the rare case of a cancellation initiated by Splash N Shine, clients will receive a full refund
				of the deposit.
			</li>
		</ol>
		<br />

		<h3>9. Indemnification</h3>
		<ol>
			<li>
				Clients agree to indemnify and hold Splash N Shine harmless from any claims, damages, or expenses
				arising from the use of our services, except in cases of proven negligence by our team.
			</li>
		</ol>
		<br />

		<h3>10. Governing Law</h3>
		<ol>
			<li>
				These Terms and Conditions are governed by the laws of British Columbia, and any disputes will be
				resolved in accordance with local jurisdiction.
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
