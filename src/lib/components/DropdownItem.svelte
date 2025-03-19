<script lang="ts">
	interface Props {
		class?: string;
		disabled?: boolean;
		children?: any;
		onclick?: () => void;
	}

	let { class: className = '', disabled = false, children, onclick }: Props = $props();
</script>

<button
	class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 {disabled
		? 'cursor-not-allowed opacity-50'
		: 'cursor-pointer'} {className}"
	{disabled}
	{onclick}
>
	{@render children()}
</button>

<style>
	button:hover:not([disabled]) {
		background-color: rgba(0, 0, 0, 0.05);
	}
</style>
