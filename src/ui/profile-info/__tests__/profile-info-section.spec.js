import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ProfileInfoSection from '../profile-info-section'
import ProfileInfoCoverImg from '../profile-info-cover-img'
import ProfileInfoDescription from '../profile-info-description'

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<ProfileInfo /> unit test', () => {
  it('renders correctly', () => {
    const sectionInfo = { image: { medium: 'abc.com/image' }, summary: 'a simple summary' }
    const wrapper = shallow(<ProfileInfoSection sectionInfo={sectionInfo} />);
    expect(wrapper.find(ProfileInfoCoverImg)).toHaveLength(1);
    expect(wrapper.find(ProfileInfoDescription)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});