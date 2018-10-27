import React from 'react';
import {connect} from 'react-redux';

import * as cakesApi from '../api/cakesApi';
import CakeViewComponent from '../components/cakeViewComponent.jsx';
import ErrorBoundary from '../Error/ErrorBoundary';

class CakeViewContainer extends React.Component {

    fetchCake = () => {
        const id = this.props.match.params.id;
        return this.props.fetchCake(id);
    }     
 

  render() {         
    return(
      <ErrorBoundary>
        <CakeViewComponent fetchCake = {this.fetchCake} />        
      </ErrorBoundary>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return{    
    fetchCake: (id) => dispatch(cakesApi.fetchCake(id))
  };
}

export default connect(null, mapDispatchToProps)(CakeViewContainer);

