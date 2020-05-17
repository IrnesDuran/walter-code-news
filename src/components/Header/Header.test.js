import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Header from './Header';


describe ("Header component test",()=> {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header/>);
    });
    

    it('should test Header component snapshot',()=>{
        expect(wrapper).toMatchSnapshot();
    });
})