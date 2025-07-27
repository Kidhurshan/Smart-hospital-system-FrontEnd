import axios from "axios";

export const baseURL = "http://127.0.0.1:8000/api/v1";
export const apiKey = "A5fdf5519$30fc@4df1A81f6&8eb924e3a3c3N";
axios.defaults.withCredentials = true;

const apiClient = axios.create ({
    baseURL,
    headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
    }, 
    
});

export default apiClient;