import axios from "axios";
import { writable } from "svelte/store";
export const cards = writable([]);

const fetchCards = async () => {
  let response = await axios.get("http://localhost:3000/data");
  if (response.data) cards.set(response.data);
};
await fetchCards();
