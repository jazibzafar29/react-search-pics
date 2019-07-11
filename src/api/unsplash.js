import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'YOUR_KEY_FROM_UNSPLASH'
    }
});
