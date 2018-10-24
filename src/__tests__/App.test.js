import App from '../components/App.jsx';
import {shallow} from 'enzyme';
import React from 'react';


describe('App Tsting', () => {
    
    it('should render App without crashing', () => {
        shallow(<App/>)
    });

});