import React from 'react';
import './CustomButton.styles.scss';

const CustomButton =(props) => {

    const {children,onLoadMore,buttonLoader,...otherProps} = props;
    return(
        <button
        onClick={onLoadMore}
        className="h-12 w-40 bg-primary text-white 
        text-center text-base uppercase font-medium px-5 mx-1 border-solid border border-primary 
        hover:bg-white hover:text-black hover:border-solid hover:border relative"
        {...otherProps} >
        {children}
        {buttonLoader ? (<div className="ButtonLoader">Loading...</div>) : null}
        </button>
    )};

export default CustomButton;