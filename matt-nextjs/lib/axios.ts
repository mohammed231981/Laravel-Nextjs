import Axios from "axios";
import { getCurrentUser } from "./session";
import { cookies } from "next/headers";

const backendURL = "http://127.0.0.1:8000";

export const axiosBackend = createAxios(backendURL);

function createAxios(url: string | undefined) {
  return Axios.create({
    withCredentials: true,
    baseURL: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

axiosBackend.interceptors.request.use(
  async (config) => {
    const session = await getCurrentUser();

    if (session) {
      config.headers["Authorization"] = `Bearer ${session?.accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
