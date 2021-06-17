import axios from "axios";
import { BASE_URL } from "../config";

// request interceptor
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('acc');
        if (token) {
            // config.headers["Authorization"] = "Bearer " + token;
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// login:

export const LoginAxios = async ({ mobile, password }) => {
    return await axios.post(`${BASE_URL}auth/login`, { mobile, password }).then((result) => {
        localStorage.setItem('ref', result.data.refresh);
        localStorage.setItem('acc', result.data.access);
        localStorage.setItem('user_type', result.data.user_type);
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

// delete sliders:
// http://127.0.0.1:8000/api/features/slider/id
export const deleteSlideAxios = async (slideId) => {
    return await axios({
        method: "delete",
        url: `${BASE_URL}features/slider/${slideId}`,
    });
};

// put sliders:
// "http://127.0.0.1:8000/api/features/slider/id
export const putSlideAxios = async (slideId, { data }) => {
    return await axios({
        method: "put",
        url: `${BASE_URL}features/slider/${slideId}`,
        data,
    });
};

// post sliders:
// http://127.0.0.1:8000/api/features/slider/
export const postSlideAxios = async (data) => {
    return await axios({
        method: "post",
        url: `${BASE_URL}features/slider`,
        data,
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

// delete banners:
// http://127.0.0.1:8000/api/features/banner

export const deleteBannerAxios = async (id) => {
    return await axios({
        method: "delete",
        url: `${BASE_URL}features/banner/${id}`,
    });
};

// post banners:
// http://127.0.0.1:8000/api/features/banner/
export const postBannerAxios = async (data) => {
    return await axios({
        method: "post",
        url: `${BASE_URL}features/banner`,
        data,
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

// delete partners:
// http://127.0.0.1:8000/api/features/partners

export const deletePartnerAxios = async (id) => {
    return await axios({
        method: "delete",
        url: `${BASE_URL}features/partners/${id}`,
    });
};

// post partners:
// http://127.0.0.1:8000/api/features/partners
export const postPartnerAxios = async (data) => {
    return await axios({
        method: "post",
        url: `${BASE_URL}features/partners`,
        data,
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

// delete support:
// http://127.0.0.1:8000/api/features/support

export const deleteSupportsAxios = async (id) => {
    return await axios({
        method: "delete",
        url: `${BASE_URL}features/support/${id}`,
    });
};

// post support:
// http://127.0.0.1:8000/api/features/support

export const postSupportsAxios = async (data) => {
    return await axios({
        method: "post",
        url: `${BASE_URL}features/support`,
        data
    });
};

// Post message:
// http://127.0.0.1:8000/api/features/contact

export const PostmessageAxios = async (data) => {
    return await axios({
        method: "post",
        url: `${BASE_URL}features/contact`,
        data,
    });
};


// get message:
// http://127.0.0.1:8000/api/features/contact

export const getmessageAxios = async () => {
    return await axios({
        method: "get",
        url: `${BASE_URL}features/contact`,
    });
};

// delete message:
// http://127.0.0.1:8000/api/features/contact

export const deleteMessageAxios = async (id) => {
    return await axios({
        method: "delete",
        url: `${BASE_URL}features/contact/${id}`,
    });
};

// get proposals:
// http://127.0.0.1:8000/api/projection/proposal

export const getProposalAxios = async () => {
    return await axios({
        method: "get",
        url: `${BASE_URL}projection/proposal`,
    });
};

// delete proposals:
// http://127.0.0.1:8000/api/projection/proposal

export const deleteProposalAxios = async (id) => {
    return await axios({
        method: "delete",
        url: `${BASE_URL}projection/proposal/${id}`,
    });
};

// get proposals:
// http://127.0.0.1:8000/api/projection/proposal

export const getProposalAxios = async () => {
    return await axios({
        method: "get",
        url: `${BASE_URL}projection/proposal`,
    });
};