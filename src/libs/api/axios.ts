import axios from "axios";

const newsApi = axios.create({
    baseURL: process.env.NEWS_API_URL
});

export default newsApi;