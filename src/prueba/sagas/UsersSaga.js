import { takeEvery, call, put, take,  } from 'redux-saga/effects';
import {
	getUsersSuccess,
	getUsersFailure,
	createUserFailure,
	createUserSuccess,
	GET_USERS,
	CREATE_USER,
	DELETE_USER,
	deleteUserFailure,
	deleteUserSuccess,
} from '../actions/usersActions';
import {
	usersFetch,
	createUserFetch,
	deleteUserFetch,
} from '../api/usersRequests';

function* getUsersWorker() {
	try {
		const res = yield call(usersFetch);
		yield put(getUsersSuccess(res.data.data));
	} catch (error) {
		yield put(getUsersFailure(error));
	}
}
function* createUserWorker({ payload }) {
	try {
		const res = yield call(createUserFetch, payload);
		yield put(createUserSuccess(res.data));
	} catch (error) {
		yield put(createUserFailure(error));
	}
}
function* deleteUserWorker({ payload }) {
	try {
		yield call(deleteUserFetch, payload);
		yield put(deleteUserSuccess(payload));
	} catch (error) {
		yield put(deleteUserFailure(error));
	}
}
export default function* usersWatcher() {
	yield take(GET_USERS);
	yield call(getUsersWorker);
	yield takeEvery(CREATE_USER, createUserWorker);
	yield takeEvery(DELETE_USER, deleteUserWorker);
}
