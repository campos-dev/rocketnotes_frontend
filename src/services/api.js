import axios from "axios";

export const api = axios.create({
  baseURL: "https://explorer-rocketnotes.onrender.com",
});
