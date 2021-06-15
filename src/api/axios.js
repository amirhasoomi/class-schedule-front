import axios from "axios";
import { BASE_URL } from "../config";


// login:

export const LoginAxios = async ({ mobile, password }) => {
    return await axios.post(`${BASE_URL}auth/login`, { mobile, password }).then((result) => {
        localStorage.setItem('ref', result.data.refresh);
        localStorage.setItem('acc', result.data.access);
        localStorage.setItem('user-type', result.data.user_type);
    });
};

// get sliders:
// http://127.0.0.1:8000/api/features/slider

export const getSliderAxios = async () => {
    return await axios({
        method: "get",
        url: `${BASE_URL}features/slider`,
    });
};


// get banners:
// http://127.0.0.1:8000/api/features/banner

export const getBannerAxios = async () => {
    return await axios({
        method: "get",
        url: `${BASE_URL}features/banner`,
    });
};

// get partners:
// http://127.0.0.1:8000/api/features/partners

export const getPartnersAxios = async () => {
    return await axios({
        method: "get",
        url: `${BASE_URL}features/partners`,
    });
};

// get support:
// http://127.0.0.1:8000/api/features/support

export const getSupportsAxios = async () => {
    return await axios({
        method: "get",
        url: `${BASE_URL}features/support`,
    });
};

// Post message:
// http://127.0.0.1:8000/api/features/contact

export const Postmessage = async (data) => {
    return await axios({
      method: "post",
      url: `${BASE_URL}features/contact`,
      data,
    });
  };