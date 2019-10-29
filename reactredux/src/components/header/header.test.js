import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './index';
import { findByDataId } from '../../utils';
Enzyme.configure({
    adapter: new Adapter()
});

const setup = (props={}) => {
    return shallow(<Header {...props} />);
}

describe("Header Component", () => {
    let component;

    beforeAll(() => {
        component = setup();
    })

    it ("Header is being rendered", () => {
        const ele = component.find(`[data-test-id='header']`);
        expect(ele.length).toEqual(1);
    });
    
    it ("Logo in Header shoudl render", () => {
        const ele = component.find(`[data-test-id='img']`);
        expect(ele.length).toEqual(1);
    });
});
