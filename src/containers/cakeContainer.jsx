import React from 'react';
import {connect} from 'react-redux';

import * as cakesApi from '../api/cakesApi';
import CakeComponent from '../components/cakeComponent.jsx';
import ErrorBoundary from '../Error/ErrorBoundary';

class CakeContainer extends React.Component {

  addCake = (cake) => {    
    this.props.addCake(cake).then(results => {
      this.props.history.push('/');
    });
  }

  render() {
    
    return(
      <ErrorBoundary>
        <CakeComponent addCake = {this.addCake} />        
      </ErrorBoundary>
    )
  }
}

function mapStateToProps(state) {  
  return{
    cakes : state.CakeReducer.cakes
  };
}

function mapDispatchToProps(dispatch) {
  return{
    
    addCake: (cake) => dispatch(cakesApi.createCake(cake))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

