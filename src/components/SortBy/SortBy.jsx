import React from "react";
import {connect} from 'react-redux';

import { searchActionTypes } from '../../redux/search/search.types';


const SortBy = (props) => {
return(
        <form
        className="bg-transparent border border-white rounded-md py-1 px-3 mx-4 my-1  text-white" >
            <label>
            Sort by:   
                <select value={props.sortBy} onChange={props.setSearchField}
                className="bg-transparent outline-none">
                    <option className="text-primary p-2" value="publishedAt">Published at</option>
                    <option className="text-primary" value="relevancy">Relevancy</option>
                    <option className="text-primary" value="popularity">Popularity</option>
                </select>
            </label>
        </form>
)};

const mapStateToProps = state => {
    return{
        sortBy:state.search.sortBy
    };
};
    
const mapDispatchToProps =  dispatch => {
    return{
        setSearchField: e =>{
            dispatch({type:searchActionTypes.SET_SORT_BY, text: e.target.value});
        },
    };
};
      
    
export default connect(mapStateToProps, mapDispatchToProps)(SortBy);