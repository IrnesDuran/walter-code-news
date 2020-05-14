import { combineReducers } from 'redux';

import newsReducer from './news/news.reducer';
import searchReducer from './search/search.reducer';


const rootReducer = combineReducers({
    articles: newsReducer,
    search: searchReducer
});

export default rootReducer;