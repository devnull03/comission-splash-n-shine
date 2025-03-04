import { writable } from "svelte/store";

export const scrollThreshold = writable<number>(10);
