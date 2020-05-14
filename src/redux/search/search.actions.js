import {searchActionTypes} from './search.types';

export const setSearchField = (text) => ({
    type: searchActionTypes.SET_SEARCHFIELD,
    payload: text
});


export const clearSearchField = (text) => ({
    type: searchActionTypes.CLEAR_SEARCHFIELD,
});

