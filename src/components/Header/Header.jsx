import React from 'react';
import{ connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FormInput from '../FormInput/FormInput';
import SortBy from '../SortBy/SortBy';

const Header = (props) => {
    return(
        <div className="bg-primary p-4 fixed w-full z-10 flex flex-col sm:flex-row items-center justify-between ">
            <a href="/">
                <img src="https://waltercode.com/wp-content/uploads/2019/11/logo-min.png" alt="WalterCode Logo"/>
            </a>
            {props.location.pathname==="/" ? 
            (<div className="flex flex-col sm:flex-row items-center justify-center"> 
                {props.search.length ? (<SortBy/>) :null}
                <FormInput/>
            </div>) : null }
        </div>
    )
};

const mapStateToProps = state => {
    return{
        search:state.search.searchField,
    }
};


export default withRouter(connect(mapStateToProps)(Header));
