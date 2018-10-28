import React from 'react';
import CakeComponent from '../components/cakeComponent.jsx';
import {shallow, mount, render} from 'enzyme';


describe('Cake Component', () => {
    let mountedCakeComponent;    
  
    beforeEach(() => {
        mountedCakeComponent = shallow(<CakeComponent/>);
    });
  
    it('cake component renders without crashing', () => {
      shallow(<CakeComponent/>);
    });

    it('should have states for name, comment, yumfactor, imageurl', () => {        
        expect(mountedCakeComponent.state('name')).toBeDefined();
        expect(mountedCakeComponent.state('comment')).toBeDefined();
        expect(mountedCakeComponent.state('yumFactor')).toBeDefined();
        expect(mountedCakeComponent.state('imageUrl')).toBeDefined();
      });

      it('should have methods to handle name, comment, yumfactor, imageurl', () => {
        expect(mountedCakeComponent.instance().handleSubmit).toBeDefined();
        expect(mountedCakeComponent.instance().handleOnChange).toBeDefined();        
      });

      it('should set state for the given name', () => {
        const component = mount(<CakeComponent />);
        component.find('input#name').getDOMNode().value = 'nice cake';
        component.find('input#name').simulate('change');
        expect(component.instance().state.name).toEqual('nice cake');
      });

      it('should set state for the given comment', () => {
        const component = mount(<CakeComponent />);
        component.find('textarea#comment').getDOMNode().value = 'nice!';
        component.find('textarea#comment').simulate('change');
        expect(component.instance().state.comment).toEqual('nice!');
      });

      it('should set state for the given imageurl', () => {
        const component = mount(<CakeComponent />);
        component.find('input#imageUrl').getDOMNode().value = 'http://nicecake.com';
        component.find('input#imageUrl').simulate('change');
        expect(component.instance().state.imageUrl).toEqual('http://nicecake.com');
      });

      it('should render yumfactor with options having length of 6', () => {      
        const component = render(<CakeComponent />);
        expect(component.find('option').length).toBe(6);
      });

});