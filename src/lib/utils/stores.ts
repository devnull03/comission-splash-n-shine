import { writable } from "svelte/store";

export const quoteDialogOpen = writable(false);
export const isMobile = writable(false);
export const servicesPageNavigating = writable(false);
