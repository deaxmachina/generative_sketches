import { writable } from 'svelte/store';

export const count = writable(0);
export const selectedWork = writable('colours01')