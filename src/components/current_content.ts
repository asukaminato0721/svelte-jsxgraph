import { writable } from "svelte/store";
export const currentContent = writable(
  localStorage.getItem("currentContent") ?? ""
);
currentContent.subscribe((val) => localStorage.setItem("currentContent", val));
