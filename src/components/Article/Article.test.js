import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Article from './Article';

describe ("Article component test",()=> {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Article/>);

    });
    



    it('should test Article component snapshot',()=>{
        expect(wrapper).toMatchSnapshot();
    });

})