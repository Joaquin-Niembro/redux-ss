import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from './reducers'
const store = createStore(rootReducer, applyMiddleware(thunk));

//const middleware = store => next => action => 'some action'
export default store;