import axios from 'axios';

export const AxiosCtx = axios.create({
    baseURL: process.env.API_URL,
    //baseURL: "http://localhost:8080/api",
});

