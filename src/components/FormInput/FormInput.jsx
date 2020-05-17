import React from 'react';

import {connect} from 'react-redux';

import { searchActionTypes } from '../../redux/search/search.types';

export const FormInput =({setSearchField,search}) => {

  return(
    <div className='group text-white w-40 m-1' >
        <input 
            className=' bg-transparent outline-none border border-white rounded-md py-1 px-3 focus:border-teal-500 w-full'
            onChange={setSearchField}
            name="search" 
            type='search'
            value={search}
            placeholder="Search news"/>   
    </div>
)};  

const mapStateToProps = state => {
    return{
      search:state.search.searchField
    };
  };

const mapDispatchToProps =  dispatch => {
    return{
        setSearchField: e =>{
            dispatch({type:searchActionTypes.SET_SEARCHFIELD, text: e.target.value});
        },
    };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
