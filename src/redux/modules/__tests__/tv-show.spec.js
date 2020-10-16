import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import { apiClient } from '../../../services/networkService';
import tvShowReducer, { tvShowActions, getTvShowInfo } from '../tv-show'
import { tvShowService } from '../../../services';;

describe('tv show reducer', () => {
    const initialState = {
        tvShowInfo: {},
        isFetching: false
    };

    it('should return the initial state', () => {
        expect(tvShowReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle getTvShowRequest action ', () => {
        expect(
            tvShowReducer(undefined, tvShowActions.getTvShowRequest())
        ).toEqual({ ...initialState, isFetching: true });
    });

    it('should handle getTvShowSuccess action ', () => {
        const tvShowInfoData = {
            id: 1,
            name: 'The Powerpuff Girls',
            language: 'English',
            type: 'Animation',
            status: 'Runing',
            summary: 'This is the simple summary'
        }
        expect(
            tvShowReducer(undefined, tvShowActions.getTvShowSuccess(tvShowInfoData))
        ).toEqual({
            ...initialState,
            tvShowInfo: tvShowInfoData,
            isFetching: false
        });
        const customizedState = {
            tvShowInfo: {
                id: 1,
                webChannel: null,
                weight: 43
            }
        }
        expect(
            tvShowReducer(customizedState, tvShowActions.getTvShowSuccess(tvShowInfoData))
        ).toEqual({
            ...customizedState,
            tvShowInfo: tvShowInfoData,
            isFetching: false
        });
    });

    it('should handle getTvShowError action ', () => {
        expect(
            tvShowReducer(undefined, tvShowActions.getTvShowError(new Error()))
        ).toEqual({ ...initialState, isFetching: false });
    });
});

describe('async actions', () => {
    const middlewares = [thunk.withExtraArgument({ tvShowService })];
    const mockStore = configureMockStore(middlewares);
    const mock = new MockAdapter(apiClient);
    afterEach(() => { mock.reset(); });

    it('creates GET_TV_SHOW_SUCCESS when fetching the tv show has been done', () => {
        const mockResponose = {
            id: 1, name: 'Under the Dome', status: 'ended'
        };
        mock.onGet('https://api.tvmaze.com/shows/1').replyOnce(200, mockResponose);
        const expectedActions = [
            tvShowActions.getTvShowRequest(),
            tvShowActions.getTvShowSuccess(mockResponose)
        ]
        const store = mockStore({ tvShowInfo: {}, isFetching: false })

        return store.dispatch(getTvShowInfo(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates GET_TV_SHOW_ERROR when fetching the tv show catch errors', () => {
        mock.onGet('https://api.tvmaze.com/shows/1').replyOnce(500, {});
        const expectedActions = [
            tvShowActions.getTvShowRequest(),
            tvShowActions.getTvShowError(new Error('Request failed with status code 500'))
        ]
        const store = mockStore({ tvShowInfo: {}, isFetching: false })
        return store.dispatch(getTvShowInfo(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
