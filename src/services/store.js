/********Library or Third party dependency************/
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
/********custom components and methods***************/
import reducer from "./reducer";
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware(),
    store = createStore(
        reducer,
        {},
        applyMiddleware(sagaMiddleware)
    )

sagaMiddleware.run(rootSaga);

export default store;