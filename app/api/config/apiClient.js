import { create } from "apisauce";
import baseUrl from "./baseUrl";

// define the api
const api = create({
  baseURL: baseUrl,
  headers: { Accept: "application/json" },
});

export default api;
