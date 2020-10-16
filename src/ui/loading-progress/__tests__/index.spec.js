import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import LoadingProgress from '../';
import { CircularProgress } from '@material-ui/core';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('LoadingProgress unit test', () => {
    it('render correctly', () => {
        const wrapper = shallow(<LoadingProgress />);
        expect(wrapper.find(CircularProgress)).toHaveLength(1);
    });
})