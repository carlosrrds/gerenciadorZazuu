import axios from 'axios';

const baseUrl = axios.create({
    baseURL: 'http://backend:3333/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ""`

    },
});

export default baseUrl;