import React from 'react';

import {connect} from 'react-redux';

const FormInput =({setSearchField,search}) => {
    console.log(search)
return(
    <div className='group text-white' >
        <input 
            className=' bg-transparent outline-none border border-white rounded-md py-1 px-3 focus:border-teal-500'
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
            dispatch({type:'SET_SEARCHFIELD', text: e.target.value});
        },
    };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
