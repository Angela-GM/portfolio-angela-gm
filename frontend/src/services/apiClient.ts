import axios from "axios";

const BASE_URL = "https://portfolio-angela-gm-production.up.railway.app/";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    console.log(response);
    return response;
  },
  function (error) {
    const res = error.response;
    if (res.status == 401) {
      console.log("Redirigir al home");
    }
    console.error(`Looks like there was a problem. Status Code: ${res.status}`);
    return Promise.reject(error);
  }
);

export default axiosClient;
