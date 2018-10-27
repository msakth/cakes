import React from 'react';
import {shallow} from 'enzyme';

import  CakeListComponent  from '../components/cakeListComponent.jsx';

describe('cake list component', () => {

    beforeEach(() => {
        shallow(<CakeListComponent />);
    })

    it('CakeListComponent should render without crashing', () => {
        shallow(<CakeListComponent />);
    });

    
});