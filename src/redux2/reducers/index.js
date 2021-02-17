import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer'
const rootReducer = combineReducers({
    Users: UsersReducer
});
// {Users: initialState, AuthReducer}
export default rootReducer;
