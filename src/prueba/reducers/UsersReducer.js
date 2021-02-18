import {
	GET_USERS,
	GET_USERS_FAILURE,
	GET_USERS_SUCCESS,
	CREATE_USER,
	CREATE_USER_FAILURE,
	CREATE_USER_SUCCESS,
	DELETE_USER,
	DELETE_USER_FAILURE,
	DELETE_USER_SUCCESS,
} from '../actions/usersActions';
export default function UsersReducer(state = [], action) {
	switch (action.type) {
		case GET_USERS:
			return state;
		case GET_USERS_SUCCESS:
			return action.payload;
		case GET_USERS_FAILURE:
			return [];
		case CREATE_USER:
			return state;
		case CREATE_USER_SUCCESS:
			return [...state, action.payload];
		case CREATE_USER_FAILURE:
			return [];
		case DELETE_USER:
			return state;
		case DELETE_USER_SUCCESS:
			return state.filter((element) => element.id !== action.payload);
		case DELETE_USER_FAILURE:
			return [];
		default:
			return state;
	}
}
