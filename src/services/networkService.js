import axios from 'axios';
import { TV_MAZE_API_ENDPOINT } from '../constants';
const apiClient = axios.create({ timeout: 6000 });

const getRequest = (path) => {
    const url = `${TV_MAZE_API_ENDPOINT}${path}`;
    return apiClient({
        method: 'GET',
        url
    })
};

const postRequest = (path, data) => {
    const url = `${TV_MAZE_API_ENDPOINT}${path}`;
    return apiClient({
        method: 'POST',
        url,
        data
    });
}
export {
    getRequest,
    postRequest
}