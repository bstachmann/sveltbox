import { writable } from 'svelte/store';

export const currentScene = writable(null);
export const inventory = writable({});