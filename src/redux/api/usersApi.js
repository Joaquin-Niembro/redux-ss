import axios from 'axios';

export const getUsersFetch = () => {
	return axios.get('https://reqres.in/api/users?page=2');
};

export const createUserFetch = (user) => {
	return axios.post('https://reqres.in/api/users', user);
};

export const deleteUserFetch = (id) => {
	return axios.delete(`https://reqres.in/api/users/${id}`);
};
