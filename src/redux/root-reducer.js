import { combineReducers } from 'redux';

import pizzaReducer from './news/news.reducer';


const rootReducer = combineReducers({
    pizza: pizzaReducer

});

export default rootReducer;