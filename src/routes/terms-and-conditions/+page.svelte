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
		<h3>Warranty Coverage</h3>
		This warranty covers the following:
		<ol>
			<li>
				Delamination: Separation or lifting of the epoxy coating due to application errors or
				material defects.
			</li>
			<li>
				Peeling and Cracking: Issues caused by normal wear and tear under standard usage conditions.
			</li>
			<li>
				UV Resistance: Fading or discoloration caused by UV exposure, applicable only to UV-stable
				coatings.
			</li>
		</ol>
		<br />

		<h3>Exclusions from Warranty</h3>
		This warranty does not cover:
		<ol>
			<li>
				Improper Maintenance: Damage resulting from neglect, misuse, or failure to follow
				maintenance guidelines.
			</li>
			<li>
				Substrate Movement: Cracks or damage caused by structural movement, settling, or shifting of
				the underlying surface.
			</li>
			<li>
				Moisture Issues: Damage caused by excessive moisture, leaks, or water seepage from the
				substrate.
			</li>
			<li>
				Chemical Exposure: Damage caused by exposure to harsh chemicals, acids, or solvents not
				approved for use on epoxy surfaces.
			</li>
			<li>
				Third-Party Repairs or Modifications: Any issues arising from repairs or alterations made by
				non-approved contractors.
			</li>
			<li>
				Heavy Impact Damage: Chips, dents, or cracks caused by dropping heavy objects or extreme
				impacts.
			</li>
			<li>
				Natural Wear: Minor scratches, scuffs, or surface wear that do not affect the floor's
				performance.
			</li>
		</ol>
		<br />

		<h3>Warranty Conditions</h3>
		To maintain warranty validity, the following conditions must be met:
		<ol>
			<li>The flooring must be installed by Luxury Floors or its authorized contractors.</li>
			<li>The customer must follow all provided maintenance and cleaning instructions.</li>
			<li>The warranty is non-transferable and applies only to the original purchaser.</li>
			<li>
				The warranty claim must be submitted with proof of purchase and detailed photographs of the
				damage.
			</li>
		</ol>
		<br />
		<h3>Warranty Claims</h3>
		To file a warranty claim:
		<ol>
			<li>
				Contact us at info@luxuryfloors.ca or call [Insert Phone Number]. <!-- TODO: Add contact information -->
			</li>
			<li>Provide proof of purchase, the installation date, and details of the issue.</li>
			<li>
				Our team will inspect the floor and determine if the damage qualifies for warranty coverage.
			</li>
		</ol>
		If the claim is approved, Luxury Floors will repair or replace the affected area at no additional
		cost to the customer. Limitations of Liability<br />
		This warranty is limited to the repair or replacement of the epoxy flooring and does not cover consequential
		or incidental damages, including loss of use or income.
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
