import React from 'react';
import {shallow, mount} from 'enzyme';
import CakeContainer from '../containers/cakeContainer.jsx';
import configureStore from '../store/configureStore';

describe('Cake Container', () => {

    const store = configureStore();

    it('cake container renders without crashing', () => {
        shallow(<CakeContainer store={store}/>);
    });

    it('should have CakeComponent as child', () => {  
        const wrapper = mount(<CakeContainer store={store}/>);
        const cakeComponent = wrapper.find('CakeComponent');
        expect(cakeComponent.length).toBe(1);
    });

});

