import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ProfileInfoDescription from '../profile-info-description'

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<ProfileInfoDescription /> unit test', () => {
    it('renders correctly', () => {
        const description = 'A simplate description';
        const wrapper = shallow(<ProfileInfoDescription description={description} />);
        expect(wrapper.find('div').prop('dangerouslySetInnerHTML'))
            .toEqual({ __html: 'A simplate description' });
        expect(wrapper).toMatchSnapshot();
    });
});