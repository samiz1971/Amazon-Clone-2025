import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-2025-ece77/us-central1/api",
  baseURL: "https://us-central1-clone-2025-ece77.cloudfunctions.net/api",
});

export { axiosInstance };
