import { call, take, takeEvery, put, fork } from 'redux-saga/effects';
import { GET_USERS, CREATE_USER, DELETE_USER } from '../actions/types';
import {
	getUsersSuccess,
	getUsersFailure,
	createUserSuccess,
	createUserFailure,
	deleteUserSuccess,
	deleteUserFailure,
} from '../actions/usersActions';
import {
	getUsersFetch,
	createUserFetch,
	deleteUserFetch,
} from '../api/usersApi';
function* getUsersWorker() {
	try {
		const res = yield call(getUsersFetch);
		yield put(getUsersSuccess(res.data.data));
	} catch (error) {
		yield put(getUsersFailure(error.message));
	}
}
function* createUserWorker({ payload }) {
	try {
		const res = yield call(createUserFetch, payload);
		yield put(createUserSuccess(res.data));
	} catch (error) {
		yield put(createUserFailure(error.message));
	}
}
function* deleteUserWorker({ payload }) {
	try {
		yield call(deleteUserFetch, payload);
		yield put(deleteUserSuccess(payload));
	} catch (error) {
		yield put(deleteUserFailure(error.message));
	}
}
export default function* usersWatcher() {
	/*yield takeEvery(GET_USERS, getUsersWorker);
	yield takeEvery(CREATE_USER, createUserWorker);
	yield takeEvery(DELETE_USER, deleteUserWorker);*/
	while (true) {
		yield take(GET_USERS);
		yield call(getUsersWorker);
		const createUserAction = yield take(CREATE_USER);
		yield call(createUserWorker, createUserAction);
		const deleteUserAction = yield take(DELETE_USER);
		yield call(deleteUserWorker, deleteUserAction);
	}
}
