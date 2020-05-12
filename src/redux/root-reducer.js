import { combineReducers } from 'redux';

import pizzaReducer from '../redux/pizza/pizza.reducer';


const rootReducer = combineReducers({
    pizza: pizzaReducer

});

export default rootReducer;