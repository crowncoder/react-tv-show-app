import React from 'react'
import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../../../redux/rootReducer'
import EpisodeList from '../episode-list';
import { episodeService } from '../../../services';
import * as episodeReduxModule from '../../../redux/modules/episodes';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<EpisodeList /> unit test', () => {
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
            <EpisodeList />
        </Provider>
    );

    it('should call getEpisoe func', () => {
        const spyGetTvShowInfo = jest.spyOn(episodeReduxModule, 'getEpisodeList');
        getWrapper();
        expect(spyGetTvShowInfo).toHaveBeenCalledWith(1)
    });

    it('should call getEpisoe func', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.MuiTableCell-head').first().text()).toEqual('Episode Name');
    });
});