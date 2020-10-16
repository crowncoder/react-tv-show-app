import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ErrorBoundary from '../';
const WrappedComponent = () => null;

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('ErrorBoundary unit test', () => {
    it('should display an ErrorMessage if wrapped component throws', () => {
        const wrapper = shallow(
            <ErrorBoundary>
                <WrappedComponent />
            </ErrorBoundary>
        );

        const error = new Error('test error');
        wrapper.find(WrappedComponent).simulateError(error);
        expect(wrapper.find('h2').text()).toEqual('Something went wrong.');
        expect(wrapper.find('details').text().includes('test error')).toBe(true);
    });
})