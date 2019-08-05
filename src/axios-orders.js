import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-the-burger-builder-eeb03.firebaseio.com/'
});

export default instance;