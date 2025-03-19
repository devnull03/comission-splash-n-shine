<script lang="ts">
	import { enhance } from '$app/forms';
	import * as Form from '$lib/components/ui/form';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Alert, AlertDescription } from '$lib/components/ui/alert';

	//     export let form;
	let isSubmitting = false;
</script>

<svelte:head>
	<title>Contact Us | Splash 'n Shine</title>
	<meta
		name="description"
		content="Get in touch with Splash 'n Shine. We'd love to hear from you!"
	/>

	<script src="https://link.msgsndr.com/js/form_embed.js"></script>
</svelte:head>

<main class="mt-24 flex w-screen flex-col items-center pb-36 lg:mt-36">
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
		<iframe
			src="https://api.leadconnectorhq.com/widget/form/iqHTKrAbOOGjMJuQrvYW"
			style="width:100%;height:100%;border:none;border-radius:3px"
			id="inline-iqHTKrAbOOGjMJuQrvYW"
			data-layout={"{'id':'INLINE'}"}
			data-trigger-type="alwaysShow"
			data-trigger-value=""
			data-activation-type="alwaysActivated"
			data-activation-value=""
			data-deactivation-type="neverDeactivate"
			data-deactivation-value=""
			data-form-name="Website Form"
			data-height="1179"
			data-layout-iframe-id="inline-iqHTKrAbOOGjMJuQrvYW"
			data-form-id="iqHTKrAbOOGjMJuQrvYW"
			title="Website Form"
		>
		</iframe>
	</section>
</main>
