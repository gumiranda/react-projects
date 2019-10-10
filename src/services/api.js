import axios from 'axios';

const api = axios.create({
    baseURL: 'http://graduandoeasy.herokuapp.com/api/',
});

export default api;
