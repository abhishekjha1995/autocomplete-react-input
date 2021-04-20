/********Library or Third party dependency************/
import { all, takeLatest, call, put } from 'redux-saga/effects';
/********custom components and methods***************/
import { getData } from '../utility/apiUtility';

/**
 * to create a watcher for the characters saga
 */
function* getCharactersSaga() {
    yield takeLatest("GET_CHARACTERS_REQUEST", getCharacters);
}

/**
 * to call success/failure action on the basis of api response
 * 
 * @param {Object} action 
 */
function* getCharacters({ endpoint, params }) {
    const response = yield call(getData, endpoint, params);

    if (response.error) {
        yield put({
            type: "GET_CHARACTERS_FAIL",
            payload: response.error
        });
    } else if (response) {
        yield put({
            type: "GET_CHARACTERS_SUCCESS",
            payload: response.data || null
        });
    }
}

export default function* rootSaga() {
    try {
        yield all([
            getCharactersSaga()
        ])
    } catch (e) {
        console.error(e);
    }
}