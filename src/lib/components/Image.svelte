<script lang="ts">
	import { optimize } from '$lib/utils/image';

	interface Props {
		url: string;
		description: string;
		class?: string;
		size?: number[];
		quality?: number;
		fetchpriority?: "high" | "low";
		width?: string;
		height?: string;
	}

	let { url, description, class: className = "", size=[640, 828, 1200], quality = 90, fetchpriority = "low", width, height }: Props = $props();
</script>

<img
	{width}
	{height}
	class={className}
	srcset={optimize(url, size, quality)}
	alt={description}
	{fetchpriority}
/>
