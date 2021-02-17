import {
	GET_USERS,
	GET_USERS_SUCCESS,
	GET_USERS_FAILURE,
} from '../actions/usersActions';
const initialState = {
	users: [],
	loading: false,
};
function UsersReducer(state = initialState, action) {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				loading: true,
			};
		case GET_USERS_SUCCESS:
			return {
				loading: false,
				users: action.payload,
			};
		case GET_USERS_FAILURE:
			return {
				loading: false,
				users: [],
			};		
		default:
			return state;
	}
}

export default UsersReducer;
/*action = {
    type: 'SOME_TYPE',
    payload?: {}
}*/
