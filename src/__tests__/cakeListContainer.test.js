import React from 'react';
import {shallow} from 'enzyme';
import CakeListContainer from '../containers/cakeListContainer.jsx';
import configureStore from '../store/configureStore';

describe('Cake List Container', () => {

    const store = configureStore();

    it('cake container renders without crashing', () => {
        shallow(<CakeListContainer store={store}/>);
    });


});