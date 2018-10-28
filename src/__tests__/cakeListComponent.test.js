import React from 'react';
import {shallow} from 'enzyme';

import  CakeListComponent  from '../components/cakeListComponent.jsx';

describe('cake list component', () => {
    
    const cakes = [{name:'firstcake'}];
   
    beforeEach(() => {
        shallow(<CakeListComponent cakes={cakes} />);
    })

    it('CakeListComponent should render without crashing', () => {
        shallow(<CakeListComponent cakes={cakes}/>);
    });
 
});