import axios from "axios";
import { BASE_URL } from "../config";


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