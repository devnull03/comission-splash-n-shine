<script lang="ts">
	import { goto } from '$app/navigation';
	
	interface Props {
		href: string;
		children?: any;
		class?: string;
		target?: string;
		rel?: string;
		[key: string]: any;
	}
	
	let { href, children, class: className, target, rel, ...props }: Props = $props();
	
	const handleClick = (e: MouseEvent) => {
		// Only prevent default for internal links
		// External links, anchors with target="_blank", or modifier keys should use default behavior
		if (
			(href.startsWith('/') || href.startsWith('#')) && 
			!target && 
			!e.ctrlKey && 
			!e.metaKey && 
			!e.shiftKey && 
			e.button === 0
		) {
			e.preventDefault();
			goto(href);
		}
	};
</script>

<a 
	{href} 
	class={className} 
	{target}
	{rel}
	onclick={handleClick} 
	{...props}
>
	{@render children?.()}
</a>
