import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import EpisodeDetailPage from '../episode-detail-page';
import { EpisodeDetail } from '../../components';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<EpisodeDetailPage /> unit test', () => {
    it('render correctly', () => {
        const wrapper = shallow(<EpisodeDetailPage />);
        expect(wrapper.find(EpisodeDetail)).toHaveLength(1);
    });
})