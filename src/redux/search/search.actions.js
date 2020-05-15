import {searchActionTypes} from './search.types';

export const setSearchField = (text) => ({
    type: searchActionTypes.SET_SEARCHFIELD,
    payload: text
});


export const clearSearchField = () => ({
    type: searchActionTypes.CLEAR_SEARCHFIELD,
});

export const setSortBy = (text) => ({
    type: searchActionTypes.SET_SORT_BY,
    payload: text
});



