import axios from "axios";

const instance = axios.create({
    baseURL: 'http://78.46.69.39:8007'
});

export default instance;