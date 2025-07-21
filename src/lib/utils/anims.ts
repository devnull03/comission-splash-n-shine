import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { onMount } from 'svelte';

export function fadeIn(node: HTMLElement) {
	gsap.registerPlugin(ScrollTrigger);

	const tl = gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: node,
			start: 'top 90%',
			end: 'bottom 10%',
			toggleActions: 'play none none none',
			markers: false
		}
	});

	tl.from(node, {
		opacity: 0,
		y: 50,
		duration: 0.5,
		ease: 'power2.out'
	});

	onMount(() => {
		tl.play();
	});
}
""