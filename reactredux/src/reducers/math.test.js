import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MathReducer from './mathreducer';
import { INCREMENT, DECREMENT } from '../actions';
Enzyme.configure({
    adapter: new Adapter()
});

describe("Math Reducer", () => {
    
    it("should return default state", () => {
        const state = MathReducer(0, {});
        const expectedValue = 0;
        expect(state).toEqual(expectedValue);
    });

    it("should return the incremented state", () => {
        const state = MathReducer(0, { type: INCREMENT });
        const expectedValue = 1;
        expect(state).toEqual(expectedValue);
    });

    it("should return the decremented state", () => {
        const state = MathReducer(0, { type: DECREMENT });
        const expectedValue = -1;
        expect(state).toEqual(expectedValue);
    });
});
