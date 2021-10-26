import { put, call, all, spawn, takeEvery } from 'redux-saga/effects';
import { loginServices } from '../services/login';
import * as types from '../constants/login';
import * as actions from '../actions/login';

// Contact Us
function* apiLoginRequestWorker(action) {
    try {
        const result = yield call(loginServices.apiLoginRequest, action);
        yield put(actions.apiLoginRequestSuccess(result, action));
    } catch (err) {
        yield put(actions.apiLoginRequestFailed(err, action));
    }
}

function* apiLoginRequestWatcher() {
    yield takeEvery(types.API_LOGIN_REQUEST, apiLoginRequestWorker);
}

// Read more information about root sagas in the documentation
// https://redux-saga.js.org/docs/advanced/RootSaga.html
export default function* loginRootSaga() {
    const sagas = [
        apiLoginRequestWatcher,
    ];

    yield all(
        sagas.map(saga =>
            spawn(function* () {
                while (true) {
                    try {
                        yield call(saga);
                        break;
                    } catch (e) {
                        console.log(e);
                    }
                }
            }),
        ),
    );
}
