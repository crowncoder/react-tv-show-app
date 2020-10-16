import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import TvShowInfo from '../';
import ProfileInfo from '../profile-info';
import EpisodeList from '../episode-list';


Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<TvShowInfo /> unit test', () => {
    const getWrapper = () => shallow(
            <TvShowInfo />
    );

    it('should render correctly', () => {
        const wrapper = getWrapper();
        expect(wrapper.find(ProfileInfo)).toHaveLength(1);
        expect(wrapper.find(EpisodeList)).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });
});