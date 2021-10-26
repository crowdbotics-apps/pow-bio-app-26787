import { put, call, all, spawn, takeEvery } from 'redux-saga/effects';
import { signupServices } from '../services/signup';
import * as types from '../constants/signup';
import * as actions from '../actions/signup';

// Sign up
function* apiSignupRequestWorker(action) {
    try {

        const result = yield call(signupServices.apiSignupRequest, action);

        yield put(actions.apiSignupRequestSuccess(result, action));

    } catch (err) {
        yield put(actions.apiSignupRequestFailed(err, action));
    }
}

function* apiSignupRequestWatcher() {
    yield takeEvery(types.API_SIGNUP_REQUEST, apiSignupRequestWorker);
}

// Read more information about root sagas in the documentation
// https://redux-saga.js.org/docs/advanced/RootSaga.html
export default function* signupRootSaga() {
    const sagas = [
        apiSignupRequestWatcher,
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
