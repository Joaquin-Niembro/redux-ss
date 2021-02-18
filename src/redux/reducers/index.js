import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
const rootReducer = combineReducers({
	Users: usersReducer,
});
export default rootReducer;
