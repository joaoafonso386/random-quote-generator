import axios from "axios";
import { URL } from "../config/URL";

export async function getRandomQuote() {
  const response = await axios.get(URL.GET_RANDOM_QUOTE);

  return response.data;
}
