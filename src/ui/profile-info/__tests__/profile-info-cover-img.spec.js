import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ProfileInfoCoverImg from '../profile-info-cover-img'

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<ProfileInfoCoverImg /> unit test', () => {
  it('renders correctly', () => {
    const imageInfo = { medium: 'abc.com/image' };
    const wrapper = shallow(<ProfileInfoCoverImg image={imageInfo} />);
    expect(wrapper.find('img').prop('src')).toEqual('abc.com/image');
    expect(wrapper).toMatchSnapshot();
  });
});