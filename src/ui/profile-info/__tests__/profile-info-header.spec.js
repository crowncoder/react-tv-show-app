import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ProfileInfoHeader from '../profile-info-header'

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<ProfileInfoDescription /> unit test', () => {
    it('renders correctly', () => {
        const name = 'James';
        const wrapper = shallow(<ProfileInfoHeader name={name} />);
        expect(wrapper.find('h1').text()).toEqual(name);
        expect(wrapper).toMatchSnapshot();
    });
});