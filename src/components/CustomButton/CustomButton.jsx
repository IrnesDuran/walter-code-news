import React from 'react';
import { withRouter } from 'react-router-dom';


const CustomButton =(props) => {

    const {children,onPlacedOrder,...otherProps} = props;
    return(
        <button 
        onClick={onPlacedOrder}
        className="h-12 w-40 bg-primary text-white 
        text-center text-base uppercase font-medium px-5 mx-1 border-solid border border-primary 
        hover:bg-white hover:text-black hover:border-solid hover:border"
        {...otherProps} 
        >
            Load more
            {children}
        </button>
    )};

export default withRouter(CustomButton);