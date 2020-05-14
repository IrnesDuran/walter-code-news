import { searchActionTypes } from './search.types';

const INITIAL_STATE = {
    searchField:''
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case searchActionTypes.SET_SEARCHFIELD:
            return {...state,
                searchField: action.text
            }; 
        case searchActionTypes.CLEAR_SEARCHFIELD:
            return {...state,
                searchField: ''
            };           
        default:
            return state;
    }
};

export default searchReducer;


