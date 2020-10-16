import React from 'react'
import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import * as reactRouterDomModule from 'react-router-dom';
import thunk from 'redux-thunk'
import rootReducer from '../../../redux/rootReducer'
import EpisodeDetail from '../';
import { episodeService } from '../../../services';
import * as EpisodeReduxModule from '../../../redux/modules/episodes';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<EpisodeDetail /> unit test', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    const mockStore = createStore(rootReducer,
        applyMiddleware(thunk.withExtraArgument({
            episodeService,
        }))
    );
    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <EpisodeDetail />
        </Provider>
    );

    it('should call getEpisode func', () => {
        const spyGetEpisodeInfo = jest.spyOn(EpisodeReduxModule, 'getEpisode');
        getWrapper();
        expect(spyGetEpisodeInfo).toHaveBeenCalledWith(1)
    });

    it('should not call getEpisode func if history data exists', () => {
        const spyGetEpisodeInfo = jest.spyOn(EpisodeReduxModule, 'getEpisode');
        jest.spyOn(reactRouterDomModule, 'useLocation')
        .mockReturnValue({state:{episode:{id:1,name:'Hakaka'}}});
        const wrapper = getWrapper();
        expect(spyGetEpisodeInfo).not.toHaveBeenCalled();
        expect(wrapper.text().includes('Hakaka')).toBe(true);
    })
});