---
applyTo: "**"
---
# SEO Guidelines for SvelteKit 5

## Meta Tags & Head Management

### Essential Meta Tags for Every Route
- **CRITICAL**: Always include `<svelte:head>` section in every route component
- **REQUIRED**: Include these meta tags on every page:
  - `<title>` - Unique, descriptive title (50-60 characters)
  - `<meta name="description">` - Compelling description (150-160 characters)
  - `<meta name="keywords">` - Relevant keywords (3-10 keywords)
  - `<link rel="canonical">` - Canonical URL to prevent duplicate content
  - Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
  - Twitter Card tags when applicable

### Example Meta Structure
```svelte
<svelte:head>
	<title>Page Title | {PUBLIC_COMPANY_NAME}</title>
	<meta name="description" content="Compelling page description that includes target keywords" />
	<meta name="keywords" content="keyword1, keyword2, keyword3" />
	<meta property="og:title" content="Page Title | {PUBLIC_COMPANY_NAME}" />
	<meta property="og:description" content="Compelling page description for social sharing" />
	<meta property="og:image" content="/assets/page-specific-image.png" />
	<meta property="og:url" content="https://www.{PUBLIC_DOMAIN}/current-page" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://www.{PUBLIC_DOMAIN}/current-page" />
</svelte:head>
```

## Structured Data Implementation

### JSON-LD Structured Data
- **CRITICAL**: Add relevant Schema.org structured data to every page
- **IMPLEMENTATION**: Use `{@html}` blocks with `<script type="application/ld+json">` 
- **REQUIRED SCHEMAS**:
  - `Organization` schema on homepage/about
  - `Service` schema on service pages
  - `FAQPage` schema when FAQ sections exist
  - `CollectionPage` for listing pages
  - `WebPage` for general pages
  - `LocalBusiness` for location-based businesses

### Example Structured Data Implementation
```svelte
{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Page Title | ${PUBLIC_COMPANY_NAME}",
			"description": "Page description",
			"url": "${domain}/current-page",
			"provider": {
				"@type": "Organization",
				"name": "${PUBLIC_COMPANY_NAME}",
				"url": "${domain}",
				"logo": {
					"@type": "ImageObject",
					"url": "${domain}/assets/logo.png"
				}
			}
		}
	</script>
`}
```

### FAQ Schema Implementation
```svelte
{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": [
				${faqs.map(faq => `
					{
						"@type": "Question",
						"name": "${faq.question.replace(/"/g, '\\"')}",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "${faq.answer.replace(/"/g, '\\"')}"
						}
					}`
				).join(',')}
			]
		}
	</script>
`}
```

## Image Optimization & Accessibility

### Alt Text Requirements
- **CRITICAL**: Every `<img>` tag must have descriptive `alt` attribute
- **GUIDELINES**:
  - Describe the content and context of the image
  - Include relevant keywords naturally
  - Keep alt text under 125 characters
  - For decorative images, use `alt=""` (empty but present)
  - For complex images, consider `longdesc` attribute

### Example Image Implementation
```svelte
<img 
	src="/assets/service-image.webp" 
	alt="Professional video production setup with camera and lighting equipment"
	loading="lazy"
	width="800"
	height="600"
/>
```

## Navigation & Link Optimization

### SvelteKit Link Component
- **CRITICAL**: Create and use a custom `Link` component for all internal navigation
- **PERFORMANCE**: Combine `href` with `goto()` for better UX and SEO
- **IMPLEMENTATION**: 

```svelte
<!-- src/lib/components/Link.svelte -->
<script lang="ts">
	import { goto } from '$app/navigation';
	
	interface Props {
		href: string;
		children?: any;
		class?: string;
		[key: string]: any;
	}
	
	let { href, children, class: className, ...props }: Props = $props();
	
	const handleClick = (e: MouseEvent) => {
		// Only prevent default for internal links
		if (href.startsWith('/') || href.startsWith('#')) {
			e.preventDefault();
			goto(href);
		}
	};
</script>

<a {href} class={className} onclick={handleClick} {...props}>
	{@render children?.()}
</a>
```

### Link Text Best Practices
- **CRITICAL**: Use descriptive, unique link text
- **AVOID**: Generic text like "click here", "read more", "learn more"
- **PREFER**: Specific descriptions like "View our video production services", "Download pricing guide"
- **ACCESSIBILITY**: Ensure link purpose is clear from context

## Content Structure & Headings

### Heading Hierarchy
- **CRITICAL**: Use proper heading hierarchy (H1 → H2 → H3 → H4)
- **RULE**: Only one H1 per page
- **IMPLEMENTATION**: H1 should be the main page title, H2 for major sections, H3 for subsections

### Content Guidelines
- **READABILITY**: Use short paragraphs (2-3 sentences)
- **KEYWORDS**: Include target keywords naturally in content
- **STRUCTURE**: Use lists, tables, and other HTML elements for better structure
- **LENGTH**: Aim for minimum 300 words of unique content per page

## URL Structure & Routing

### URL Best Practices
- **STRUCTURE**: Use clean, descriptive URLs with keywords
- **HYPHENS**: Use hyphens to separate words in URLs
- **LOWERCASE**: Always use lowercase in URLs
- **AVOID**: Special characters, spaces, underscores in URLs

### SvelteKit Route Examples
```
✅ Good: /services/video-production
✅ Good: /service-areas/los-angeles
❌ Bad: /services/videoProduction
❌ Bad: /services/video_production
❌ Bad: /page1
```

## Performance & Core Web Vitals

### Image Optimization
- **FORMAT**: Use WebP format when possible, with fallbacks
- **LAZY LOADING**: Add `loading="lazy"` to non-critical images
- **DIMENSIONS**: Always specify `width` and `height` attributes
- **RESPONSIVE**: Use responsive images with `srcset` when appropriate

### Critical Performance Metrics
- **LCP**: Optimize largest contentful paint with image optimization
- **CLS**: Prevent layout shift with proper image dimensions
- **FID**: Minimize JavaScript execution time
- **INP**: Optimize interaction to next paint with efficient event handlers

## Technical SEO Checklist

### Required Files & Configuration
- [ ] `robots.txt` in static folder
- [ ] `sitemap.xml` generation (use SvelteKit's dynamic routes)
- [ ] 404 error page (`+error.svelte`)
- [ ] Proper redirects for changed URLs
- [ ] HTTPS enforcement
- [ ] Mobile-responsive design

## Sitemap & Robots.txt Management

### Sitemap Requirements
- **CRITICAL**: Always maintain an up-to-date `sitemap.xml` file in the `static` folder
- **LOCATION**: Place sitemap at `/static/sitemap.xml` (accessible at `/sitemap.xml`)
- **UPDATES**: Manually update sitemap whenever new pages/routes are created
- **STRUCTURE**: Follow XML sitemap protocol with proper formatting

### Sitemap Creation & Updates
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Main Pages -->
  <url>
    <loc>https://www.{domain}/</loc>
    <priority>1.0</priority>
  </url>
  
  <!-- Service Pages -->
  <url>
    <loc>https://www.{domain}/services/new-service</loc>
    <priority>0.8</priority>
  </url>
  
  <!-- Add new URLs here when creating pages -->
  
</urlset>
```

### Sitemap Best Practices
- **PRIORITY GUIDELINES**:
  - Homepage: 1.0
  - Main service/product pages: 0.9
  - Individual service pages: 0.8
  - Contact/about pages: 0.7-0.8
  - Blog posts: 0.6-0.7
  - Legal pages: 0.5
- **CHANGE FREQUENCY**:
  - Homepage/main pages: weekly or monthly
  - Service pages: monthly
  - Static pages: yearly
  - Blog/news: weekly or daily
- **LAST MODIFIED**: Always update `lastmod` when page content changes significantly

### Robots.txt Configuration
- **CRITICAL**: Always create a `robots.txt` file in the `static` folder
- **LOCATION**: Place at `/static/robots.txt` (accessible at `/robots.txt`)
- **PURPOSE**: Guide search engine crawlers and reference sitemap

### Robots.txt Template
```plaintext
User-agent: *
Allow: /
Disallow: /api/
Disallow: /.well-known/
Disallow: /admin/
Disallow: /*?*

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Sitemap location
Sitemap: https://www.{domain}/sitemap.xml

# Additional sitemaps (if any)
# Sitemap: https://www.{domain}/sitemap-images.xml
```

### Robots.txt Guidelines
- **ALLOW ALL**: Use `Allow: /` to permit crawling of public content
- **DISALLOW PATTERNS**:
  - API endpoints: `/api/`
  - Admin areas: `/admin/`
  - Well-known files: `/.well-known/`
  - Query parameters: `/*?*` (optional, use carefully)
- **SITEMAP REFERENCE**: Always include sitemap URL
- **CRAWL-DELAY**: Optional, use `1` second for respectful crawling

### Workflow for New Pages
1. **CREATE PAGE**: Develop new route/page
2. **ADD TO SITEMAP**: Update `static/sitemap.xml` with new URL
3. **SET METADATA**: Add proper title, description, and structured data
4. **UPDATE LASTMOD**: Set current date in sitemap entry
5. **TEST**: Validate sitemap and robots.txt syntax
6. **SUBMIT**: Resubmit sitemap to Google Search Console

### Sitemap Validation & Testing
- **VALIDATION TOOLS**:
  - Google Search Console sitemap tester
  - Online XML sitemap validators
  - Browser direct access test (`/sitemap.xml`)
- **SEARCH CONSOLE**: Submit sitemap via Google Search Console
- **MONITORING**: Check for crawl errors and indexing status

### Advanced Sitemap Considerations
- **LARGE SITES**: Consider breaking into multiple sitemaps if >50,000 URLs
- **IMAGE SITEMAPS**: Create separate image sitemap for media-heavy sites
- **NEWS SITEMAPS**: Use news sitemap protocol for news/blog content
- **MULTILINGUAL**: Create separate sitemaps for different languages

## Technical SEO Maintenance

### Monthly SEO Tasks
- [ ] Update sitemap with new pages
- [ ] Check robots.txt accessibility
- [ ] Validate sitemap in Search Console
- [ ] Review crawl errors and fix broken links
- [ ] Update lastmod dates for changed content
