import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';

//액션 타입
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

//액션 생성 함수
export const getPost = createAction(
    GET_POST,
    id => id
);
export const getUsers = createAction(GET_USERS);
    // API 요청 Saga 생성
    const getPostSaga = createRequestSaga(GET_POST, api.getPost);
    const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

    //Saga
    export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}

//초기 상태
const initialState = {
    post: null,
    users: null
};

//Reducer
const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            post: action.payload
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            users: action.payload
        })
    },
    initialState
);

export default sample;