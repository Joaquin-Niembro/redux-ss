import axios from 'axios';
export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

function getUsers() {
	return {
		type: GET_USERS,
	};
}

function getUsersSucces(users) {
	return {
		type: GET_USERS_SUCCESS,
		payload: users,
	};
}

function getUsersFailure() {
	return {
		type: GET_USERS_FAILURE,
	};
}

export function usersFetch() {
	return async (dispatch) => {
		dispatch(getUsers());
		try {
			const res = await axios.get('https://reqres.in/api/users?page=2');
			dispatch(getUsersSucces(res.data.data));
            
		} catch (error) {
			dispatch(getUsersFailure());
		}
	};
}
