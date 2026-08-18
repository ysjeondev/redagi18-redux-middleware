import { startloading, finishloading } from "../modules/loading";

export default function createRequestThunk(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function (params) {
        return async function (dispatch) {
            dispatch({ type });
            dispatch(startloading(type));
            try {
                const response = await request(params);

                dispatch({
                    type: SUCCESS,
                    payload: response.data
                });
                dispatch(finishloading(type))
            } catch (e) {
                dispatch({
                    type: FAILURE,
                    payload: e,
                    error: true
                });
               dispatch(finishloading(type));
                throw e;
            }
        };
    };
}