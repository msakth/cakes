import React from 'react';
import {shallow} from 'enzyme';
import Routes from '../routes';
import configureStore from '../store/configureStore';

describe('routes', () => {
    let mountedRoutes;
    const store = configureStore();    

    beforeEach(() => {
        mountedRoutes = shallow(<Routes store={store} />)
    });

   it('Routes match snapshot', () => {
    expect(mountedRoutes).toMatchSnapshot();
   });

});