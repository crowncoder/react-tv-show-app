import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import { apiClient } from '../../../services/networkService';
import episodesReducer, {
    episodeActions,
    getEpisode,
    getEpisodeList
} from '../episodes'
import { episodeService } from '../../../services';;

describe('episode reducer', () => {
    const initialState = {
        episodeList: [],
        episode: {},
        isFetching: false
    };

    it('should return the initial state', () => {
        expect(episodesReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_EPISODE_LIST_REQUEST action ', () => {
        expect(
            episodesReducer(undefined, episodeActions.getEpisodeListRequest())
        ).toEqual({ ...initialState, isFetching: true });
    });

    it('should handle GET_EPISODE_LIST_SUCCESS action ', () => {
        const episodeListData = [{
            id: 1,
            name: 'Pilot',
            season: 'English',
            type: 'regular',
            summary: 'This is the simple summary'
        }]
        expect(
            episodesReducer(undefined, episodeActions.getEpisodeListSuccess(episodeListData))
        ).toEqual({
            ...initialState,
            episodeList: episodeListData,
            isFetching: false
        });
        const customizedState = {
            episodeepisodeList: [{
                id: 1,
                runtime: 60,
                number: 1
            }]
        }
        expect(
            episodesReducer(customizedState, episodeActions.getEpisodeListSuccess(episodeListData))
        ).toEqual({
            ...customizedState,
            episodeList: episodeListData,
            isFetching: false
        });
    });

    it('should handle GET_EPISODE_LIST_ERROR action ', () => {
        expect(
            episodesReducer(undefined, episodeActions.getEpisodeListError(new Error()))
        ).toEqual({ ...initialState, isFetching: false });
    });

    it('should handle GET_EPISODE_REQUEST action ', () => {
        expect(
            episodesReducer(undefined, episodeActions.getEpisodeRequest())
        ).toEqual({ ...initialState, isFetching: true });
    });
    
    it('should handle GET_EPISODE_SUCCESS action ', () => {
        const episodeData = {
            id: 1,
            name: 'Pilot',
            season: 'English',
            type: 'regular',
            summary: 'This is the simple summary'
        }
        expect(
            episodesReducer(undefined, episodeActions.getEpisodeSuccess(episodeData))
        ).toEqual({
            ...initialState,
            episode: episodeData,
            isFetching: false
        });
        const customizedState = {
            episode: {
                id: 1,
                runtime: 60,
                number: 1
            }
        }
        expect(
            episodesReducer(customizedState, episodeActions.getEpisodeSuccess(episodeData))
        ).toEqual({
            ...customizedState,
            episode: episodeData,
            isFetching: false
        });
    });
    
    it('should handle getEpisodeError action ', () => {
        expect(
            episodesReducer(undefined, episodeActions.getEpisodeError(new Error()))
        ).toEqual({ ...initialState, isFetching: false });
    });
});

describe('episode async actions', () => {
    const middlewares = [thunk.withExtraArgument({ episodeService })];
    const mockStore = configureMockStore(middlewares);
    const mock = new MockAdapter(apiClient);
    const initialState = {
        episodeList: [],
        episode: {},
        isFetching: false
    };
    afterEach(() => { mock.reset(); });

    it('creates GET_EPISODE_LIST_SUCCESS when fetching the episode list has been done', () => {
        const mockResponose = [{
            id: 1,
            name: 'Pilot',
            season: 'English',
            type: 'regular',
            summary: 'This is the simple summary'
        }]
        mock.onGet('https://api.tvmaze.com/shows/1/episodes').replyOnce(200, mockResponose);
        const expectedActions = [
            episodeActions.getEpisodeListRequest(),
            episodeActions.getEpisodeListSuccess(mockResponose)
        ]
        const store = mockStore(initialState)

        return store.dispatch(getEpisodeList(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates GET_EPISODE_LIST_ERROR when fetching the episode list show catch errors', () => {
        mock.onGet('https://api.tvmaze.com/shows/1/episodes').replyOnce(500, {});
        const expectedActions = [
            episodeActions.getEpisodeListRequest(),
            episodeActions.getEpisodeListError(new Error('Request failed with status code 500'))
        ]
        const store = mockStore(initialState);
        return store.dispatch(getEpisodeList(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates GET_EPISODE_SUCCESS when fetching the episode has been done', () => {
        const mockResponose = {
            id: 1,
            name: 'Pilot',
            season: 'English',
            type: 'regular',
            summary: 'This is the simple summary'
        };
        mock.onGet('https://api.tvmaze.com/episodes/1').replyOnce(200, mockResponose);
        const expectedActions = [
            episodeActions.getEpisodeRequest(),
            episodeActions.getEpisodeSuccess(mockResponose)
        ]
        const store = mockStore(initialState)

        return store.dispatch(getEpisode(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates GET_TV_SHOW_ERROR when fetching the episodes catch errors', () => {
        mock.onGet('https://api.tvmaze.com/episodes/1').replyOnce(500, {});
        const expectedActions = [
            episodeActions.getEpisodeRequest(),
            episodeActions.getEpisodeError(new Error('Request failed with status code 500'))
        ]
        const store = mockStore(initialState);
        return store.dispatch(getEpisode(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
