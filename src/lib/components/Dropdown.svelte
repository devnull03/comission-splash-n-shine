<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { ChevronDown } from 'svelte-radix';

	interface Props {
		label: string;
		buttonClass?: string;
		menuClass?: string;
		itemClass?: string;
		headerClass?: string;
		title?: string;

		children?: any;
	}

	let {
		label,
		buttonClass = '',
		menuClass = '',
		itemClass = '',
		headerClass = '',
		title,
		children
	}: Props = $props();

	let isOpen = $state(false);
	let dropdownEl: HTMLDivElement;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function closeDropdown() {
		isOpen = false;
	}

	function handleClickOutside(event: MouseEvent) {
		if (dropdownEl && !dropdownEl.contains(event.target as Node) && isOpen) {
			closeDropdown();
		}
	}

	function handleEscape(event: KeyboardEvent) {
		if (event.key === 'Escape' && isOpen) {
			closeDropdown();
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		document.addEventListener('keydown', handleEscape);
	});

	onDestroy(() => {
		document.removeEventListener('click', handleClickOutside);
		document.removeEventListener('keydown', handleEscape);
	});
</script>

<div class="relative inline-block" bind:this={dropdownEl}>
	<button
		type="button"
		class="font-semibold flex items-center gap-1 {buttonClass}"
		onclick={toggleDropdown}
		aria-expanded={isOpen}
		aria-haspopup="true"
	>
		{label}
		<ChevronDown class="h-4 w-4 transition-transform {isOpen ? 'rotate-180' : ''}" />
	</button>

	{#if isOpen}
		<div
			class="absolute z-[1000] mt-2 rounded-md bg-white shadow-lg {menuClass}"
			transition:fade={{ duration: 100 }}
		>
			<!-- {#if title}
				<div class="px-4 py-2 text-sm font-medium text-gray-700 {headerClass}">
					{title}
				</div>
				<hr class="mx-2 my-1 border-gray-200" />
			{/if} -->

			<div class="py-1">
				{@render children()}
			</div>
		</div>
	{/if}
</div>

<style>
	/* Base styles for the dropdown */
	.relative {
		position: relative;
	}

	button {
		cursor: pointer;
		padding: 0.5rem 0.1rem;
		border: none;
		background: transparent;
		transition:
			color 0.2s,
			background-color 0.2s;
	}

	.absolute {
		position: absolute;
		min-width: 200px;
		left: 0;  /* Changed from right: 0 to left: 0 */
		top: 100%;
	}

	@media (min-width: 1024px) {
		.absolute {
			left: 0;  /* Changed from translating to simple left alignment */
			transform: none;
		}
	}
</style>
