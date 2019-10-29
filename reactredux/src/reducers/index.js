import LoginReducer from './loginreducer';
import MathReducer from './mathreducer';
import { combineReducers } from 'redux';

const RootReducers = combineReducers({
    login: LoginReducer,
    math: MathReducer
});

export default RootReducers;
