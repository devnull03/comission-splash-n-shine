---
applyTo: "**"
---
# GSAP Animation Guidelines for SvelteKit 5

## Installation & Setup

### Package Installation
- **CRITICAL**: Always use `pnpm` for GSAP installation
```bash
pnpm add gsap
```

### Core GSAP Plugins
```bash
# Essential plugins for most projects
pnpm add gsap
# ScrollTrigger, TextPlugin, etc. are included in main package
```

### TypeScript Support
```bash
pnpm add -D @types/gsap
```

## Svelte 5 Integration Patterns

### Basic Animation Setup with Runes
```svelte
<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	
	let elementRef: HTMLElement;
	
	onMount(() => {
		// Initialize animations after component mounts
		gsap.from(elementRef, {
			duration: 1,
			y: 50,
			opacity: 0,
			ease: "power2.out"
		});
	});
</script>

<div bind:this={elementRef}>
	<!-- Content to animate -->
</div>
```

### Using $effect() for Reactive Animations
```svelte
<script lang="ts">
	import { gsap } from 'gsap';
	
	let isVisible = $state(false);
	let elementRef: HTMLElement;
	
	$effect(() => {
		if (elementRef) {
			gsap.to(elementRef, {
				duration: 0.3,
				opacity: isVisible ? 1 : 0,
				scale: isVisible ? 1 : 0.95,
				ease: "power2.out"
			});
		}
	});
</script>
```

## ScrollTrigger Integration

### Setup ScrollTrigger
```svelte
<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount, onDestroy } from 'svelte';
	
	gsap.registerPlugin(ScrollTrigger);
	
	let sectionRef: HTMLElement;
	let scrollTriggerInstance: ScrollTrigger;
	
	onMount(() => {
		scrollTriggerInstance = ScrollTrigger.create({
			trigger: sectionRef,
			start: "top 80%",
			end: "bottom 20%",
			onEnter: () => animateIn(),
			onLeave: () => animateOut(),
			onEnterBack: () => animateIn(),
			onLeaveBack: () => animateOut()
		});
	});
	
	onDestroy(() => {
		scrollTriggerInstance?.kill();
	});
	
	function animateIn() {
		gsap.to(sectionRef, {
			duration: 0.6,
			y: 0,
			opacity: 1,
			ease: "power2.out"
		});
	}
	
	function animateOut() {
		gsap.to(sectionRef, {
			duration: 0.4,
			y: 20,
			opacity: 0.7,
			ease: "power2.inOut"
		});
	}
</script>

<section bind:this={sectionRef} class="opacity-0 translate-y-5">
	<!-- Content -->
</section>
```

## Animation Patterns & Best Practices

### Timeline-Based Animations
```svelte
<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	
	let containerRef: HTMLElement;
	
	onMount(() => {
		const tl = gsap.timeline();
		
		tl.from(".animate-title", {
			duration: 0.8,
			y: 30,
			opacity: 0,
			ease: "power2.out"
		})
		.from(".animate-subtitle", {
			duration: 0.6,
			y: 20,
			opacity: 0,
			ease: "power2.out"
		}, "-=0.4")
		.from(".animate-content", {
			duration: 0.6,
			y: 20,
			opacity: 0,
			stagger: 0.1,
			ease: "power2.out"
		}, "-=0.3");
	});
</script>

<div bind:this={containerRef}>
	<h1 class="animate-title">Title</h1>
	<h2 class="animate-subtitle">Subtitle</h2>
	<p class="animate-content">Content 1</p>
	<p class="animate-content">Content 2</p>
	<p class="animate-content">Content 3</p>
</div>
```

### Page Transition Animations
```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import { gsap } from 'gsap';
	import { navigating, page } from '$app/stores';
	import { onMount } from 'svelte';
	
	let mainContent: HTMLElement;
	
	$effect(() => {
		if ($navigating) {
			// Animate out
			gsap.to(mainContent, {
				duration: 0.3,
				opacity: 0,
				y: -20,
				ease: "power2.inOut"
			});
		} else {
			// Animate in
			gsap.fromTo(mainContent, 
				{ opacity: 0, y: 20 },
				{
					duration: 0.4,
					opacity: 1,
					y: 0,
					ease: "power2.out",
					delay: 0.1
				}
			);
		}
	});
</script>

<main bind:this={mainContent}>
	<slot />
</main>
```

## Component-Specific Animation Patterns

### Button Hover Animations
```svelte
<script lang="ts">
	import { gsap } from 'gsap';
	
	let buttonRef: HTMLButtonElement;
	
	function handleMouseEnter() {
		gsap.to(buttonRef, {
			duration: 0.2,
			scale: 1.05,
			ease: "power2.out"
		});
	}
	
	function handleMouseLeave() {
		gsap.to(buttonRef, {
			duration: 0.2,
			scale: 1,
			ease: "power2.out"
		});
	}
</script>

<button 
	bind:this={buttonRef}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
	Click me
</button>
```

### Card Reveal Animation
```svelte
<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount, onDestroy } from 'svelte';
	
	gsap.registerPlugin(ScrollTrigger);
	
	let cardRefs: HTMLElement[] = [];
	let scrollTriggers: ScrollTrigger[] = [];
	
	onMount(() => {
		cardRefs.forEach((card, index) => {
			const trigger = ScrollTrigger.create({
				trigger: card,
				start: "top 85%",
				onEnter: () => {
					gsap.fromTo(card,
						{
							opacity: 0,
							y: 50,
							rotationY: 15
						},
						{
							duration: 0.8,
							opacity: 1,
							y: 0,
							rotationY: 0,
							ease: "power2.out",
							delay: index * 0.1
						}
					);
				}
			});
			scrollTriggers.push(trigger);
		});
	});
	
	onDestroy(() => {
		scrollTriggers.forEach(trigger => trigger.kill());
	});
	
	const cards = ['Card 1', 'Card 2', 'Card 3'];
</script>

{#each cards as card, index}
	<div bind:this={cardRefs[index]} class="opacity-0">
		{card}
	</div>
{/each}
```

## Advanced Animation Techniques

### Morphing SVG Animations
```svelte
<script lang="ts">
	import { gsap } from 'gsap';
	import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
	import { onMount } from 'svelte';
	
	// Note: MorphSVGPlugin requires GSAP license
	gsap.registerPlugin(MorphSVGPlugin);
	
	let pathRef: SVGPathElement;
	
	onMount(() => {
		const tl = gsap.timeline({ repeat: -1, yoyo: true });
		
		tl.to(pathRef, {
			duration: 2,
			morphSVG: "M10,10 Q90,90 190,10 Q290,90 390,10",
			ease: "power2.inOut"
		});
	});
</script>

<svg viewBox="0 0 400 100">
	<path 
		bind:this={pathRef}
		d="M10,50 Q90,10 190,50 Q290,10 390,50"
		stroke="currentColor"
		fill="none"
		stroke-width="2"
	/>
</svg>
```

### Text Animation Effects
```svelte
<script lang="ts">
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/TextPlugin';
	import { onMount } from 'svelte';
	
	gsap.registerPlugin(TextPlugin);
	
	let titleRef: HTMLElement;
	let subtitleRef: HTMLElement;
	
	onMount(() => {
		const tl = gsap.timeline();
		
		// Split text animation
		tl.fromTo(titleRef.children,
			{ opacity: 0, y: 20 },
			{
				duration: 0.6,
				opacity: 1,
				y: 0,
				stagger: 0.05,
				ease: "power2.out"
			}
		)
		// Typewriter effect
		.to(subtitleRef, {
			duration: 2,
			text: "Your complete marketing solution",
			ease: "none"
		}, "-=0.3");
	});
</script>

<h1 bind:this={titleRef}>
	{#each "Amazing Results".split('') as char}
		<span>{char === ' ' ? '\u00A0' : char}</span>
	{/each}
</h1>
<p bind:this={subtitleRef}></p>
```

## Performance Optimization

### Animation Performance Guidelines
- **TRANSFORMS**: Prefer `transform` properties (translate, scale, rotate) over position/size changes
- **OPACITY**: Use `opacity` instead of `visibility` or `display` for fade effects
- **WILL-CHANGE**: Add `will-change: transform` to elements that will be animated
- **HARDWARE ACCELERATION**: Use `transform3d()` or `translateZ(0)` to trigger GPU acceleration

### Optimized Animation Example
```svelte
<script lang="ts">
	import { gsap } from 'gsap';
	
	let elementRef: HTMLElement;
	
	function optimizedAnimation() {
		// Good: Uses transform and opacity
		gsap.to(elementRef, {
			duration: 0.3,
			x: 100,
			y: 50,
			opacity: 0.5,
			scale: 1.2,
			rotation: 45,
			ease: "power2.out"
		});
	}
	
	function poorPerformanceAnimation() {
		// Avoid: Changes layout properties
		gsap.to(elementRef, {
			duration: 0.3,
			left: "100px",
			top: "50px",
			width: "200px",
			height: "200px"
		});
	}
</script>

<div 
	bind:this={elementRef}
	style="will-change: transform;"
	class="transform-gpu"
>
	Content
</div>
```

## Cleanup & Memory Management

### Proper Cleanup Pattern
```svelte
<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount, onDestroy } from 'svelte';
	
	let animations: gsap.core.Tween[] = [];
	let scrollTriggers: ScrollTrigger[] = [];
	
	onMount(() => {
		// Store animation references
		const tween = gsap.to(".element", { duration: 1, x: 100 });
		animations.push(tween);
		
		const trigger = ScrollTrigger.create({
			trigger: ".element",
			onEnter: () => console.log("entered")
		});
		scrollTriggers.push(trigger);
	});
	
	onDestroy(() => {
		// Clean up all animations and triggers
		animations.forEach(animation => animation.kill());
		scrollTriggers.forEach(trigger => trigger.kill());
		animations = [];
		scrollTriggers = [];
	});
</script>
```

## Accessibility Considerations

### Respecting User Preferences
```svelte
<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	
	let prefersReducedMotion = false;
	
	onMount(() => {
		// Check for reduced motion preference
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		prefersReducedMotion = mediaQuery.matches;
		
		// Listen for changes
		mediaQuery.addEventListener('change', (e) => {
			prefersReducedMotion = e.matches;
		});
	});
	
	function respectfulAnimation(element: HTMLElement) {
		if (prefersReducedMotion) {
			// Provide instant, non-animated state change
			gsap.set(element, { opacity: 1, y: 0 });
		} else {
			// Full animation
			gsap.fromTo(element,
				{ opacity: 0, y: 20 },
				{ duration: 0.6, opacity: 1, y: 0, ease: "power2.out" }
			);
		}
	}
</script>
```

## Common Animation Patterns

### Loading Animations
```svelte
<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	
	let isLoading = $state(true);
	let loaderRef: HTMLElement;
	
	onMount(() => {
		const tl = gsap.timeline({ repeat: -1 });
		
		tl.to(loaderRef, {
			duration: 0.8,
			rotation: 360,
			ease: "none"
		});
		
		// Simulate loading completion
		setTimeout(() => {
			isLoading = false;
			tl.kill();
		}, 3000);
	});
</script>

{#if isLoading}
	<div bind:this={loaderRef} class="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full">
	</div>
{/if}
```

### Parallax Scrolling
```svelte
<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount, onDestroy } from 'svelte';
	
	gsap.registerPlugin(ScrollTrigger);
	
	let parallaxRef: HTMLElement;
	let scrollTrigger: ScrollTrigger;
	
	onMount(() => {
		scrollTrigger = ScrollTrigger.create({
			trigger: parallaxRef,
			start: "top bottom",
			end: "bottom top",
			scrub: 1,
			onUpdate: (self) => {
				const progress = self.progress;
				gsap.set(parallaxRef, {
					yPercent: -50 * progress,
					ease: "none"
				});
			}
		});
	});
	
	onDestroy(() => {
		scrollTrigger?.kill();
	});
</script>

<div class="relative overflow-hidden">
	<div bind:this={parallaxRef} class="absolute inset-0 -z-10">
		<!-- Parallax background content -->
	</div>
	<!-- Foreground content -->
</div>
```

## Testing Animations

### Animation Testing Guidelines
- **PERFORMANCE**: Use Chrome DevTools Performance tab to profile animations
- **ACCESSIBILITY**: Test with `prefers-reduced-motion` enabled
- **MOBILE**: Test on actual mobile devices for performance
- **CROSS-BROWSER**: Test animations across different browsers

### Debug Helpers
```svelte
<script lang="ts">
	import { gsap } from 'gsap';
	
	// Development helper for debugging animations
	function debugAnimation(target: string, props: object) {
		if (import.meta.env.DEV) {
			console.log('Animating:', target, props);
			
			// Add visual debug indicators
			gsap.set(target, { outline: "2px solid red" });
			setTimeout(() => {
				gsap.set(target, { outline: "none" });
			}, 1000);
		}
		
		return gsap.to(target, props);
	}
</script>
```
