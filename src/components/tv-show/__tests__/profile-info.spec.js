import React from 'react'
import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../../../redux/rootReducer'
import ProfileInfo from '../profile-info';
import { tvShowService } from '../../../services';
import * as tvShowReduxModule from '../../../redux/modules/tv-show';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<ProfileInfo /> unit test', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    const mockStore = createStore(rootReducer,
        applyMiddleware(thunk.withExtraArgument({
            tvShowService,
        }))
    );
    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <ProfileInfo />
        </Provider>
    );

    it('should call getTvShowInfo func', () => {
        const spyGetTvShowInfo = jest.spyOn(tvShowReduxModule, 'getTvShowInfo');
        getWrapper();
        expect(spyGetTvShowInfo).toHaveBeenCalledWith(1)
    });
});