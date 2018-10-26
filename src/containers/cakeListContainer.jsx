import React from 'react';
import {connect} from 'react-redux';

import * as cakesApi from '../api/cakesApi';
import CakeListComponent from '../components/cakeListComponent.jsx';
import ErrorBoundary from '../Error/ErrorBoundary';

class CakeListContainer extends React.Component {

  componentDidMount() {
    this.props.fetchCakes();
  }

  render() {
    
    return(
      <ErrorBoundary>
        <CakeListComponent cakes={this.props.cakes} />        
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
    fetchCakes: () => dispatch(cakesApi.fetchCakes())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeListContainer);

