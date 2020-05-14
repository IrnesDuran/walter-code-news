import React from 'react';

import FormInput from '../FormInput/FormInput';

const Header = () => {
    return(
        <div className="bg-primary p-4 fixed w-full z-10 flex items-center justify-between ">
            <a href="/">
                <img src="https://waltercode.com/wp-content/uploads/2019/11/logo-min.png" alt="WalterCode Logo"/>
            </a>
            <div> 
                <FormInput/>
            </div>
        </div>
    )};

export default Header;
