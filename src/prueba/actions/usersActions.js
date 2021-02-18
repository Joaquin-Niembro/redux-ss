export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

function getUsers() {
	return { type: GET_USERS };
}
function getUsersSuccess(users) {
	return {
		type: GET_USERS_SUCCESS,
		payload: users,
	};
}

function getUsersFailure(message) {
	return {
		type: GET_USERS_FAILURE,
		payload: message,
	};
}
////////////////////////////////////
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

function createUser(newUser) {
	return {
		type: CREATE_USER,
		payload: newUser,
	};
}
function createUserSuccess(User) {
	return {
		type: CREATE_USER_SUCCESS,
		payload: User,
	};
}
function createUserFailure(message) {
	return {
		type: CREATE_USER_FAILURE,
		payload: message,
	};
}
////////////////////////
export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
const deleteUser = (id) => {
	return {
		type: DELETE_USER,
		payload: id,
	};
};
const deleteUserSuccess = (id) => {
	return {
		type: DELETE_USER_SUCCESS,
		payload: id,
	};
};
const deleteUserFailure = (error) => {
	return {
		type: DELETE_USER_FAILURE,
		payload: error,
	};
};
export {
	getUsers,
	getUsersFailure,
	getUsersSuccess,
	createUser,
	createUserFailure,
	createUserSuccess,
	deleteUser,
	deleteUserFailure,
	deleteUserSuccess,
};
