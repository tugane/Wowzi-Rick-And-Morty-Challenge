import api from "../config/apiClient";

const endpoint = "/character";

const getCharacters = (query = "") => api.get(endpoint + query);

export { getCharacters };
