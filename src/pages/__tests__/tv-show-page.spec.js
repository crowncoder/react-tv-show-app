import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import TvShowPage from '../tv-show-page';
import { TvShow } from '../../components';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<TvShowPage /> unit test', () => {
    it('render correctly', () => {
        const wrapper = shallow(<TvShowPage />);
        expect(wrapper.find(TvShow)).toHaveLength(1);
    });
})