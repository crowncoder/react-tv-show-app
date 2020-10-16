// Action Types
const GET_EPISODE_LIST_REQUEST = 'GET_EPISODE_LIST_REQUEST';
const GET_EPISODE_LIST_SUCCESS = 'GET_EPISODE_LIST_SUCCESS';
const GET_EPISODE_LIST_ERROR = 'GET_EPISODE_LIST_ERROR';

const GET_EPISODE_REQUEST = 'GET_EPISODE_REQUEST';
const GET_EPISODE_SUCCESS = 'GET_EPISODE_SUCCESS';
const GET_EPISODE_ERROR = 'GET_EPISODE__ERROR';


// Initial state
const initialState = {
    episodeList: [],
    episode: {},
    isFetching: false
};
// Reducer
const episodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EPISODE_LIST_REQUEST: {
            return { ...state, isFetching: true };
        }
        case GET_EPISODE_LIST_SUCCESS: {
            return { ...state, episodeList: action.episodeList, isFetching: false };
        }
        case GET_EPISODE_LIST_ERROR: {
            return { ...state, isFetching: false };
        }
        case GET_EPISODE_REQUEST: {
            return { ...state, isFetching: true };
        }
        case GET_EPISODE_SUCCESS: {
            return { ...state, episode: action.episode, isFetching: false };
        }
        case GET_EPISODE_ERROR: {
            return { ...state, isFetching: false };
        }
        default: {
            return state;
        }
    }
}
// Action Creators
export const episodeActions = {
    getEpisodeListRequest: () => ({
        type: GET_EPISODE_LIST_REQUEST
    }),
    getEpisodeListSuccess: episodeList => ({
        type: GET_EPISODE_LIST_SUCCESS,
        episodeList
    }),
    getEpisodeListError: error => ({
        type: GET_EPISODE_LIST_ERROR,
        error
    }),
    getEpisodeRequest: () => ({
        type: GET_EPISODE_REQUEST
    }),
    getEpisodeSuccess: episode => ({
        type: GET_EPISODE_SUCCESS,
        episode
    }),
    getEpisodeError: error => ({
        type: GET_EPISODE_ERROR,
        error
    }),
};
// Side effects
export function getEpisodeList(tvShowId) {
    return (dispatch, getState, { episodeService }) => {
        const {
            getEpisodeListRequest,
            getEpisodeListSuccess,
            getEpisodeListError,
        } = episodeActions;
        dispatch(getEpisodeListRequest());
        return episodeService.getEpisodeList(tvShowId)
            .then(({ data }) => {
                dispatch(getEpisodeListSuccess(data));
            })
            .catch(error => dispatch(getEpisodeListError(error)));
    };
}

export function getEpisode(episodeId) {
    return (dispatch, getState, { episodeService }) => {
        const {
            getEpisodeRequest,
            getEpisodeSuccess,
            getEpisodeError,
        } = episodeActions;
        dispatch(getEpisodeRequest());
        return episodeService.getEpisode(episodeId)
            .then(({ data }) => {
                dispatch(getEpisodeSuccess(data));
            })
            .catch(error => dispatch(getEpisodeError(error)));
    };
}

export default episodeReducer;
