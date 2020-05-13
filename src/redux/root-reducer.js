import { combineReducers } from 'redux';

import newsReducer from './news/news.reducer';


const rootReducer = combineReducers({
    articles: newsReducer

});

export default rootReducer;