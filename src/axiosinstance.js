import axios from "axios"

const api = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}/api`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

export default api;