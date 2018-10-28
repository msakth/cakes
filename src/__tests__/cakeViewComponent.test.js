import React from 'react';
import CakeViewComponent from '../components/cakeViewComponent.jsx';
import {shallow} from 'enzyme';

describe('Cake View Component', () => {      
  
    beforeEach(() => {
        shallow(<CakeViewComponent/>);
    });
  
    it('cake view component renders without crashing', () => {
        shallow(<CakeViewComponent/>);
    });

});