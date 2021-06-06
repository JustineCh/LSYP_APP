import { createStore, combineReducers, applyMiddleware } from 'redux';
import users from './core/reducers/UsersReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { usersSaga } from '../src/core/sagas/usersSaga';


const reducer = combineReducers({ users });

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(usersSaga);

export default store;
