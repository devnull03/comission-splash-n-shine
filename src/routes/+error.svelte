<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	onMount(() => {
		// Check if it's a 404 error
		if ($page.status === 404) {
			// Redirect to the home page
			goto('/');
		}

		setTimeout(() => {
			goto('/');
		}, 3000);
	});
</script>

<div class="flex h-screen w-full flex-col items-center justify-center">
	<h1 class="text-4xl font-bold">Redirecting to home page...</h1>
	<p class="mt-4 text-lg text-muted-foreground">You'll be redirected momentarily.</p>
</div>
