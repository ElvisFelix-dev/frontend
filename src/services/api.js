import axios from 'axios';

const api = axios.create({
    baseURL: 'https://project-box-backend.herokuapp.com'
})

export default api;