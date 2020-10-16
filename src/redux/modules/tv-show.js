// Action Types
const GET_TV_SHOW_INFO_REQUEST = 'GET_TV_SHOW_INFO_REQUEST';
const GET_TV_SHOW_INFO_SUCCESS = 'GET_TV_SHOW_INFO_SUCCESS';
const GET_TV_SHOW_INFO_ERROR = 'GET_TV_SHOW_INFO_ERROR';

// Initial state
const initialState = {
    tvShowInfo: {},
    isFetching: false
};
// Reducer
const tvShowReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TV_SHOW_INFO_REQUEST: {
            return { ...state, isFetching: true };
        }
        case GET_TV_SHOW_INFO_SUCCESS: {
            return { ...state, tvShowInfo: action.tvShowInfo, isFetching: false };
        }
        case GET_TV_SHOW_INFO_ERROR: {
            return { ...state, isFetching: false };
        }
        default: {
            return state;
        }
    }
}
// Action Creators
export const tvShowActions = {
    getTvShowRequest: () => ({
        type: GET_TV_SHOW_INFO_REQUEST
    }),
    getTvShowSuccess: tvShowInfo => ({
        type: GET_TV_SHOW_INFO_SUCCESS,
        tvShowInfo
    }),
    getTvShowError: error => ({
        type: GET_TV_SHOW_INFO_ERROR,
        error
    }),
};
// Side effects
export function getTvShowInfo(tvShowId) {
    return (dispatch, getState, { tvShowService }) => {
        const {
            getTvShowRequest,
            getTvShowSuccess,
            getTvShowError,
        } = tvShowActions;
        dispatch(getTvShowRequest());
        return tvShowService.getTvShowInfo(tvShowId)
            .then(({ data }) => {
                dispatch(getTvShowSuccess(data));
            })
            .catch(error => dispatch(getTvShowError(error)));
    };
}

export default tvShowReducer;
