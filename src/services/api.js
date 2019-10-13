import axios from 'axios';

const api = axios.create({
    baseURL: 'https://graduandoeasy.herokuapp.com/api/',
});

export default api;
