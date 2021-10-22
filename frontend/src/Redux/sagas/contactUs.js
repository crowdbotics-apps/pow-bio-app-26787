import { put, call, all, spawn, takeEvery } from 'redux-saga/effects';
import { contactUsServices } from '../services/contactUs';
import * as types from '../constants/contactUs';
import * as actions from '../actions/contactUs';

// Contact Us
function* apiContactUsRequestWorker(action) {
    try {
        const result = yield call(contactUsServices.apiContactUsRequest, action);
        yield put(actions.apiContactUsRequestSuccess(result, action));
    } catch (err) {
        yield put(actions.apiContactUsRequestFailed(err, action));
    }
}

function* apiContactUsRequestWatcher() {
    yield takeEvery(types.API_CONTACT_US_REQUEST, apiContactUsRequestWorker);
}

// Read more information about root sagas in the documentation
// https://redux-saga.js.org/docs/advanced/RootSaga.html
export default function* contactUsRootSaga() {
    const sagas = [
        apiContactUsRequestWatcher,
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
