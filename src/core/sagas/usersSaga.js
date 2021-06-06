import { call, put, takeLatest } from 'redux-saga/effects';
// import { fetchUsers } from '../hooks/useUsers';

import {
  usersLoad,
} from '../reducers/UsersReducer';

// function* refreshUsers() {
//   try {
//     const results = yield call(fetchUsers);
//     yield put(usersLoad(results));
//   } catch (error) {
//    //  to be created
//   }
// }



export function* usersSaga() {
  yield takeLatest('PLAYLISTS_REFRESH', refreshUsers);
}
