import axios from 'axios';

const baseUrl = 'https://dummyjson.com/todos/add';

export const fetchPosts = () => {
    return axios.get(baseUrl);
};

export const createPost = (postData) => {
    return axios.post(baseUrl, postData);
};

export const deletePost = (postId) => {
    return axios.delete(`${baseUrl}/${postId}`);
};
