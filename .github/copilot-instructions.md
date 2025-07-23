---
applyTo: "**"
---
# GitHub Copilot Instructions

## General Development Guidelines

### Code Quality & Standards
- Always write clean, readable, and maintainable code
- Include meaningful comments for complex logic
- Follow consistent naming conventions
- Prioritize code clarity over brevity
- Use TypeScript when possible for better type safety

### Package Management
- **IMPORTANT**: Always use `pnpm` for package management. Never use `npm` or `yarn`

### Design System Integration
- **CRITICAL**: Never use fixed pixel values from Figma files
- **CRITICAL**: Avoid hardcoded values at all costs
- Use design tokens from Figma where available
- Always prefer relative values: `rem`, `vh`, `vw`, `%`, `em`
- Use CSS custom properties (CSS variables) for consistent theming
- Reference existing component patterns before creating new ones

### Figma Integration Rules
- The Figma Dev Mode MCP Server provides an assets endpoint for images and SVGs
- **IMPORTANT**: If the Figma Dev Mode MCP Server returns a localhost source for an image or SVG, use that source directly
- **IMPORTANT**: DO NOT import/add new icon packages - all assets should be in the Figma payload
- **IMPORTANT**: Do NOT use or create placeholders if a localhost source is provided
- Always extract and use design tokens from Figma selections
- Use `get_variable_defs` to retrieve color, spacing, and typography variables

## Framework-Specific Guidelines

### Svelte 5 (Current Standard)
- **IMPORTANT**: Always use Svelte 5 runes syntax - never use legacy Svelte code
- Use `onclick={}` instead of `on:click={}` (remove the colon for all event handlers)
- Use `$state()` for reactive variables instead of `let`
- Use `$derived()` for computed values instead of `$:`
- Use `$effect()` for side effects instead of `$:`
- Use `$props()` for component props instead of `export let`
- Always use `bind:` for two-way data binding with the new syntax

### Styling with Tailwind 4
- **IMPORTANT**: Always use Tailwind CSS whenever possible
- Use CSS custom properties (CSS variables) for design tokens
- Avoid custom CSS unless absolutely necessary
- Use Tailwind utility classes for responsive design
- Leverage Tailwind's design tokens for consistency

### Component Usage
- **IMPORTANT**: Always check `src/lib/components/ui` folder for existing shadcn-svelte components
- Use existing shadcn-svelte components when available
- Install new shadcn-svelte components using: `pnpm dlx shadcn-svelte@latest add [component-name]`
- Follow shadcn-svelte patterns for component structure and API design

## Security & Performance
- Validate all user inputs
- Use secure authentication patterns
- Optimize for performance from the start
- Follow accessibility best practices (WCAG guidelines)
- Implement proper error handling and loading states
