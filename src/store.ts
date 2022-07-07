import { writable } from "svelte/store";

export const count = writable(0);

export function increment() {
  count.update(state => state + 1);
}

export function decrement() {
  count.update(state => state - 1);
}