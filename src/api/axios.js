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


// register:
// http://127.0.0.1:8000/api/auth/register

export const RegisterAxios = async ({ mobile, password }) => {
    return await axios({
        method: "post",
        url: `${BASE_URL}auth/register`,
        data: { mobile, password }
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

// get allusers:
// http://127.0.0.1:8000/api/auth/allusers

export const getUsersAxios = async () => {
    return await axios({
        method: "get",
        url: `${BASE_URL}auth/allusers`,
    });
};

// get members:
// http://127.0.0.1:8000/api/auth/members

export const getMembersAxios = async () => {
    return await axios({
        method: "get",
        url: `${BASE_URL}auth/members`,
    });
};

// patch user_type:
// http://127.0.0.1:8000/api/auth/user_type/<pk>
export const usertypeAxios = async (id, { data }) => {
    return await axios({
        method: "patch",
        url: `${BASE_URL}auth/user_type/${id}`,
        data,
    });
};

// get user profile:
// http://127.0.0.1:8000/api/auth/profile

export const getMyProfileAxios = async () => {
    return await axios({
        method: "get",
        url: `${BASE_URL}auth/profile`,
    });
};

// get profile:
// http://127.0.0.1:8000/api/auth/profile/<pk>

export const getUserProfileAxios = async (id) => {
    return await axios({
        method: "get",
        url: `${BASE_URL}auth/profile/${id}`,
    });
};

// patch profile:
// http://127.0.0.1:8000/api/auth/profile/<pk>

export const patchProfileAxios = async (id, { data }) => {
    return await axios({
        method: "patch",
        url: `${BASE_URL}auth/profile/${id}`,
        data,
    });
};

// get allfields:
// http://127.0.0.1:8000/api/projection/field

export const getAllFieldsAxios = async () => {
    return await axios({
        method: "get",
        url: `${BASE_URL}projection/field`,
    });
};

// get field:
// http://127.0.0.1:8000/api/projection/field/<pk>

export const getFieldAxios = async (id) => {
    return await axios({
        method: "get",
        url: `${BASE_URL}projection/field/${id}`,
    });
};

// delete field:
// http://127.0.0.1:8000/api/projection/field/<pk>

export const deleteFieldAxios = async (id) => {
    return await axios({
        method: "delete",
        url: `${BASE_URL}projection/field/${id}`,
    });
};

// post field:
// http://127.0.0.1:8000/api/projection/field

export const postFieldAxios = async (data) => {
    return await axios({
        method: "post",
        url: `${BASE_URL}projection/field`,
        data
    });
};

// get list lesson:
// http://127.0.0.1:8000/api/projection/lesson/<field>

export const getListLessonAxios = async (field) => {
    return await axios({
        method: "get",
        url: `${BASE_URL}projection/lesson/${field}`,
    });
};

// delete lesson:
// http://127.0.0.1:8000/api/projection/lesson/<pk>

export const deleteLessonAxios = async (id) => {
    return await axios({
        method: "delete",
        url: `${BASE_URL}projection/lesson/${id}`,
    });
};

// post lesson:
// http://127.0.0.1:8000/api/projection/lesson

export const postLessonAxios = async (data) => {
    return await axios({
        method: "post",
        url: `${BASE_URL}projection/lesson`,
        data
    });
};

// get platoss:
// http://127.0.0.1:8000/api/projection/palto

export const getPlatosAxios = async () => {
    return await axios({
        method: "get",
        url: `${BASE_URL}projection/palto`,
    });
};

// delete plato:
// http://127.0.0.1:8000/api/projection/palto

export const deletePlatoAxios = async (id) => {
    return await axios({
        method: "delete",
        url: `${BASE_URL}projection/palto/${id}`,
    });
};

// post plato:
// http://127.0.0.1:8000/api/projection/palto

export const postPlatoAxios = async (data) => {
    return await axios({
        method: "post",
        url: `${BASE_URL}projection/palto`,
        data
    });
};

// get schedule by field:
// http://127.0.0.1:8000/api/projection/schedule/field/<pk>

export const getScheduleByFieldAxios = async (id) => {
    return await axios({
        method: "get",
        url: `${BASE_URL}projection/schedule/field/${id}`,
    });
};

// post schedule:
// http://127.0.0.1:8000/api/projection/schedule

export const postScheduleAxios = async (data) => {
    return await axios({
        method: "post",
        url: `${BASE_URL}projection/schedule`,
        data
    });
};

// delete schedule:
// http://127.0.0.1:8000/api/projection/schedule/<pk>

export const deletSscheduleAxios = async (id) => {
    return await axios({
        method: "delete",
        url: `${BASE_URL}projection/schedule/${id}`,
    });
};

// get schedules:
// http://127.0.0.1:8000/api/projection/schedule

export const getScheduleAxios = async () => {
    return await axios({
        method: "get",
        url: `${BASE_URL}projection/schedule`,
    });
};

// get availability:
// http://127.0.0.1:8000/api/projection/availability

export const getAvailabilityAxios = async () => {
    return await axios({
        method: "get",
        url: `${BASE_URL}projection/availability`,
    });
};

// post availability:
// http://127.0.0.1:8000/api/projection/availability

export const postAvailabilityAxios = async (data) => {
    return await axios({
        method: "post",
        url: `${BASE_URL}projection/availability`,
        data
    });
};